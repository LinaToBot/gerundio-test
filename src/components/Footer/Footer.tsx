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
      <div className="second-part">
        <div className="legal-info">
          <a href="">Terms & Conditions</a>

          <a href="">Privacy Policy</a>

          <a href="">Licensing</a>
        </div>
        <div className="divisor-line"></div>
        <p id="rights">© 2025 Shield Plus. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
