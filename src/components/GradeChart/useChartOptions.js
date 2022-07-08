import { useCallback, useMemo, useState } from "react";

const useChartOptions = courses => {
  const [activeBar, setActiveBar] = useState();

  const handleMouseMove = useCallback(({ activeLabel, isTooltipActive }) => {
    if (isTooltipActive) {
      setActiveBar(activeLabel);
    } else {
      setActiveBar(null);
    }
  }, []);

  const chartOptions = useMemo(() => ({
    activeBar,
    onMouseMove: handleMouseMove,
    data: courses,
    margin: { top: 0, right: 0, bottom: 0, left: 10 }
  }), [activeBar, courses, handleMouseMove]);

  return chartOptions;
};

export default useChartOptions;