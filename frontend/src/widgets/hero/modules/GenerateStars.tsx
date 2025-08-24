import { memo } from "react";
import IconStar from "../assets/icons/star.svg?react";

interface IGenerateStarsProps {
  count: number;
}

export const GenerateStars = memo(({ count }: IGenerateStarsProps) => {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <IconStar style={{ color: "#F59E0B" }} key={index} />
      ))}
    </>
  );
});
