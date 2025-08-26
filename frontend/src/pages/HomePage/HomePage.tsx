import { Header } from "@widgets/header";
import { Hero } from "@widgets/hero";
import { Features } from "@widgets/features";
import { DownloadApp } from "@widgets/downloadApp";
import { OurRestorants } from "@widgets/ourRestorants";
import { OurDishes } from "@widgets/ourDishes/ui/OurDishes";
import { ControlPurchases } from "@widgets/controlPurchases";

export const HomePage = () => {
  return (
    <>
      <Header page="home" />
      <Hero />
      <Features />
      <DownloadApp />
      <OurRestorants />
      <OurDishes />
      <ControlPurchases />
    </>
  );
}