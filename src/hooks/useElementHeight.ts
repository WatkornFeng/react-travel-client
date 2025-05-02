import { useEffect, useState } from "react";

export function useElementHeight(ref: React.RefObject<HTMLElement>) {
  const [height, setHeight] = useState(0);
  console.log(height);
  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight);
    }
  }, [ref]);

  return [height, setHeight];
}
