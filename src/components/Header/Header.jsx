import React from "react";
import Logo from "../Logo/Logo";
import { MENU } from "../../utils/contstans";

const Header = () => (
  <section className="header">
    <div className="container">
      <header>
        <Logo />
        <nav>
          {MENU.map(({ link, name }) => (
            <hello></hello>
          ))} 
        </nav>
      </header>
    </div>
  </section>
);

export default Header;
