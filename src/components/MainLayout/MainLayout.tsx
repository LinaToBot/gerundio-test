import { JSX } from "react";
import "./styles.scss";
import ProductSection from "../ProductSection/ProductSection";

const MainLayout = (): JSX.Element => {
  return (
    <main className="main-layout">
      <ProductSection />
      <section className="sections"></section>
      <section className="sections"></section>
      <section className="sections"></section>
    </main>
  );
};

export default MainLayout;
