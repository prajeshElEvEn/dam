#!/bin/bash

sudo apt install python3-venv -y
python3 -m venv venv
source venv/bin/activate

pip install -r requirements.txt

npm i

cd client
npm i

cd ..

rm -rf venv/pyvenv.cfg
echo "home = /usr/bin
include-system-site-packages = true
version = 3.10.12" > venv/pyvenv.cfg


git clone https://github.com/ArduPilot/ardupilot.git
git checkout Copter-4.4
git submodule update --init --recursive

Tools/environment_install/install-prereqs-ubuntu.sh -y