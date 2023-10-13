import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import { links } from "../../libs/links";

export default function Header() {
  return (
    <header className="col-2 header">
      {/* Logo */}
      <Link className="logo__container" to={"/"}>
        <i class="fa-solid fa-money-bill"></i>
        <span className="app__name">Spending App</span>
      </Link>

      {/* Profile */}
      <div className="profile">
        <img src="/avatar-1.jpg" alt="" className="profile__avatar" />
        <span className="profile__name">Humiba</span>
      </div>

      {/* Navigation links */}
      <nav className="d-flex flex-column nav__links">
        {/* {links.map((link) => (
          <div key={link.id} className="link__container">
            <i className={`link__icon ${link.icon}`}></i>
            <a href={link.url} className="link__text">
              {link.text}
            </a>
          </div>
        ))} */}
        {links.map((link) => (
          <div key={link.pageGroup}>
            <span className="page__group-title">{link.pageGroup}</span>
            <ul>
              {link.pages.map((page) => (
                <li key={page.id} className="link__container">
                  <i className={`link__icon ${page.icon}`}></i>
                  <a href={page.url} className="link__text">
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </header>
  );
}
