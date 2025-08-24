import type { IRestorant } from "@shared/types/restorant/restorant.interface";
import { RestorantElement } from "../ui/RestorantElement/RestorantElement";
import type { MouseEvent } from "react";

interface IGenerateRestorantProps {
  restorants: IRestorant[] | undefined;
  handleCLick: (e: MouseEvent<HTMLButtonElement>, favourit: string) => void;
}
  
export const GenerateRestorant = ({ restorants, handleCLick }: IGenerateRestorantProps) => {
  return (
    <>
      {restorants?.map((restoran) => {
        if (parseFloat(restoran.stars) >= 4.8) {
          return <RestorantElement key={restoran.id} restorant={restoran} handleClick={(e) => handleCLick(e, restoran.id)} />
        }
      })}
    </>
  );
}