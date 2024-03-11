#!/bin/bash

# gnome-terminal --title="Tab 1" -- bash -c "echo 'This is Tab 1'; bash"

# gnome-terminal --tab --title="Tab 2" -- bash -c "echo 'This is Tab 2'; ls; bash"

# gnome-terminal --tab --title="Gazebo" -- bash -c "echo 'Launching Simulation...'; sleep 2; gazebo --verbose ./src/ardupilot_gazebo/worlds/iris_arducopter_runway.world; bash"

gnome-terminal --tab --title="Gazebo" -- bash -c "echo 'Launching Simulation...'; sleep 2; roslaunch iq_sim runway.launch; bash"

gnome-terminal --tab --title="Ardupilot" -- bash -c "echo 'Launching SITL...'; sleep 3; cd src/ardupilot/ArduCopter && sim_vehicle.py -v ArduCopter -f gazebo-iris --console; bash"

gnome-terminal --tab --title="DroneDB" -- bash -c "echo 'Launching SITL...'; sleep 3; cd src/dronedb && sudo ./run.py; bash"

# gnome-terminal --tab --title="Ardupilot" -- bash -c "echo 'Launching SITL...'; sleep 3; sim_vehicle.py -v ArduCopter -f gazebo-iris --console; bash"

# gnome-terminal --tab --title="APM" -- bash -c "echo 'Launching APM...'; sleep 4; roslaunch iq_sim apm.launch; bash"

#gnome-terminal --tab --title="QGC" -- bash -c "echo 'Launching QGC...'; sleep 5; ./src/qgc/QGroundControl.AppImage; bash"

# gnome-terminal --tab --title="Script" -- bash -c "echo 'Executing Square Script...'; sleep 6; rosrun iq_gnc square; bash"