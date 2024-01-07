import { Avatar, Container, Grid, Stack, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div>
      <Container>
        <Stack height={{ xs: "auto", md: "100vh" }} justifyContent={"center"}>
          <Grid
            container
            py={4}
            direction={{ xs: "column", md: "row" }}
            rowSpacing={{ xs: 4, md: 1 }}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Stack spacing={4}>
                <Stack spacing={2} display={"block"}>
                  {/* <Typography variant="subtitle2">
              SmokeFreeLife. ClearLungs. TobaccoFreeZone.
            </Typography> */}
                  {/* <Button
                    component={RouterLink}
                    to="/"
                    startIcon={<ArrowBackIcon />}
                  >
                    Go Home
                  </Button> */}
                  <Typography variant="h3">DAM</Typography>
                  <Typography variant="h4">
                    Drone Automation & Mapping
                  </Typography>
                  <p>
                    Streamline drone operations, create detailed maps, and
                    enhance object detection with our powerful software suite.
                  </p>
                </Stack>
                <Stack direction={"row"} spacing={2}>
                  <Avatar
                    // src={ClubLogo}
                    alt=""
                    // sx={{ width: 48, height: 48 }}
                  />
                  <Avatar
                    // src={ClubLogo}
                    alt=""
                    // sx={{ width: 48, height: 48 }}
                  />
                  <Avatar
                    // src={ClubLogo}
                    alt=""
                    // sx={{ width: 48, height: 48 }}
                  />
                  <Avatar
                    // src={ClubLogo}
                    alt=""
                    // sx={{ width: 48, height: 48 }}
                  />
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Outlet />
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </div>
  );
}
