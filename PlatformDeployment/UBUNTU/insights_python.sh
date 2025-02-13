#!/bin/bash
#-------------------------------------------------------------------------------
# Copyright 2017 Cognizant Technology Solutions
#
# Licensed under the Apache License, Version 2.0 (the "License"); you may not
# use this file except in compliance with the License.  You may obtain a copy
# of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
# License for the specific language governing permissions and limitations under
# the License.
#-------------------------------------------------------------------------------
# Python 3.10

echo "#################### Installing Python 3.10 with Virtual Env ####################"
sudo apt update && sudo apt upgrade 
sudo apt install wget build-essential libreadline-gplv2-dev libncursesw5-dev \
     libssl-dev libsqlite3-dev tk-dev libgdbm-dev libc6-dev libbz2-dev libffi-dev zlib1g-dev
sudo mkdir /opt/python && cd /opt/python && sudo wget https://www.python.org/ftp/python/3.10.2/Python-3.10.2.tgz
sudo mv Python-3.10.2.tgz Python.tgz
sudo tar -zxf Python.tgz
sudo mv Python-3.10.2 Python
cd Python
sudo apt-get install gcc -y
sudo apt-get install bzip2-dev -y
sudo apt-get install make -y
sudo ./configure --enable-optimizations
sudo make altinstall
sudo rm -f /usr/bin/python
sudo ln -s /opt/python/Python/python /usr/bin/python
sudo python -m pip install pika
sudo python -m pip install requests apscheduler python-dateutil xmltodict pytz requests_ntlm boto3 urllib3 neotime neo4j neobolt elasticsearch
python --version
sleep 5
