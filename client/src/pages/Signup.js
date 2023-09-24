import React, { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import DAMLogo from "../assets/images/logo.png";
import ROSLogo from "../assets/images/ros.png";
import QGCLogo from "../assets/images/qgc.png";
import GazeboLogo from "../assets/images/gazebo.png";
import WebODMLogo from "../assets/images/webodm.png";
import ArdupilotLogo from "../assets/images/ardupilot.png";
import AuthorLogo from "../assets/images/author.png";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Stack height={{ xs: "auto", md: "100vh" }} justifyContent={"center"}>
        <Grid
          container
          direction={{ xs: "column", md: "row" }}
          rowSpacing={{ xs: 4, md: 1 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6}>
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
                <Typography variant="h6">
                  Drone Automation and Mapping
                </Typography>
                <Typography variant="body1">
                  Streamline drone operations, create detailed maps, and enhance
                  object detection with our powerful software suite.
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
                <Typography variant="body1">
                  Made with love by Drone Scouts
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={4}>
              <Typography variant="h6">Create Account</Typography>
              <Stack spacing={2}>
                <TextField label="Name" type="text" variant="outlined" />
                <TextField label="Email Id" type="email" variant="outlined" />
                <TextField
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  helperText="Password must be at least 8 characters long."
                />
                <Button variant="contained">Sign Up</Button>
                <Typography>
                  Already have an account? <Link href="/login">Login</Link>{" "}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Signup;
