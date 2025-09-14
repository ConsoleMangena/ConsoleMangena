import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import "./Blog.css";

// Optional images: reuse existing assets if needed
import Profile from "../../assets/profile.png";

const useStyles = makeStyles(() => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
  },
}));

export const Blog = () => {
  const classes = useStyles();
  const [posts] = useState([
    {
      id: 1,
      title: "Welcome to my blog",
      description:
        "Thoughts on software engineering, architecture, and what I'm building.",
      date: "2025-01-01",
      image: Profile,
    },
    {
      id: 2,
      title: "Recent work and learnings",
      description:
        "A quick roundup of recent projects and the key lessons from each.",
      date: "2025-02-12",
      image: Profile,
    },
    {
      id: 3,
      title: "Tooling and productivity",
      description:
        "My current toolchain, why I chose it, and tips to stay productive.",
      date: "2025-03-23",
      image: Profile,
    },
  ]);

  return (
    <section id="blog">
      <Container component="main" className={classes.main} maxWidth="md">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="__img_wrapper">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={post.id + ". " + post.title} />
              </h3>
              <p className="description">{post.description}</p>
              <p className="meta">{post.date}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
