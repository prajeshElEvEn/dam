import { Grid } from "@mui/material";
import ReactPlayer from "react-player/youtube";
import MediaCard from "../../components/cards/MediaCard";

export default function DetectionPage() {
  return (
    <div>
      <h1>Detection</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia fugiat
        repellendus exercitationem. Minima nihil nostrum totam quis quasi sunt
        quae magnam culpa, molestias labore delectus eos dicta adipisci dolorum
        eaque quisquam commodi ipsum eveniet doloremque consectetur. Id ipsam
        ipsum assumenda dolor, numquam neque officia accusamus error voluptas ut
        quam obcaecati repellendus consequuntur architecto, doloribus soluta
        odit culpa dolores quo.
      </p>
      <h2>How it works?</h2>
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
      </Grid>
      <h2>Watch it in action!</h2>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
        controls={true}
        width={"100%"}
      />
      <h1>Run it on your System</h1>
      <h2>System Requirements</h2>
      <h2>Pre-requisites</h2>
      <h2>Installation</h2>
      <h2>Usage</h2>
    </div>
  );
}
