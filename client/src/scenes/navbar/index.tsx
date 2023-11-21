import { useState } from "react";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import { Link } from "react-router-dom";
import { Box, Theme, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const showNavbar =
    location.pathname !== "/login" && location.pathname !== "/register";
  const theme = useTheme<Theme>();
  const [selected, setSelected] = useState("dashboard");

  if (!showNavbar) {
    return null; // If not on specific routes, don't render the Navbar
  }

  return (
    <>
      <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={theme.palette.grey[300]}>
        {/* LEFT SIDE */}
        <FlexBetween gap="0.75rem">
          <AccountBalanceWalletRoundedIcon sx={{ fontSize: "28px" }} />
          <Typography variant="h4" fontSize="16px">
            BizManager
          </Typography>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap="2rem">
          <Box sx={{ "&:hover": { color: theme.palette.primary[100] } }}>
            <Link
              to="/"
              onClick={() => setSelected("dashboard")}
              style={{
                color:
                  selected === "dashboard"
                    ? "inherit"
                    : theme.palette.grey[900],
                textDecoration: "inherit",
              }}
            >
              Dashboard
            </Link>
          </Box>

          <Box sx={{ "&:hover": { color: theme.palette.primary[100] } }}>
            <Link
              to="/predictions"
              onClick={() => setSelected("predictions")}
              style={{
                color:
                  selected === "predictions"
                    ? "inherit"
                    : theme.palette.grey[900],
                textDecoration: "inherit",
              }}
            >
              Predictions
            </Link>
          </Box>
        </FlexBetween>
      </FlexBetween>
    </>
  );
};

export default Navbar;
