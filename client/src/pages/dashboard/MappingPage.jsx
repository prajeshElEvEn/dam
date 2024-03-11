import { Grid } from "@mui/material";
// import ReactPlayer from "react-player/youtube";
import MediaCard from "../../components/cards/MediaCard";

export default function MappingPage() {
  return (
    <div>
      <h1>Mapping</h1>
      <p>
        The Mapping module is the final phase of DAM's workflow, focusing on
        generating comprehensive maps based on the data collected during
        simulated flights.
      </p>
      <h2>How it works?</h2>
      <Grid
        container
        direction={{ xs: "column", md: "row" }}
        rowSpacing={{ xs: 4, md: 1 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <MediaCard
            title={"WebODM Integration"}
            desc={
              "The collected images, along with LiDAR data, are fed into WebODM, a robust open-source photogrammetry software. WebODM processes this data to create detailed maps of the simulated environment."
            }
          />
        </Grid>
      </Grid>
      {/* <h2>Watch it in action!</h2>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
        controls={true}
        width={"100%"}
      /> */}
    </div>
  );
}
