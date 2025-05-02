import { useEffect, useState } from "react";

export default function usePositionElement() {
  const [bottomElementPosition, setBottomElementPosition] =
    useState("absolute");
  useEffect(() => {
    const adjustBottomElementPosition = () => {
      const contentHeight = document.getElementById("content")!.offsetHeight;

      const windowHeight = window.innerHeight;

      if (contentHeight < windowHeight) {
        setBottomElementPosition("fixed");
      } else {
        setBottomElementPosition("absolute");
      }
    };

    adjustBottomElementPosition();

    window.addEventListener("resize", adjustBottomElementPosition);
    return () => {
      window.removeEventListener("resize", adjustBottomElementPosition);
    };
  }, []);

  return bottomElementPosition;
}
