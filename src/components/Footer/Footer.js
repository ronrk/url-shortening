import React from "react";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as FacebookIcon } from "../../images//icon-facebook.svg";
import { ReactComponent as TwitterIcon } from "../../images/icon-twitter.svg";
import { ReactComponent as PinterestIcon } from "../../images/icon-pinterest.svg";
import { ReactComponent as InstagramIcon } from "../../images/icon-instagram.svg";
import Wrapper from "./Footer.styled";

const Footer = () => {
  return (
    <Wrapper>
      <Logo />
      <nav>
        <ul>
          <li>Features</li>
          <li>
            <a href="/">Link Shortening</a>
          </li>
          <li>
            <a href="/">Branded Links</a>
          </li>
          <li>
            <a href="/">Analytics</a>
          </li>
        </ul>
        <ul>
          <li>Resources</li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Developers</a>
          </li>
          <li>
            <a href="/">Support</a>
          </li>
        </ul>
        <ul>
          <li>Company</li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Our Team</a>
          </li>
          <li>
            <a href="/">Careers</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <div className="social-links">
          <FacebookIcon />
          <TwitterIcon />
          <PinterestIcon />
          <InstagramIcon />
        </div>
      </nav>
    </Wrapper>
  );
};

export default Footer;
