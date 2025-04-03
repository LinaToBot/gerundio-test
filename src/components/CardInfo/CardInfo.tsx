import "./styles.scss";
type CardInfoProps = {
  imgPath: string;
  information: string;
  benefit: string;
  cssClass?: string;
  imgWidth?: string;
  imgHeight?: string;
};

/**
 * Renders a card (button) with customizable texts, images and its styles.
 *
 * @param {string} imgPath - The image src on the card.
 * @param {string} information - The benefit´s information on the card.
 * @param {string} benefit - The benefit´s title on the card.
 * @param {string} cssClass - Optional The costumized className on the card.
 * @param {string} imgWidth - Optional The image´s width on the card.
 * @param {string} imgHeight - Optional The image´s height on the card.
 *
 * @component
 * @example
 * return <CardInfo />
 *
 * @returns {React.FC} The CardInfo component.
 */

const CardInfo: React.FC<CardInfoProps> = ({
  imgPath,
  information,
  benefit,
  cssClass,
  imgWidth,
  imgHeight,
}) => {
  return (
    <button className="card">
      <img
        src={imgPath}
        alt={`${benefit}-icon`}
        className={cssClass}
        width={imgWidth}
        height={imgHeight}
      />
      <p>{benefit}</p>
      <p>{information}</p>
    </button>
  );
};

export default CardInfo;
