import React from "react";

const Social = (props) => {
  return (
    <div className="home__social">
      <a
        href="https:/www.linkedin.com/"
        className="home__social-icon"
        target="blank"
      >
        <i class="uil uil-linkedin"></i>
      </a>

      <a
        href="https:/www.github.com/"
        className="home__social-icon"
        target="blank"
      >
        <i class="uil uil-github"></i>
      </a>

      <a
        href="https:/www.instagram.com/"
        className="home__social-icon"
        target="blank"
      >
        <i class="uil uil-instagram-alt"></i>
      </a>

      <span
        className="home__social-icon"
        onClick={() => {
          props.themeToggler();
        }}
      >
        {props.theme === 1 ? (
          <i class="uil uil-moon"></i>
        ) : (
          <i class="uil uil-brightness"></i>
        )}
      </span>
    </div>
  );
};

export default Social;
