import useMediaQuery from "../../hooks/useMediaQuery";
import CardInfo from "../CardInfo/CardInfo";
import { cardInfoData } from "../../utils/cardInfoData";
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
      <div className="layout-cards">
        <div className="full-width">
          <div className="texts">
            <p>Why Thousands Trust Us </p>
            <p>for Their Insurance Needs</p>
            {!isLargeScreen ? (
              <p>
                Reliable, affordable, and hassle-free insurance solutions
                tailored for you.
              </p>
            ) : (
              <p>
                Reliable, affordable, and hassle-free insurance solutions
                tailored <br />
                for you. With 24/7 support and quick claims processing.
              </p>
            )}
          </div>
        </div>
        {cardInfoData.map((data, index) => (
          <CardInfo
            key={index}
            imgPath={data.imgPath}
            benefit={data.benefit}
            information={data.information}
            imgWidth={data.imgWidth}
            imgHeight={data.imgHeight}
          />
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
