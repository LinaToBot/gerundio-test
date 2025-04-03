import ProductSection from "../ProductSection/ProductSection";
import BenefitsSection from "../BenefitsSection/BenefitsSection";
import InstructionsSection from "../InstructionsSection/InstructionsSection";
import "./styles.scss";

/**
 * Renders the Main Layout component with responsive behavior.
 *
 * @component
 * @example
 * return <MainLayout />
 *
 * @returns {JSX.Element} The MainLayout component.
 */

const MainLayout: React.FC = () => {
  return (
    <main className="main-layout">
      <ProductSection />
      <BenefitsSection />
      <InstructionsSection />
      <section className="sections"></section>
      <section className="sections"></section>
    </main>
  );
};

export default MainLayout;
