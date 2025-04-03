import MiscellanyFooter from "./MiscellanyFooter/MiscellanyFooter";
import "./styles.scss";

/**
 * Renders the Footer component.
 *
 * - Displays MiscellanyFooter from other component
 *   to keep the code readable and maintainable.
 *
 * @component
 * @example
 * return <Footer />
 *
 * @returns {React.FC} The Footer component.
 */

const Footer: React.FC = () => {
  return (
    <footer className="customized-footer">
      <MiscellanyFooter />
      <ul>
        <li>
          <a href="">Terms & Conditions</a>
        </li>
        <li>
          <a href="">Privacy Policy</a>
        </li>
        <li>
          <a href="">Licensing</a>
        </li>
      </ul>
      <div className="divisor-line"></div>
      <p>© 2025 Shield Plus. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
