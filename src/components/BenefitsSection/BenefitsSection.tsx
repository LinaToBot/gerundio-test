import useMediaQuery from "../../hooks/useMediaQuery";
import CardInfo from "../CardInfo/CardInfo";
import plansIcon from "../../assets/plans.svg";
import supportIcon from "../../assets/support.svg";
import quickIcon from "../../assets/quick.svg";
import secureIcon from "../../assets/secure.svg";
import coverageIcon from "../../assets/coverage.svg";
import premiumIcon from "../../assets/premium.svg";
import "./styles.scss";

/**
 * Renders the Benefits Section with CardInfo components.
 *
 * - Uses media queries to show/hide elements based on screen size.
 *
 * @component
 * @example
 * return <BenefitsSection />
 *
 * @returns {React.FC} The BenefitsSection component.
 */

const BenefitsSection: React.FC = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <section className="sections benefits-section">
      <div className="texts">
        <p>Why Thousands Trust Us </p>
        <p>for Their Insurance Needs</p>
        {!isLargeScreen ? (
          <p>
            Reliable, affordable, and hassle-free insurance solutions tailored
            for you.
          </p>
        ) : (
          <p>
            Reliable, affordable, and hassle-free insurance solutions tailored{" "}
            <br />
            for you. With 24/7 support and quick claims processing.
          </p>
        )}
      </div>
      <div className="layout-cards">
        <CardInfo
          imgPath={plansIcon}
          benefit="Custom Plans Available"
          information="Select from a variety of plans designed to fit your lifestyle, needs, and budget, ensuring the right coverage for you and your family."
          imgWidth="62"
          imgHeight="62"
        />
        <CardInfo
          imgPath={secureIcon}
          benefit="Secure and Private"
          information="Your personal data and transactions are fully protected with the latest encryption, ensuring security and confidentiality at all times."
          imgWidth="53.66"
          imgHeight="62"
        />
        <CardInfo
          imgPath={supportIcon}
          benefit="Support Anytime Anywhere"
          information="Get professional assistance 24/7 from our dedicated team, ready to guide you through policies, claims, and insurance solutions anytime."
          imgWidth="70.27"
          imgHeight="62"
        />
        <CardInfo
          imgPath={coverageIcon}
          benefit="Global Coverage Plans"
          information="Stay protected wherever you go with worldwide insurance coverage, offering peace of mind for both travel and daily life."
          imgWidth="62"
          imgHeight="62"
        />
        <CardInfo
          imgPath={quickIcon}
          benefit="Quick Claims Process"
          information="Enjoy a fast, simple, and transparent claims process with minimal paperwork, ensuring swift approvals and hassle-free payouts."
          imgWidth="55.47"
          imgHeight="62"
        />
        <CardInfo
          imgPath={premiumIcon}
          benefit="Affordable Premium Options"
          information="Get high-value insurance plans with transparent pricing, no hidden fees, and competitive rates tailored to your financial needs."
          imgWidth="54.63"
          imgHeight="62"
        />
      </div>
    </section>
  );
};

export default BenefitsSection;
