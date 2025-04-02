import img from "/image.png";
import "./styles.scss";

const ProductSection = () => {
  return (
    <section className="sections">
      <div>
        <div className="titles">
          <p>Smart Insurance</p>
          <p>Solutions for a Worry</p>
          <p>Free Life</p>
        </div>
        <img src={img} alt="people" id="mobile-img" loading="lazy" />
        <div id="content-product">
          <p className="paragraph">
            Stay protected with flexible coverage that safeguards your health,
            family, and assets. Choose the right plan and enjoy financial peace
            of mind.
          </p>
          <div className="product-btn">
            <button>Get a Free Quote</button>
            <button>View Our Plans</button>
          </div>
        </div>
      </div>
      <img src={img} alt="people" id="desktop-img" loading="lazy" />
    </section>
  );
};

export default ProductSection;
