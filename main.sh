#!/bin/bash

gnome-terminal -- bash -c 'gz sim -v4 -r iris_runway.sdf'

sleep 5

gnome-terminal -- bash -c 'sim_vehicle.py -v ArduCopter -f gazebo-iris --model JSON --map --console'
