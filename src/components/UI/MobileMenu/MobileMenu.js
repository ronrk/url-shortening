import React from "react";

const MobileMenu = () => {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Resources</a>
          </li>
        </ul>
      </nav>
      <div className="btns-container">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default MobileMenu;
