#!/bin/bash

# client
echo "> Installing client dependencies..."
sleep 2
cd client
npm i

cd ..

# server
echo "> Installing server dependencies..."
sleep 2
cd server
npm i

cd ..

# ardupilot
echo "> Installing ardupilot..."
sleep 2
cd src/
if [ ! -d "ardupilot" ]; then
    git clone --recurse-submodules https://github.com/ArduPilot/ardupilot.git
    cd ardupilot
    Tools/environment_install/install-prereqs-ubuntu.sh -y
    . ~/.profile
    cd ..
else
    echo "Ardupilot already exists."
fi

cd ..

# install qgc
echo "> Installing QGC..."
sleep 2
if [ ! -f "src/qgc/QGroundControl.AppImage" ]; then
    sudo usermod -a -G dialout $USER
    sudo apt-get remove modemmanager -y
    sudo apt install gstreamer1.0-plugins-bad gstreamer1.0-libav gstreamer1.0-gl -y
    sudo apt install libqt5gui5 -y
    sudo apt install libfuse2 -y
    wget -P "src/qgc" "https://d176tv9ibo4jno.cloudfront.net/latest/QGroundControl.AppImage"
    chmod +x src/qgc/QGroundControl.AppImage
else
    echo "QGroundControl.AppImage already present."
fi


# install gazebo
echo "> Installing Gazebo..."
sleep 2
if [ ! -f "/etc/apt/sources.list.d/gazebo-stable.list" ]; then
    sudo sh -c 'echo "deb http://packages.osrfoundation.org/gazebo/ubuntu-stable `lsb_release -cs` main" > /etc/apt/sources.list.d/gazebo-stable.list'
    wget http://packages.osrfoundation.org/gazebo.key -O - | sudo apt-key add -
    sudo apt update
    sudo apt-get install gazebo11 libgazebo11-dev
    cd src/ardupilot_gazebo
    mkdir build
    cd build
    cmake ..
    make -j4
    sudo make install
    echo "source /usr/share/gazebo/setup.sh" >> ~/.bashrc
    echo "export GAZEBO_MODEL_PATH=$PWD/src/ardupilot_gazebo/models" >> ~/.bashrc
    . ~/.bashrc
else
    echo "Gazebo already present."
fi


# install ros
echo "> Installing ROS..."
sleep 2
if [ ! -f "/etc/apt/sources.list.d/ros-latest.list" ]; then
    sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
    curl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -
    sudo apt update
    sudo apt install ros-noetic-desktop-full
    echo "source /opt/ros/noetic/setup.bash" >> ~/.bashrc
    source ~/.bashrc
    sudo apt install python3-rosdep python3-rosinstall python3-rosinstall-generator python3-wstool python3-catkin-tools build-essential
    sudo rosdep init
    rosdep update
else
    echo "ROS already present."
fi

# setting up catkin
echo "> Setting up catkin..."
sleep 2
cd src/catkin_ws
if [ ! -d "devel" ]; then
    catkin init
    wstool init src
    rosinstall_generator --upstream mavros | tee /tmp/mavros.rosinstall
    rosinstall_generator mavlink | tee -a /tmp/mavros.rosinstall
    wstool merge -t src /tmp/mavros.rosinstall
    wstool update -t src
    rosdep install --from-paths src --ignore-src --rosdistro `echo $ROS_DISTRO` -y
    catkin build
    echo "source $PWD/devel/setup.bash" >> ~/.bashrc
    source ~/.bashrc
    sudo src/mavros/mavros/scripts/install_geographiclib_datasets.sh
    echo "GAZEBO_MODEL_PATH=${GAZEBO_MODEL_PATH}:$PWD/src/iq_sim/models" >> ~/.bashrc
    catkin build
    source ~/.bashrc
else
    echo "Catkin already present."
fi

cd ../..


# installing additional deps
echo "> Installing additional dependencies..."
sleep 2
sudo apt install ros-noetic-gazebo-ros ros-noetic-gazebo-plugins