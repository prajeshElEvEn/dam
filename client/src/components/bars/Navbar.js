import React from "react";
import { AppBar } from "../styledComponents";
import { IconButton, Toolbar, Typography } from "@mui/material";
import { MenuIcon } from "../../assets/icons";

const Navbar = ({ open, handleDrawerOpen }) => {
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          DAM
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
