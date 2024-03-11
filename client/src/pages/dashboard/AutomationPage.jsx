import { Grid } from "@mui/material";
import ReactPlayer from "react-player/youtube";
import MediaCard from "../../components/cards/MediaCard";

export default function AutomationPage() {
  return (
    <div>
      <h1>Automation</h1>
      <p>
        The Automation module of DAM leverages the capabilities of Ardupilot, an
        open-source autopilot system, specifically utilizing the
        Software-in-the-Loop (SITL) feature. SITL serves as the software
        counterpart of an actual drone, enabling high-fidelity simulation.
        Within this module, Ardupilot's Copter version 4.4 is employed to
        emulate drone behavior
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
            title={"Gazebo Integration"}
            desc={
              "To create a realistic environment for drone simulation, the Gazebo Ardupilot plugin is utilized. This integration allows us to visualize the drone within the Gazebo environment, providing a simulated representation of the physical world."
            }
          />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <MediaCard
            title={"Autonomous Flight"}
            desc={
              "To achieve autonomous flight, we launch the Gazebo Iris drone model within the Robot Operating System 2 (ROS2) environment. ROS2 is utilized to communicate with the drone and manage its behavior."
            }
          />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <MediaCard
            title={"ROS Nodes and Communication"}
            desc={
              "Within the ROS2 framework, DAM employs custom scripts containing ROS nodes. These nodes publish and subscribe to ROS topics, enabling seamless communication and control over the drone."
            }
          />
        </Grid>
      </Grid>
      <h2>Watch it in action!</h2>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=defn-gVdQEU&list=PLy9nLDKxDN683GqAiJ4IVLquYBod_2oA6&index=9"
        controls={true}
        width={"100%"}
      />
    </div>
  );
}
