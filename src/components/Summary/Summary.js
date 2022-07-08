import { Box, Stack } from "@mui/material";

import Stat from "./Stat";
import concentrationRequireNumOfCourses from "constants/concentrationRequireNumOfCourses";
import courses from "constants/courses";
import gga from "constants/gga";
import useCGPA from "hooks/useCGPA";
import useConcentrationCounts from "hooks/useConcentrationCounts";
import useMinRequiredGrade from "hooks/useMinRequiredGrade";

const Summary = () => {
  const cgpa = useCGPA(courses);
  const { ft, tie } = useConcentrationCounts(courses);
  const minRequiredGrade = useMinRequiredGrade(courses);

  return (
    <Stack direction="row" spacing={4} sx={{ justifyContent: "space-between" }}>
      <Stat
        label="CGPA"
        value={
          <Box
            component="span"
            sx={{ color: isNaN(cgpa) ? "text.disabled" : cgpa >= gga ? "success.main" : "error.main" }}
          >
            {cgpa}
          </Box>
        }
      />
      <Stat
        label="Min. Required Grade"
        value={
          <Box
            component="span"
            sx={{ color: minRequiredGrade ? undefined : "text.disabled" }}
          >
            {minRequiredGrade || "N/A"}
          </Box>
        }
      />
      <Stat
        label="FT"
        value={
          <Box
            component="span"
            sx={{ color: ft >= concentrationRequireNumOfCourses ? "success.main" : "warning.main" }}
          >
            {ft}
          </Box>
        }
        unit={` / ${concentrationRequireNumOfCourses}`}
      />
      <Stat
        label="TIE"
        value={
          <Box
            component="span"
            sx={{ color: tie >= concentrationRequireNumOfCourses ? "success.main" : "warning.main" }}
          >
            {tie}
          </Box>
        }
        unit={` / ${concentrationRequireNumOfCourses}`}
      />
    </Stack>
  );
};

export default Summary;