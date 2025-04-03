import useMediaQuery from "../../hooks/useMediaQuery";
import InstructionClause from "./InstructionClause/InstructionClause";
import { instructionsData } from "../../utils/instructionsData";
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
    <section className="sections instructions-sections">
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

        {instructionsData.map((instruction, index) => (
          <InstructionClause
            key={index}
            number={instruction.number}
            title={instruction.title}
            instruction={instruction.instruction}
          />
        ))}
      </div>
    </section>
  );
};

export default InstructionsSection;
