# DAM

**Drone Automation & Mapping**

## Description

DAM (Drone Automation and Mapping) is a versatile software solution designed to automate drone operations, capture aerial data, generate maps, and perform object detection. This README provides an overview of the project, its components, and instructions for setup and usage.

**Table of Contents:**

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [Dashboard](#dashboard)
  - [Server](#server)
  - [Database](#database)
  - [Automation](#automation)
  - [Mapping](#mapping)
  - [Detection](#detection)
- [Resources](#resources)
- [Important Links](#important-links)
- [Contributing](#contributing)
- [License](#license)
- [Authors](#authors)

## Features

1. **Drone Simulation**:

   - Utilizes Ardupilot's SITL and Arducopter for simulating drone flight behavior.
   - Allows testing and development without the need for a physical drone.

2. **ROS2 Integration**:

   - Uses ROS2 (Robot Operating System 2) for writing the drone control script in C++.
   - Provides a framework for managing hardware drivers and communication between processes.

3. **Gazebo Visualization**:

   - Utilizes Gazebo simulator with Ardupilot's gazebo plugin for 3D visualization.
   - Enables users to visualize and interact with the drone's simulated flight environment.

4. **QGroundControl Integration**:

   - Integrates with QGroundControl for monitoring and visualization.
   - Offers a user-friendly interface to view the drone's position, status, and other parameters on a map.

5. **Data Collection and Processing**:

   - Collects LiDAR data and video feeds within user-defined perimeters.
   - Sends collected data back to the DAM for further processing.

6. **Mapping Module**:

   - Uses WebODM to process LiDAR point cloud data and create detailed maps of the surveyed region.

7. **Object Detection**:

   - Utilizes YOLO (You Only Look Once) to process video feeds and detect objects within the drone's field of view.

8. **Linux Compatibility**:

   - Designed to run on a Linux machine, specifically Ubuntu 22.04.

9. **Dashboard**:

   - Provides a user-friendly web interface.
   - Allows users to select locations, set perimeters, and interact with the software.
   - Displays outputs and results from mapping and object detection modules.

10. **Backend**:
    - Enables user authentication and user management within the application.
    - Enhances security and user access control.

## Getting Started

### Prerequisites

Before setting up DAM, ensure you have the following prerequisites installed:

- Ubuntu [v22.04.3](https://ubuntu.com/download/desktop)
- Node.js [v18.17.1](https://nodejs.org/en)
- npm [v9.6.7](https://www.npmjs.com/)
- Python [v3.10.12](https://www.python.org/)
- pip [v22.0.2](https://pypi.org/project/pip/)
- ROS2 [Iron Irwini](https://docs.ros.org/en/iron/Installation.html)
- Gazebo [Garden](https://gazebosim.org/docs/garden/install_ubuntu)

### Installation

1. Clone the DAM repository:

   ```shell
   git clone https://github.com/yourusername/DAM.git
   ```

2. Navigate to the project directory:

   ```shell
   cd DAM
   ```

3. Install frontend dependencies:

   ```shell
   cd frontend
   npm install
   ```

4. Install backend dependencies (if applicable):

   ```shell
   cd backend
   npm install
   ```

5. Follow specific setup instructions for each component (frontend, backend, ROS2, etc.) as described in their respective README files.

## Usage

Provide detailed instructions on how to use your software, including:

- How to define takeoff points and perimeters for drone flights.
- How to initiate automated drone flights.
- How to visualize and interact with data using the frontend dashboard.
- How to access and interpret mapping and object detection results.

## Components

### Dashboard

- Description: The web-based user interface for setting parameters, launching automated flights, and visualizing data.
- Location: `frontend/`
- Detailed documentation: [Frontend Documentation](frontend/README.md)

### Server

- Description: Node.js server responsible for user authentication and backend logic.
- Location: `backend/` (if applicable)
- Detailed documentation: [Backend Documentation](backend/README.md)

### Database

### Automation

- Description: C++ scripts and ROS2 packages for controlling the simulated drone (SITL) and communicating with sensors.
- Location: `ros2_drone_control/`
- Detailed documentation: [ROS2 Drone Control Documentation](ros2_drone_control/README.md)

### Mapping

- Description: Setup and configuration for the Gazebo simulation environment with Ardupilot SITL.
- Location: `simulation_environment/`
- Detailed documentation: [Simulation Environment Documentation](simulation_environment/README.md)

### Detection

## Resources

## Important Links

## Contributing

We welcome contributions from the community. To contribute to DAM, please follow our [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

## Authors

- [@pranjal]()
- [@prajesh]()
