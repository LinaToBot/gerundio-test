import { JSX } from "react";
import "./styles.scss";
import ProductSection from "../ProductSection/ProductSection";
import BenefitsSection from "../BenefitsSection/BenefitsSection";

/**
 * Renders the Main Layout component with responsive behavior.
 *
 * @component
 * @example
 * return <MainLayout />
 *
 * @returns {JSX.Element} The MainLayout component.
 */

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
