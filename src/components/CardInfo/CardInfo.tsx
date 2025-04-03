import "./styles.scss";
type CardInfoProps = {
  imgPath: string;
  information: string;
  benefit: string;
  cssClass?: string;
};

const CardInfo: React.FC<CardInfoProps> = ({
  imgPath,
  information,
  benefit,
  cssClass,
}) => {
  return (
    <div className="card">
      <img src={imgPath} alt={`${benefit}-icon`} className={cssClass} />
      <p>{benefit}</p>
      <p>{information}</p>
    </div>
  );
};

export default CardInfo;
