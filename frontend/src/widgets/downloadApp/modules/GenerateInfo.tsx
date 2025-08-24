import { DOWNLOAD_ITEMS } from "../constants/download";

interface IGenerateInfoProps {
  classLi: string;
}

export const GenerateInfo = ({ classLi }: IGenerateInfoProps) => {
  return (
    <>
      {DOWNLOAD_ITEMS?.map((item, index) => {
        return <li key={index} className={classLi}>{item}</li>;
      })}
    </>
  );
};
