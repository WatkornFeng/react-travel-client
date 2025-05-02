import { useState, useEffect } from "react";

export default function useScrollVisibility(scrollThreshold: number) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > scrollThreshold) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", controlNavbar);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return show;
}
