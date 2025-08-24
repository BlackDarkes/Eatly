import { useEffect, useState } from "react";

export const useWindow = () => {
  const [width, setWidth] = useState<number>(window.innerHeight);
  const [height, setHeight] = useState<number>(window.innerWidth);

  useEffect(() => {
    const changeSize = () => {
      setHeight(window.innerHeight)
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", changeSize);

    return () => {
      window.removeEventListener("resize", changeSize);
    }
  })

  return { height, width };
}