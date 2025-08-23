import { Header } from "@widgets/header";
import { Hero } from "@widgets/hero";
import { Features } from "@widgets/features";

export const HomePage = () => {
  return (
    <>
      <Header page="home" />
      <Hero />
      <Features />
    </>
  );
}