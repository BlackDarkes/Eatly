import { usePurchases } from "@features/purchases/api/usePurchases";

export const PurchasesList = () => {
  const { purchases } = usePurchases();

  console.log(purchases)

  return (
    <ul>

    </ul>
  );
}