import { useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Box, Fab } from "@mui/material";
import { DrawerHeader } from "../styledComponents";
import Navbar from "../bars/Navbar";
import Sidebar from "../bars/Sidebar";
import { KeyboardArrowUpIcon } from "../../assets/icons";
import { ScrollTop } from "../utils";

const RootLayout = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <ScrollRestoration />
      <Navbar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader id="back-to-top-anchor" />
        <Outlet />
      </Box>
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Box>
  );
};

export default RootLayout;
