import "./styles.scss";

interface InstructionClauseProps {
  number: string;
  title: string;
  instruction: string;
}

/**
 * Renders the InstructionClause component.
 *
 * @param {string} number - The instruction´s number on the list.
 * @param {string} title - The instruction´s  title on the list.
 * @param {string} instruction - The instruction on the list.
 *
 * @component
 * @example
 * return <InstructionClause />
 *
 * @returns { React.FC} The  InstructionClause component.
 */

const InstructionClause: React.FC<InstructionClauseProps> = ({
  number,
  title,
  instruction,
}) => {
  return (
    <div className="list">
      <p className="title">
        <span>{number}</span>
        <span id="title-span">{title}</span>
      </p>
      <div className="paragraph-container">
        <p>{instruction}</p>
      </div>
    </div>
  );
};

export default InstructionClause;
