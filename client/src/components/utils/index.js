import { Box, Fade, useScrollTrigger } from "@mui/material";
import {
  AutoAwesomeIcon,
  AutoAwesomeMosaicIcon,
  RadarIcon,
  SettingsIcon,
} from "../../assets/icons";

export const drawerWidth = 240;
export const primaryNav = [
  {
    icon: <AutoAwesomeIcon />,
    label: "Automation",
    to: "/",
  },
  {
    icon: <AutoAwesomeMosaicIcon />,
    label: "Mapping",
    to: "/",
  },
  {
    icon: <RadarIcon />,
    label: "Detection",
    to: "/",
  },
];
export const secondaryNav = [
  {
    icon: <SettingsIcon />,
    label: "Settings",
    to: "/",
  },
];

export const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

export const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const ScrollTop = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
};
