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
# Turn on a case-insensitive matching (-s set nocasematch)
opt=$1
action=$2
echo "$opt"
case $opt in
        [lL][Ii][nN][uU][Xx])
          case $action in 
            [uU][nN][iI][nN][sS][tT][aA][lL][lL])
	          	sudo service InSightsHpAgent stop
				sudo rm -R /etc/init.d/InSightsHpAgent
				echo "Service un-installation step completed"
		        ;;
		    *)
                echo "HpAlmAgent Running on Linux..."
				sudo cp -xp InSightsHpAgent.sh  /etc/init.d/InSightsHpAgent
				sudo chmod +x /etc/init.d/InSightsHpAgent
				sudo chkconfig InSightsHpAgent on
				sudo service  InSightsHpAgent status
				sudo service InSightsHpAgent stop
				sudo service  InSightsHpAgent status
				sudo service InSightsHpAgent start
				sudo service  InSightsHpAgent status
				echo "Service installed.."
                ;;
		  esac
		  ;;
        [uU][bB][uU][nN][tT][uU])
	        case $action in 
                [uU][nN][iI][nN][sS][tT][aA][lL][lL]) 
					sudo systemctl stop InSightsHpAgent
					sudo rm -R /etc/systemd/system/InSightsHpAgent.service
					echo "Service un-installation step completed"				
			        ;;
				*)
                	echo "HpAlmAgent Running on Ubuntu..."
					sudo cp -xp InSightsHpAgent.service /etc/systemd/system
					sudo systemctl enable InSightsHpAgent
					sudo systemctl start InSightsHpAgent
					echo "Service Installed..."
                	;;
		    esac
			;;
        centos)
                echo "HpAlmAgent Running on centso..."
                ;;
        *)
        	    echo "HpAlmAgent Please provide correct OS input"
esac
