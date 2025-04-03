import useMediaQuery from "../../hooks/useMediaQuery";
import InstructionClause from "./InstructionClause/InstructionClause";
import img from "/instructions.png";
import "./styles.scss";

/**
 * Renders the InstructionsSection component.
 *
 * @component
 * @example
 * return <InstructionsSection />
 *
 * @returns {React.FC} The  InstructionsSection component with InstructionClause.
 */

const InstructionsSection: React.FC = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  return (
    <section className="sections">
      {!isLargeScreen && (
        <div className="mobile-paragraphs">
          <p>Getting Insured Is Simple & Fast</p>
          <p>Follow these easy steps to secure your insurance plan today. </p>
        </div>
      )}

      <img
        src={img}
        alt="paper with instructions"
        id="instructions-img"
        loading="lazy"
      />

      <div className="instructions">
        {isLargeScreen && (
          <div className="desktop-paragraphs">
            <p>Getting Insured Is Simple & Fast</p>
            <p>
              Follow these easy steps to secure your insurance plan today. No
              complicated paperwork, no hidden fees – just reliable coverage in
              minutes!
            </p>
          </div>
        )}

        <InstructionClause
          number="01 - "
          title="Choose a Plan"
          instruction="Browse through our range of insurance plans tailored for your needs. Whether you need health, life, car, home, or travel insurance, we have a plan that fits your lifestyle and budget."
        />

        <InstructionClause
          number="02 - "
          title="Get a Free Quote"
          instruction="Fill out a quick form with basic details, and our system will generate a personalized quote instantly. No commitments, no hidden charges—just a transparent breakdown of your insurance options."
        />

        <InstructionClause
          number="03 - "
          title="Apply Online"
          instruction="Once you’ve chosen your plan, complete the application online in a few simple steps. Our digital process ensures secure and hassle-free enrollment—no lengthy paperwork required."
        />

        <InstructionClause
          number="04 - "
          title="Get Covered Instantly"
          instruction="Once your application is reviewed and approved, your policy becomes active immediately. You’ll receive a digital copy of your insurance documents, and you’re fully protected from day one."
        />
      </div>
    </section>
  );
};

export default InstructionsSection;
