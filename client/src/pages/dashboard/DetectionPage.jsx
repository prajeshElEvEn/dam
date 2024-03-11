// import { Grid } from "@mui/material";
import ReactPlayer from "react-player/youtube";
// import MediaCard from "../../components/cards/MediaCard";

export default function DetectionPage() {
  return (
    <div>
      <h1>Detection</h1>
      <p>
        YOLO helps in object detection and is a valuable addition to the
        project, especially to identify objects or features within the mapped
        region.
      </p>
      {/* <h2>How it works?</h2>
      <Grid
        container
        direction={{ xs: "column", md: "row" }}
        rowSpacing={{ xs: 4, md: 1 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <MediaCard />
        </Grid>
      </Grid> */}
      <h2>Watch it in action!</h2>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=SiVexS6Zrr8&list=PLy9nLDKxDN683GqAiJ4IVLquYBod_2oA6&index=11"
        controls={true}
        width={"100%"}
      />
    </div>
  );
}
