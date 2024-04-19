import * as React from "react";
import {
  ThemeProvider,
  createTheme,
  styled,
  // @ts-ignore
  useTheme,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
// @ts-ignore
import Typography from "@mui/material/Typography";

import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { getDesignTokens } from "./theme";
import { Outlet } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [mode, setMode] = React.useState(
    Boolean(localStorage.getItem("currentMode"))
      ? localStorage.getItem("currentMode")
      : "light"
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <
// @ts-ignore
    ThemeProvider theme={theme}>
      <
// @ts-ignore
      Box sx={{ display: "flex" }}>
        <
// @ts-ignore
        CssBaseline />
        <
// @ts-ignore
        TopBar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          setMode={setMode}
        />

        <
// @ts-ignore
        SideBar open={open} handleDrawerClose={handleDrawerClose} />

        <Box
// @ts-ignore
        Box
// @ts-ignore
        Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <
// @ts-ignore
          DrawerHeader />
          <
// @ts-ignore
          Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
