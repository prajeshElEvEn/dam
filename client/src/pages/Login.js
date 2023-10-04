import React, { useState } from "react";
import {
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
import Brand from "../components/cards/Brand";

const Login = () => {
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
            <Brand />
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={4}>
              <Typography variant="h6">Login</Typography>
              <Stack spacing={2}>
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
                />
                <Button variant="contained" href="/dashboard">
                  Login
                </Button>
                <Typography>
                  Do not have an account? <Link href="/">Sign Up</Link>{" "}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Login;
