import { memo } from "react";
import { DOWNLOAD_ITEMS } from "../constants/download";

interface IGenerateInfoProps {
  classLi: string;
}

export const GenerateInfo = memo(({ classLi }: IGenerateInfoProps) => {
  return (
    <>
      {DOWNLOAD_ITEMS?.map((item, index) => {
        return (
          <li key={index} className={classLi}>
            {item}
          </li>
        );
      })}
    </>
  );
});
