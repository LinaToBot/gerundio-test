import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import "./styles.scss";

/**
 * Renders the Header component.
 *
 * - Displays a navigation menu.
 * - Uses media queries to show/hide elements based on screen size.
 * - Shows a hamburger menu on smaller screens.
 *
 * @component
 * @example
 * return <Header />
 *
 * @returns { React.FC} The Header component.
 */

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width: 769px)");

  return (
    <header className="customized-header">
      {!isLargeScreen && (
        <button onClick={() => setIsOpen(!isOpen)} className="menu-btn">
          {!isOpen ? "☰" : "X"}
        </button>
      )}

      <div className="menu-n-title">
        <nav className={isLargeScreen || isOpen ? "nav-open" : "nav-closed"}>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Plans</a>
            </li>
            <li>
              <a href="">Benefits</a>
            </li>
            <li>
              <a href="">Claims</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </nav>
        <p id="name-product">Shield Plus</p>
      </div>
      <div className="nav-btns">
        {isLargeScreen && (
          <button onClick={() => {}} className="login-btn">
            Login
          </button>
        )}
        <button className="primary-btn">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
