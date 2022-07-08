import { useTheme } from "@mui/material";

const useXAxisOptions = () => {
  const theme = useTheme();

  return {
    dataKey: "code",
    interval: 0,
    angle: 315,
    height: 70,
    tickLine: false,
    axisLine: false,
    tick: {
      ...theme.typography.caption,
      textAnchor: "end",
      fill: theme.palette.text.secondary
    }
  };
};

export default useXAxisOptions;