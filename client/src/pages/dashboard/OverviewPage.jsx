export default function OverviewPage() {
  return (
    <div>
      <h1>DAM: Drone Automation & Mapping</h1>
      <p>
        DAM (Drone Automation and Mapping) software is a comprehensive solution
        that brings together various technologies and components to facilitate
        drone automation, mapping, and object detection.
      </p>
      <h2>Features</h2>
      <h3>Simulation Environment</h3>
      <p>
        Using SITL (Software-In-The-Loop) with Ardupilot and Gazebo provides a
        smart approach for testing and developing the software without the need
        for a physical drone. The simulation environment accurately mimics drone
        behavior, enabling efficient testing and data gathering.
      </p>{" "}
      <h3>Data Collection</h3>
      <p>
        Equipped with LiDAR, cameras, and other sensors, the drone gathers
        essential data. The simulation environment ensures realistic sensor
        behavior, contributing to the generation of accurate and reliable data.
      </p>{" "}
      <h3>Integration</h3>{" "}
      <p>
        ROS2 (Robot Operating System 2) is employed with the drone simulation,
        utilizing the Python language for writing automation scripts. ROS2
        offers a robust framework for robot control and communication, making it
        well-suited for this application.
      </p>{" "}
      <h3>Data Processing</h3>{" "}
      <p>
        WebODM is employed for processing point cloud data generated from LiDAR.
        This aids in efficient and accurate data processing for further analysis
        and mapping.
      </p>{" "}
      <h3>Object Detection</h3>{" "}
      <p>
        YOLO (You Only Look Once) is utilized for object detection, enhancing
        the project's capabilities to identify objects or features within the
        mapped region.
      </p>{" "}
      <h3>Frontend and Backend Development</h3>{" "}
      <p>
        A frontend dashboard is developed using React, while a Node.js backend
        handles user authentication. This combination creates a user-friendly
        interface and ensures secure user access to the application.
      </p>{" "}
      <h3>Data Management</h3>{" "}
      <p>
        DroneDB is utilized for image data, allowing the software to handle
        various types of data, including LiDAR point clouds, images, and video
        feeds. This robust data management component contributes to efficient
        organization and retrieval of data.
      </p>{" "}
      <h3>Security</h3>{" "}
      <p>
        User authentication is implemented to protect sensitive data, ensuring
        that only authorized users can access the application. This enhances the
        overall security of the system.
      </p>{" "}
      <h3>Documentation</h3>
      <p>
        Comprehensive documentation of the project, including setup
        instructions, usage guides, and code comments, is provided. This
        documentation serves as a valuable resource for developers and users,
        making the project accessible and easy to understand.{" "}
      </p>
      <h2>Community and Collaboration</h2>
      <p>
        The project is open source, built using open-source resources,
        encouraging community engagement and collaboration. Developers and users
        are invited to contribute, share feedback, and participate in the
        continuous improvement of DAM software.
      </p>
      <a
        href="https://github.com/prajeshElEvEn/dam"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      <h2>Authors</h2>
      <a
        href="https://www.linkedin.com/in/pranjalagarwal0409/)"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pranjal Agarwal
      </a>
      <br />
      <a
        href="https://www.linkedin.com/in/prajesh-eleven/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Prajesh Pratap Singh
      </a>
    </div>
  );
}
