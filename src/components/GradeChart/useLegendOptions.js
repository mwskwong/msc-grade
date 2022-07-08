import { Box } from "@mui/material";

const useBarOptions = () => ({
  verticalAlign: "top",
  formatter: value => (
    <Box component="span" sx={{ typography: "body2", color: "text.secondary" }}>
      {value}
    </Box>
  )
});

export default useBarOptions;