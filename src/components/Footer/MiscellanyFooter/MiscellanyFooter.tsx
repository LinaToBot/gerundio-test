import useMediaQuery from "../../../hooks/useMediaQuery";
import xIcon from "../../../assets/x-icon.svg";
import fbIcon from "../../../assets/fb-icon.svg";
import phoneIcon from "../../../assets/phone.svg";
import emailIcon from "../../../assets/email.svg";
import "./styles.scss";

/**
 * Renders the Miscellany Footer component.
 *
 * - Displays MiscellanyFooter to import this component to Footer
 *   and keep the code readable and maintainable.
 * - Uses media queries to show/hide elements based on screen size.
 *
 * @component
 * @example
 * return <MiscellanyFooter />
 *
 * @returns {React.FC} The MiscellanyFooter component.
 */

const MiscellanyFooter: React.FC = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="miscellany-container">
      <div className="information">
        <p>Shield Plus</p>
        <p>
          Providing reliable coverage for health, life, travel, and assets with
          seamless claim processes and 24/7 support.
        </p>
        {isLargeScreen && (
          <div className="contact">
            <div>
              <img /> <p>+(123) 456-7890</p>
            </div>
            <div>
              <img /> <p>support@Shield Plus.com</p>
            </div>
          </div>
        )}
      </div>
      <div className="links">
        <p id="links-p">Quick Links</p>
        <div className="links-list">
          <a>Insurance Plans</a>
          <a>Customer Support</a>
          <a>Claims Assistance</a>
          <a>About Us</a>
        </div>
      </div>
      <div className="newsletter">
        <p id="newsletter-title">
          Subscribe to Our <br /> Newsletter
        </p>
        <p id="newsletter-p">
          Providing reliable coverage for health, life, travel, and assets with
          seamless claim processes and 24/7 support.
        </p>
        <div className="email-input">
          <input placeholder="Enter Your Email"></input>
          <button>Subscribe</button>
        </div>
        <div className="social-media">
          <img src={xIcon} alt="x icon" />
          <img src={fbIcon} alt="facebook icon" />
        </div>
      </div>
      {!isLargeScreen && (
        <div className="contact">
          <div id="phone">
            <img src={phoneIcon} alt="phone icon" /> <p>+(123) 456-7890</p>
          </div>
          <div id="email">
            <img src={emailIcon} alt="email icon" />
            <p>support@Shield Plus.com</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiscellanyFooter;
