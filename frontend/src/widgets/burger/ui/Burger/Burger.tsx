import { BurgerButton } from "../BurgerButton/BurgerButton";
import { BurgerList } from "../BurgerList/BurgerList";

interface IBurgerProps {
  isOpen: boolean;
  handleOpen: () => void;
  onLogin: () => void;
  onRegister: () => void;
}
  
export const Burger = ({ isOpen, handleOpen, onLogin, onRegister }: IBurgerProps) => {
  return (
    <>
      <BurgerButton isOpen={isOpen} handleOpen={handleOpen} />
      <BurgerList onLogin={onLogin} onRegister={onRegister} isOpen={isOpen} />
    </>
  );
}