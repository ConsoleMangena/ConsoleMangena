import React, { useEffect, useState } from "react";

const decryptOptions = {
    chars: [
        "-",
        ".",
        "/",
        "*",
        "!",
        "?",
        "#",
        "%",
        "&",
        "@",
        "$",
        "€",
        "(",
        ")",
        "[",
        "]",
        "{",
        "}",
        "<",
        ">",
        "~",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ],
    interval: 50,
};

export const TextDecrypt = (props) => {
    const [result, setResult] = useState("");
    const target = props.text || "";
    const interval = decryptOptions.interval || 50;

    useEffect(() => {
        let i = 0;
        const len = target.length;
        const current = new Array(len).fill("");
        const timer = setInterval(() => {
            if (i < len) {
                if (i > 0) {
                    current[i - 1] = target[i - 1];
                }
                for (let j = i; j < len; j++) {
                    const chars = decryptOptions.chars;
                    current[j] = chars[Math.floor(Math.random() * chars.length)];
                }
                setResult(current.join(""));
                i++;
            } else {
                setResult(target);
                clearInterval(timer);
            }
        }, interval);

        return () => clearInterval(timer);
    }, [target, interval]);

    return (
        <p>
          {result}
          {"\u00a0"}
        </p>
    );
};
