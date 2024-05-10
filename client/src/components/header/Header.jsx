import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="headerLogo">
          <Link to="/">iHarmony Hub</Link>
        </div>
        <nav
          className={`headerNav ${isOpen ? "active" : ""}`}
          onClick={() => setOpen(false)}
        >
          <ul className="headerNavList">
            <li className="headerNavItem">
              <Link to="/products">Магазин </Link>
            </li>
            <li className="headerNavItem">
              <Link to="/contacts">Преимущества</Link>
            </li>
            <li className="headerNavItem">
              <Link to="/Booking">Бронирование </Link>
            </li>
            <li className="headerNavItem">
              <Link to="https://t.me/coworking_orgmu">Контакты</Link>
            </li>
            <button>Design you iphone</button>
          </ul>

          <div className="headerNavItemLogin">
            <img src="/public/Group 1088.png" alt="" />
          </div>
        </nav>
        <div className="headerMenu">
          <button onClick={() => setOpen(!isOpen)}>
            <img src="/public/Category.svg" width={40} height={40} alt="" />
          </button>
        </div>
      </header>
    </>
  );
}
