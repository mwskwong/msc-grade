import BarShape from "./BarShape";
import grades from "constants/grades";
import { useTheme } from "@mui/material";

const useBarOptions = () => {
  const theme = useTheme();

  return {
    name: "GPA",
    dataKey: ({ grade }) => grades[grade],
    fill: theme.palette.primary.main,
    barSize: parseInt(theme.spacing(2)),
    legendType: "circle",
    shape: <BarShape />
  };
};

export default useBarOptions;