import { JSX } from "react";
import "./styles.scss";
import ProductSection from "../ProductSection/ProductSection";

const MainLayout = (): JSX.Element => {
  return (
    <main className="main-layout">
      <section className="sections">
        <ProductSection />
      </section>
      <section className="sections"></section>
      <section className="sections"></section>
      <section className="sections"></section>
    </main>
  );
};

export default MainLayout;
