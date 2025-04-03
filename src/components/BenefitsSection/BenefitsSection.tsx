import CardInfo from "../CardInfo/CardInfo";
import plansIcon from "../../assets/plans.svg";
import supportIcon from "../../assets/support.svg";
import quickIcon from "../../assets/quick.svg";
import secureIcon from "../../assets/secure.svg";
import coverageIcon from "../../assets/coverage.svg";
import premiumIcon from "../../assets/premium.svg";
import "./styles.scss";

const BenefitsSection: React.FC = () => {
  return (
    <section className="sections">
      <div className="texts">
        <p>Why Thousands Trust Us </p>
        <p>for Their Insurance Needs</p>
        <p>
          Reliable, affordable, and hassle-free insurance solutions tailored for
          you.
        </p>
      </div>
      <div className="layout-cards">
        <CardInfo
          imgPath={plansIcon}
          benefit="Custom Plans Available"
          information="Select from a variety of plans designed to fit your lifestyle, needs, and budget, ensuring the right coverage for you and your family."
        />
        <CardInfo
          imgPath={supportIcon}
          benefit="Support Anytime Anywhere"
          information="Get professional assistance 24/7 from our dedicated team, ready to guide you through policies, claims, and insurance solutions anytime."
        />
        <CardInfo
          imgPath={quickIcon}
          benefit="Quick Claims Process"
          information="Enjoy a fast, simple, and transparent claims process with minimal paperwork, ensuring swift approvals and hassle-free payouts."
        />
        <CardInfo
          imgPath={secureIcon}
          benefit="Secure and Private"
          information="Your personal data and transactions are fully protected with the latest encryption, ensuring security and confidentiality at all times."
        />
        <CardInfo
          imgPath={coverageIcon}
          benefit="Global Coverage Plans"
          information="Stay protected wherever you go with worldwide insurance coverage, offering peace of mind for both travel and daily life."
        />
        <CardInfo
          imgPath={premiumIcon}
          benefit="Affordable Premium Options"
          information="Get high-value insurance plans with transparent pricing, no hidden fees, and competitive rates tailored to your financial needs."
        />
      </div>
    </section>
  );
};

export default BenefitsSection;
