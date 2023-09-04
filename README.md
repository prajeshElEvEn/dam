# Drone Automation and Mapping (DAM)

**Project Description:**

DAM (Drone Automation and Mapping) is a versatile software solution designed to automate drone operations, capture aerial data, generate maps, and perform object detection. This README provides an overview of the project, its components, and instructions for setup and usage.

**Table of Contents:**

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [Frontend Dashboard](#frontend-dashboard)
  - [Backend Server](#backend-server)
  - [ROS2 Drone Control](#ros2-drone-control)
  - [Simulation Environment](#simulation-environment)
- [Data Flow](#data-flow)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before setting up DAM, ensure you have the following prerequisites installed:

- Ubuntu 22.04
- Node.js and npm
- Python 3.x
- ROS2 (Foxy Fitzroy)
- Gazebo (with Ardupilot plugin)
- WebODM
- YOLO
- Other required dependencies (listed in each component's documentation)

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

### Frontend Dashboard

- Description: The web-based user interface for setting parameters, launching automated flights, and visualizing data.
- Location: `frontend/`
- Detailed documentation: [Frontend Documentation](frontend/README.md)

### Backend Server

- Description: Node.js server responsible for user authentication and backend logic.
- Location: `backend/` (if applicable)
- Detailed documentation: [Backend Documentation](backend/README.md)

### ROS2 Drone Control

- Description: C++ scripts and ROS2 packages for controlling the simulated drone (SITL) and communicating with sensors.
- Location: `ros2_drone_control/`
- Detailed documentation: [ROS2 Drone Control Documentation](ros2_drone_control/README.md)

### Simulation Environment

- Description: Setup and configuration for the Gazebo simulation environment with Ardupilot SITL.
- Location: `simulation_environment/`
- Detailed documentation: [Simulation Environment Documentation](simulation_environment/README.md)

## Data Flow

Explain how data flows through your system, from drone sensors to data processing and visualization. Include diagrams if necessary.

## Contributing

We welcome contributions from the community. To contribute to DAM, please follow our [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
