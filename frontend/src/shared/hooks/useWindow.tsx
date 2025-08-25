import { useEffect, useState } from "react";

export const useWindow = () => {
  const [width, setWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 0);
  const [height, setHeight] = useState<number>(window.innerWidth);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

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