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
echo "Set up Agent_Daemon"
cd /opt/ && mkdir insightsagent
chmod -R 755 insightsagent/
cd insightsagent
export INSIGHTS_AGENT_HOME=`pwd`
echo INSIGHTS_AGENT_HOME=`pwd` | tee -a /etc/environment
echo "export" INSIGHTS_AGENT_HOME=`pwd` | tee -a /etc/profile
mkdir AgentDaemon
mkdir PlatformAgents
chmod -R 755 AgentDaemon
chmod -R 755 PlatformAgents
echo $INSIGHTS_AGENT_HOME
cd AgentDaemon
sudo wget http://platform.cogdevops.com/insights_install/release/latest/agentdaemon.zip -O agentdaemon.zip
sudo unzip agentdaemon.zip && sudo rm -rf agentdaemon.zip
sudo source /etc/environment
sudo source /etc/profile
