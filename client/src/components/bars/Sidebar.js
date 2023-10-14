import React from "react";
import { Drawer, DrawerHeader } from "../styledComponents";
import {
  Avatar,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { theme } from "../../styles/theme";
import { ChevronLeftIcon, ChevronRightIcon } from "../../assets/icons";
import { primaryNav, secondaryNav } from "../utils";
import MenuItem from "../menu/MenuItem";

const Sidebar = ({ open, handleDrawerClose }) => {
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {primaryNav.map((item) => (
          <MenuItem open={open} item={item} />
        ))}
      </List>
      <Divider />
      <List>
        {secondaryNav.map((item) => (
          <MenuItem open={open} item={item} />
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Avatar />
            </ListItemIcon>
            <ListItemText primary={"John Doe"} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
