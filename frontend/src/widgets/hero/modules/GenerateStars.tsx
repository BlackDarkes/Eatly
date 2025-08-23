import IconStar from "../assets/icons/star.svg?react";

interface IGenerateStarsProps {
  count: number;
}
  
export const GenerateStars = ({ count }: IGenerateStarsProps) => {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <IconStar style={{ color: "#F59E0B" }} key={index} />
      ))}
    </>
  )
}