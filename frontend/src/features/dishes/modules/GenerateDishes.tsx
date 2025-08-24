import type { IDishes } from "@shared/types/dishes/dishes.interface";
import { DishesElement } from "../ui/DishesElement/DishesElement";
import { useWindow } from "@shared/hooks/useWindow";

interface IGenerateDishesProps {
  dishes: IDishes[] | undefined;
}
  
export const GenerateDishes = ({ dishes }: IGenerateDishesProps) => {
  const { width } = useWindow();

  const renderElements = width > 1024 ? dishes : dishes?.slice(0, 4);

  return (
    <>
      {renderElements?.map((dish) => {
        return <DishesElement key={dish.id} dish={dish} />
      })}
    </>
  );
}