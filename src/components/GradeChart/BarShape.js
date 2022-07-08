import { Box, useTheme } from "@mui/material";

import { memo } from "react";

const BarShape = ({ fill, opacity, x, y, width, height }) => {
  const { shape: { borderRadius } } = useTheme();

  if (isNaN(y)) return null;

  return (
    <Box
      component="path"
      sx={{
        transition: theme => theme.transitions.create("opacity", {
          duration: theme.transitions.duration.short
        })
      }}
      fill={fill}
      opacity={opacity}
      d={`
        M ${x},${y + borderRadius}
        q 0,-${borderRadius} ${borderRadius},-${borderRadius}
        h ${width - borderRadius * 2}
        q ${borderRadius},0 ${borderRadius},${borderRadius}
        v ${height - borderRadius}
        h -${width}
        Z
      `}
    />
  );
};

export default memo(BarShape);