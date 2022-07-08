import { Box, Container, Stack, Typography } from "@mui/material";

import GradeChart from "components/GradeChart";
import Summary from "components/Summary";
import courses from "constants/courses";

const App = () => (
  <Container
    sx={{
      height: "100vh",
      py: 3,
      display: "flex",
      flexDirection: "column"
    }}
    maxWidth="xl"
  >
    <Stack spacing={2} sx={{ height: "100%" }}>
      <Typography variant="h6" component="h1">
        Matthew's MScISM Grade
      </Typography>
      <Summary />
      <Box sx={{ flex: 1 }}>
        <GradeChart courses={courses} />
      </Box>
    </Stack>
  </Container>
);

export default App;
