import type { IPurchases } from "@entities/controlPurchases/types/purchases.interface";

interface IPurchasesElementProps {
  purchases: IPurchases;
}
  
export const PurchasesElement = ({ purchases }: IPurchasesElementProps) => {
  return (
    <li>
      <img src={`${import.meta.env.VITE_API_URL}/${purchases.product_ids[0]}`} alt={`Заказ номер ${purchases.id}`} />
      <div>
        <h3></h3>
        <p></p>
      </div>
      <p></p>
    </li>
  );
}