import { useStore } from "@app/store/store";
import { BurgerButton } from "../BurgerButton/BurgerButton";
import { BurgerList } from "../BurgerList/BurgerList";

interface IBurgerProps {
  isOpen: boolean;
  handleOpen: () => void;
}
  
export const Burger = ({ isOpen, handleOpen }: IBurgerProps) => {
  const { isAuthenticated, logout } = useStore();

  return (
    <>
      <BurgerButton isOpen={isOpen} handleOpen={handleOpen} />
      <BurgerList isOpen={isOpen} isAuthenticated={isAuthenticated} logout={logout} />
    </>
  );
}