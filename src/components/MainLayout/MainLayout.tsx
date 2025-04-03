import { JSX } from "react";
import "./styles.scss";
import ProductSection from "../ProductSection/ProductSection";
import BenefitsSection from "../BenefitsSection/BenefitsSection";

const MainLayout: React.FC = (): JSX.Element => {
  return (
    <main className="main-layout">
      <ProductSection />
      <BenefitsSection />
      <section className="sections"></section>
      <section className="sections"></section>
    </main>
  );
};

export default MainLayout;
