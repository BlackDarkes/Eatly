import { PurchasesList } from "@features/purchases";

export const PurchasesInfo = () => {
  return (
    <div>
      <h1>Control <span>Purchases</span> Via Dashboard</h1>

      <PurchasesList />
    </div>
  );
}