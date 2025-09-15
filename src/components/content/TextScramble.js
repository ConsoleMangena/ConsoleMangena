import React, { useEffect, useRef, useState, useCallback } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

// Letter scramble animation adapted for React
// Cycles through provided phrases with a morphing scramble effect
// Usage: <TextScramble phrases={["Full‑Stack Engineer", "Consultant"]} interval={1600} />

const CHARS = "!<>-_/\\[]{}—=+*^?#________0123456789abcdefghijklmnopqrstuvwxyz";
const randomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

export const TextScramble = ({
  phrases = [],
  interval = 1800, // pause between completed phrases
  scrambleMin = 10,
  scrambleMax = 24,
  className,
}) => {
  const [text, setText] = useState('');
  const prefersReducedMotion = usePrefersReducedMotion();
  const frameRef = useRef(0);
  const queueRef = useRef([]);
  const rafRef = useRef(null);
  const mountedRef = useRef(false);
  const indexRef = useRef(0);
  const fromRef = useRef('');

  const update = useCallback(() => {
    const frame = frameRef.current + 1;
    frameRef.current = frame;
    let output = '';
    let complete = 0;

    for (let i = 0, n = queueRef.current.length; i < n; i++) {
      const { from, to, start, end, char } = queueRef.current[i];
      if (frame >= end) {
        complete++;
        output += to;
      } else if (frame >= start) {
        const newChar = char && Math.random() < 0.28 ? char : randomChar();
        queueRef.current[i].char = newChar;
        output += newChar;
      } else {
        output += from;
      }
    }

    setText(output);

    if (complete === queueRef.current.length) {
      rafRef.current = null;
      return; // finished this phrase
    } else {
      rafRef.current = requestAnimationFrame(update);
    }
  }, []);

  const setScramble = useCallback((newText) => {
    const oldText = fromRef.current || '';
    const length = Math.max(oldText.length, newText.length);
    const queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * scrambleMin);
      const end = start + Math.floor(scrambleMin + Math.random() * (scrambleMax - scrambleMin));
      queue.push({ from, to, start, end, char: '' });
    }

    queueRef.current = queue;
    frameRef.current = 0;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(update);
    fromRef.current = newText;
  }, [scrambleMin, scrambleMax, update]);

  useEffect(() => {
    mountedRef.current = true;

    if (!phrases || phrases.length === 0) {
      setText('');
      return () => { mountedRef.current = false; };
    }

    if (prefersReducedMotion) {
      setText(phrases[0]);
      return () => { mountedRef.current = false; };
    }

    // kick off loop
    setScramble(phrases[indexRef.current]);

    let timeoutId;

    const loop = () => {
      timeoutId = setTimeout(() => {
        indexRef.current = (indexRef.current + 1) % phrases.length;
        setScramble(phrases[indexRef.current]);
        loop();
      }, interval);
    };

    // Start after initial phrase displays
    loop();

    return () => {
      mountedRef.current = false;
      cancelAnimationFrame(rafRef.current);
      clearTimeout(timeoutId);
    };
  }, [phrases, interval, prefersReducedMotion, setScramble]);

  return (
    <span aria-live="polite" className={className}>
      {text}
    </span>
  );
};
