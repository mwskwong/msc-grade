import { Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import { Fragment, memo } from "react";
import { ThumbDown, ThumbUp } from "@mui/icons-material";

import gga from "constants/gga";
import grades from "constants/grades";

const TooltipContent = ({ active, payload = [] }) => {
  if (active && payload.length) {
    const { code, name, type, grade, concentrations } = payload[0].payload;
    const gpa = grades[grade];

    return (
      <Card>
        <CardContent>
          <Typography variant="overline" sx={{ color: "text.secondary" }}>
            {`${code} • ${type}`}
          </Typography>
          <Typography variant="body2" component="div" gutterBottom>
            {name}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ color: grade ? "text.primary" : "text.secondary" }}
            gutterBottom
          >
            {
              grade
                ? (
                  <Fragment>
                    {
                      gpa >= gga
                        ? (
                          <ThumbUp
                            color="success"
                            fontSize="inherit"
                            sx={{ verticalAlign: "middle" }}
                          />
                        )
                        : (
                          <ThumbDown
                            color="error"
                            fontSize="inherit"
                            sx={{ verticalAlign: "middle" }}
                          />
                        )
                    }
                    {` ${grade}`}
                  </Fragment>
                )
                : "N/A"
            }
          </Typography>
          <Stack direction="row" spacing={1}>
            {concentrations && (
              concentrations.map(concentration => (
                <Chip
                  key={concentration}
                  color={concentration === "TIE" ? "primary" : "secondary"}
                  label={concentration}
                  size="small"
                  sx={{ textTransform: "uppercase" }}
                />
              ))
            )}
          </Stack>
        </CardContent>
      </Card>
    );
  }

  return null;
};

export default memo(TooltipContent);