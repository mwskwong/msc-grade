import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const Stat = ({ value, label, unit }) => {
  return (
    <div>
      <Typography variant="h3" component="dd">
        {value}
        <Typography component="span">
          {unit}
        </Typography>
      </Typography>
      <Typography component="dt" sx={{ color: "text.secondary" }}>
        {label}
      </Typography>
    </div>
  );
};

Stat.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element
  ]),
  unit: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element
  ]),
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element
  ])
};

export default Stat;