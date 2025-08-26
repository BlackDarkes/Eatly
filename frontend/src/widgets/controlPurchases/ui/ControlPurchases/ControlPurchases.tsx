import { Container } from "@shared/ui";
import { PurchasesInfo } from "../PurchasesInfo/PurchasesInfo";
import { PurchasesStat } from "../PurchasesStat/PurchasesStat";

export const ControlPurchases = () => {
  return (
    <section>
      <Container>
        <PurchasesInfo />

        <PurchasesStat />
      </Container>
    </section>
  );
}