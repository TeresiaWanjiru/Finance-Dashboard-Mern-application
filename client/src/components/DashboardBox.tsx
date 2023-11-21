import { Box } from "@mui/material";
import { styled } from "@mui/system";
// import { Theme, useTheme } from "@emotion/react";

// const theme = useTheme<Theme>();

const DashboardBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.light,
  borderRadius: "1rem",
  boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem  rgba(0, 0, 0, .8)",
  width: "100%",
}));

export default DashboardBox;
