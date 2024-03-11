# DAM (Drone Automation and Mapping) Software

DAM (Drone Automation and Mapping) software is a comprehensive solution that brings together various technologies and components to facilitate drone automation, mapping, and object detection.

## Key Features and Components

### Simulation Environment

Using SITL (Software-In-The-Loop) with Ardupilot and Gazebo provides a smart approach for testing and developing the software without the need for a physical drone. The simulation environment accurately mimics drone behavior, enabling efficient testing and data gathering.

### Data Collection

Equipped with LiDAR, cameras, and other sensors, the drone gathers essential data. The simulation environment ensures realistic sensor behavior, contributing to the generation of accurate and reliable data.

### Integration

ROS2 (Robot Operating System 2) is employed with the drone simulation, utilizing the Python language for writing automation scripts. ROS2 offers a robust framework for robot control and communication, making it well-suited for this application.

### Data Processing

WebODM is employed for processing point cloud data generated from LiDAR. This aids in efficient and accurate data processing for further analysis and mapping.

### Object Detection

YOLO (You Only Look Once) is utilized for object detection, enhancing the project's capabilities to identify objects or features within the mapped region.

### Frontend and Backend Development

A frontend dashboard is developed using React, while a Node.js backend handles user authentication. This combination creates a user-friendly interface and ensures secure user access to the application.

### Data Management

DroneDB is utilized for image data, allowing the software to handle various types of data, including LiDAR point clouds, images, and video feeds. This robust data management component contributes to efficient organization and retrieval of data.

### Security

User authentication is implemented to protect sensitive data, ensuring that only authorized users can access the application. This enhances the overall security of the system.

### Documentation

Comprehensive documentation of the project, including setup instructions, usage guides, and code comments, is provided. This documentation serves as a valuable resource for developers and users, making the project accessible and easy to understand.

### Community and Collaboration

The project is open source, built using open-source resources, encouraging community engagement and collaboration. Developers and users are invited to contribute, share feedback, and participate in the continuous improvement of DAM software.

## Technology Stack

- [ArduPilot](https://ardupilot.org/)
- [ROS: Home](https://www.ros.org/)
- [WebODM Drone Software - OpenDroneMap™](https://www.opendronemap.org/webodm/)
- [DroneDB - Modern Aerial Data Management](https://dronedb.app/)

### Software

- [Code](https://github.com/prajeshElEvEn/dam)
- [DAM](https://www.canva.com/design/DAF3nRfV2ZI/ZfwLeXOn9yBleu4uNb-nMg/edit?utm_content=DAF3nRfV2ZI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

### Team

- [Pranjal Agarwal](https://www.linkedin.com/in/pranjalagarwal0409/)
- [Prajesh Pratap Singh](https://www.linkedin.com/in/prajesh-eleven/)
