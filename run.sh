#!/bin/bash

gnome-terminal --tab --title="micro ROS" -- bash -c 'echo "Launching simulation..."; sleep 2; source scripts/automation/install/setup.sh; sleep 5; ros2 run micro_ros_agent micro_ros_agent udp4 -p 2019 -r scripts/automation/src/ardupilot/libraries/AP_DDS/dds_xrce_profile.xml'

gnome-terminal --tab --title="Sim" -- bash -c 'echo "Launching simulation..."; sleep 2; source scripts/automation/install/setup.sh; sleep 5; ros2 launch ardupilot_gz_bringup iris_runway.launch.py'


gnome-terminal --tab --title="QGC" -- bash -c 'echo "Opening QGC..."; sleep 2; ./scripts/utils/qgroundcontrol/QGroundControl.AppImage'

gnome-terminal --tab --title="Ardupilot" -- bash -c 'echo "Launching SITL..."; sleep 2; sim_vehicle.py -w -v ArduCopter -f gazebo-iris --model JSON --console -DG --enable-dds'

gnome-terminal --tab --title="ROS2" -- bash -c 'echo "Enter ROS2 commands..."; exec bash'

