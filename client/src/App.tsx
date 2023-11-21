import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import Navbar from "@/scenes/navbar";
import Dashboard from "@/scenes/dashboard";
import Predictions from "@/scenes/predictions";
import Signup from "@/scenes/register";
import Login from "@/scenes/login";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
              <Navbar />
              <Routes>
                <Route path="/register" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/predictions" element={<Predictions />} />
              </Routes>
            </Box>
          </ThemeProvider>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
