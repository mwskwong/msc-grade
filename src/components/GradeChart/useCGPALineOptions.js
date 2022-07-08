import useCGPA from "hooks/useCGPA";
import useLineOptions from "./useLineOptions";
import { useTheme } from "@mui/material";

const useCGPALineOptions = courses => {
  const theme = useTheme();
  const cgpa = useCGPA(courses);
  const lineOptions = useLineOptions();

  return {
    ...lineOptions,
    name: "CGPA",
    dataKey: () => cgpa,
    stroke: theme.palette.secondary.main
  };
};

export default useCGPALineOptions;
