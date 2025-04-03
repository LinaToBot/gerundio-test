import "./styles.scss";
type CardInfoProps = {
  imgPath: string;
  information: string;
  benefit: string;
  cssClass?: string;
  imgWidth?: string;
  imgHeight?: string;
};

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
