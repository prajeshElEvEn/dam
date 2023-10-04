import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";

import DAMLogo from "../../assets/images/logo.png";
import ROSLogo from "../../assets/images/ros.png";
import QGCLogo from "../../assets/images/qgc.png";
import GazeboLogo from "../../assets/images/gazebo.png";
import WebODMLogo from "../../assets/images/webodm.png";
import ArdupilotLogo from "../../assets/images/ardupilot.png";
import AuthorLogo from "../../assets/images/author.png";

const Brand = () => {
  return (
    <Stack spacing={4}>
      <Stack>
        <Avatar
          variant="rounded"
          src={DAMLogo}
          sx={{ width: 100, height: 100 }}
        />
        <Typography variant="h4" mb={2}>
          DAM
        </Typography>
        <Typography variant="h6">Drone Automation and Mapping</Typography>
        <Typography variant="body1">
          Streamline drone operations, create detailed maps, and enhance object
          detection with our powerful software suite.
        </Typography>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <Avatar variant="rounded" src={ArdupilotLogo} />
        <Avatar variant="rounded" src={ROSLogo} />
        <Avatar variant="rounded" src={QGCLogo} />
        <Avatar variant="rounded" src={GazeboLogo} />
        <Avatar variant="rounded" src={WebODMLogo} />
      </Stack>
      <Stack direction={"row"} spacing={1} alignItems={"center"}>
        <Avatar src={AuthorLogo} />
        <Typography variant="body1">Made with love by Drone Scouts</Typography>
      </Stack>
    </Stack>
  );
};

export default Brand;
