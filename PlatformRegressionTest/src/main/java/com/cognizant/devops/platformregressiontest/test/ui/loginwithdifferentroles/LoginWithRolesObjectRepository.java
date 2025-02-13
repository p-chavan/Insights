/*******************************************************************************
 * Copyright 2017 Cognizant Technology Solutions
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License.  You may obtain a copy
 * of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations under
 * the License.
 ******************************************************************************/
package com.cognizant.devops.platformregressiontest.test.ui.loginwithdifferentroles;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.cognizant.devops.platformregressiontest.test.common.LoginAndSelectModule;

/**
 * @author NivethethaS
 * 
 *         Class contains the objects for login with different roles test cases
 *
 */
public class LoginWithRolesObjectRepository extends LoginAndSelectModule{

	@FindBy(xpath = "//app-landing-page")
	WebElement landingPage;
	
	@FindBy(xpath = "//input[@data-placeholder='User Name']")
	WebElement loginUserName;

	@FindBy(xpath = "//input[@data-placeholder='Password']")
	WebElement loginPassword;

	@FindBy(xpath = "//div[@class='mat-list-text']//p[contains(text(),'Logout')]")
	WebElement logout;

	@FindBy(xpath = "//span[contains(text(),'LOG ON')]")
	WebElement logonButton;
	
	@FindBy(xpath = "//tr[contains(@class, 'RoleCss')]")
	WebElement roleinWelcome;
	
	@FindBy(xpath = "//div[@class='mat-list-text']//p[contains(text(),'Dashboard Groups ')]")
	WebElement dashboardGroups;
	
	@FindBy(xpath = "//div[@class='mat-list-text']//p[contains(text(),'Audit Reporting ')]")
	WebElement auditReporting;
	
	@FindBy(xpath = "//div[@class='mat-list-text']//p[contains(text(),'Playlist')]")
	WebElement playlist;
	
	@FindBy(xpath = "//div[@class='mat-list-text']//p[contains(text(),'Report Management')]")
	WebElement reportManagement;
	
	@FindBy(xpath = "//div[@class='mat-list-text']//p[contains(text(),'Data Dictionary')]")
	WebElement dataDictionary;
	
	@FindBy(xpath = "//div[@class='mat-list-text']//p[contains(text(),'Health Check')]")
	WebElement healthCheck;
	
	@FindBy(xpath = "//div[@class='mat-list-text']//p[contains(text(),'Dashboard Report Download')]")
	WebElement dashboardReport;
	
	@FindBy(xpath = "//div[@class='mat-list-text']//p[contains(text(),'Configuration')]")
	WebElement configuration;

	@FindBy(xpath = "//tbody//div//a")
	List<WebElement> accessGroups;
	
	@FindBy(xpath = "//div[contains(@class, 'menu')]//app-menu-list-item")
	List<WebElement> menuList;
	
	@FindBy(xpath = "//mat-icon[contains(text(),'list')]")
	WebElement listView;
	
	@FindBy(xpath = "//mat-panel-title//label[contains(text(),'General Dashboards')]")
	WebElement generaldashboard;
	
	@FindBy(xpath = "//div[contains(@class,'mat-expansion-panel-body')]//mat-grid-tile[1]//figure")
	WebElement lokiDashboard;
	
	@FindBy(xpath = "//div[@class='panel-title']//span[contains(text(),'Dashboards')]")
	WebElement dashboards;
	
	@FindBy(xpath = "//ul//li//span[contains(@class,'dropdown-item-text') and text() = 'Explore']")
	WebElement exploreMenu;
	
	@FindBy(xpath = "//ul//li//span[contains(text(),'Edit')]")
	WebElement editMenu;
	
	@FindBy(xpath = "//ul//li//span[contains(text(),'View')]")
	WebElement viewMenu;
	
	@FindBy(xpath = "//div//span[contains(@class, 'panel-title-text')]")
	WebElement panelTitle;
	
	@FindBy(xpath = "//u[contains(text(), 'Click Here')]")
	WebElement clickHere;
	
	@FindBy(xpath = "//table//tbody[@role='rowgroup']")
	WebElement userDetailsTable;
	
	@FindBy(xpath = "//mat-icon[@title='Delete Organization User ']")
	WebElement deleteButton;
	
	@FindBy(xpath = "//span[text()= 'YES']")
	WebElement yesButton;
	
	@FindBy(xpath = "//span[text()= 'OKAY']")
	WebElement okButton;
	
	@FindBy(xpath = "//mat-select[@name ='selectedAdminOrg']")
	WebElement accessGroup;
	
	@FindBy(xpath = "//span[contains(@class, 'mat-option-text')]")
	List<WebElement> accessGroupList;
	
	@FindBy(xpath = "//input[@placeholder='Search by Login ID or Email Address']")
	WebElement searchBoxInLandingPage;
	
	String iframePath="//iframe[contains(@class,'iframeCss embed-responsive-item')]";
	
	String explorePath="//ul//li//span[contains(@class,'dropdown-item-text') and text() = 'Explore']";
	
	String editPath="//ul//li//span[contains(text(),'Edit')]";
	
	static int count=0;
}
