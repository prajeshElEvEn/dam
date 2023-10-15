#!/bin/bash

gnome-terminal --tab --title="ROS2" -- bash -c 'echo "Launching simulation..."; sleep 2; source scripts/automation/install/setup.sh; sleep 5; ros2 launch ardupilot_gz_bringup iris_runway.launch.py'

gnome-terminal --tab --title="QGC" -- bash -c 'echo "Opening QGC..."; sleep 2; ./scripts/utils/qgroundcontrol/QGroundControl.AppImage'

gnome-terminal --tab --title="Ardupilot" -- bash -c 'echo "Launching SITL..."; sleep 2; sim_vehicle.py -v ArduCopter -f gazebo-iris --model JSON --console'