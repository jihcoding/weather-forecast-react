import React from "react";
import "./Footer";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      This project was coded by{" "}
      <a
        href="https://www.shecodes.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Argielyn Lapid
      </a>
      , open-sourced on{" "}
      <a href="/" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>{" "}
      and hosted on{" "}
      <a href="/" target="_blank" rel="noopener noreferrer">
        Netlify
      </a>
    </footer>
  );
}
