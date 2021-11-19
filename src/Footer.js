import React from "react";
import "./Footer";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      This project was coded by{" "}
      <a
        href="https://www.linkedin.com/in/argielyn-lapid-997565b5/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Argielyn Lapid
      </a>
      , open-sourced on{" "}
      <a
        href="https://github.com/jihcoding/weather-forecast-react"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>{" "}
      and hosted on{" "}
      <a
        href="https://loving-goldstine-308f4e.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Netlify
      </a>
    </footer>
  );
}
