import gga from "constants/gga";
import useLineOptions from "./useLineOptions";
import { useTheme } from "@mui/material";

const useGGALineOptions = () => {
  const theme = useTheme();
  const lineOptions = useLineOptions();

  return {
    ...lineOptions,
    name: "GGA",
    dataKey: () => gga,
    stroke: theme.palette.error.main
  };
};

export default useGGALineOptions;