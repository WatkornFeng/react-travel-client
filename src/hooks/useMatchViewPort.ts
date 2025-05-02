import { useMediaQuery } from "@mui/material";
export default function useMatchViewPort(viewPortSize: number) {
  // Ex. const matches = useMediaQuery("(max-width:1000px)");
  const matches = useMediaQuery(`(max-width:${viewPortSize}px)`);

  return matches;
}
