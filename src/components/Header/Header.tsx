import { useEffect, useState } from "react";
import "./styles.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(
    window.matchMedia("(min-width: 769px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 769px)");

    const handleResize = (event: MediaQueryListEvent) => {
      setIsLargeScreen(event.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

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
            <div></div>
          </button>
        )}
        <button className="primary-btn">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
