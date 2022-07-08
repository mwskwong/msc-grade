import { Bar, Cell, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import PropTypes from "prop-types";
import useBarOptions from "./useBarOptions";
import useCGPALineOptions from "./useCGPALineOptions";
import useChartOptions from "./useChartOptions";
import useGGALineOptions from "./useGGALineOptions";
import useLegendOptions from "./useLegendOptions";
import useTooltipOptions from "./useTooltipOptions";
import useXAxisOptions from "./useXAxisOptions";
import useYAxisOptions from "./useYAxisOptions";

const GradeChart = ({ courses = [] }) => {
  const { activeBar, ...chartOptions } = useChartOptions(courses);
  const barOptions = useBarOptions();
  const xAxisOptions = useXAxisOptions();
  const yAxisOptions = useYAxisOptions();
  const ggaLineOptions = useGGALineOptions();
  const cgpaLineOptions = useCGPALineOptions(courses);
  const legendOptions = useLegendOptions();
  const tooltipOptions = useTooltipOptions();

  return (
    <ResponsiveContainer>
      <ComposedChart {...chartOptions}>
        <XAxis {...xAxisOptions} />
        <YAxis {...yAxisOptions} />
        <Tooltip {...tooltipOptions} />
        <Legend {...legendOptions} />
        <Bar {...barOptions}>
          {courses.map(({ code }) => (
            <Cell
              key={code}
              opacity={activeBar && activeBar !== code ? .1 : 1}
            />
          ))}
        </Bar>
        <Line {...cgpaLineOptions} />
        <Line {...ggaLineOptions} />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

GradeChart.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    concentrations: PropTypes.arrayOf(PropTypes.oneOf(["FT", "TIE"]))
  }))
};

export default GradeChart;