/*******************************************************************************
 * Copyright 2019 Cognizant Technology Solutions
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
import { Component, OnInit, ViewChild } from '@angular/core';
import { WebHookService } from '@insights/app/modules/webhook/webhook.service';
import { ShowJsonDialog } from '@insights/app/modules/relationship-builder/show-correlationjson';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { from } from 'rxjs';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { MessageDialogService } from '@insights/app/modules/application-dialog/message-dialog-service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { DataSharedService } from '@insights/common/data-shared-service';
import { BulkUploadService } from '@insights/app/modules/bulkupload/bulkupload.service'
import { count } from 'rxjs/operators';
//import { Control} from '@angular/common';
export interface DataType {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-webhook',
    templateUrl: './webhook.component.html',
    styleUrls: ['./webhook.component.css', './../home.module.css']
})
export class WebHookComponent implements OnInit {

    toolsArr = [];
    toolsDetail = [];
    showAddWebHook: boolean = false;
    showWebhook: boolean = true;
    showMessage: string;
    displayedColumns = [];
    webhookNameList: any = [];
    webhookDatasource = new MatTableDataSource<any>();
    webhookList: any;
    showDetail: boolean = false;
    showConfirmMessage: string;
    selectedWebhook: any;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    dataformats: DataType[] = [
        { value: 'text', viewValue: 'Text' },
        { value: 'json', viewValue: 'Json' },

    ];
    constructor(private router: Router, private bulkuploadService: BulkUploadService, private webhookService: WebHookService, private dialog: MatDialog, public messageDialog: MessageDialogService, private dataShare: DataSharedService) {
        this.getLabelTools();
        this.getRegisteredWebHooks();
    }

    ngOnInit() {
    }
    addWebHook() {
        this.showAddWebHook = true;
        this.showWebhook = false;
    }



    public async getRegisteredWebHooks() {

        var self = this;

        this.webhookNameList = [];
        this.webhookList = await self.webhookService.loadwebhookServices();
        if (this.webhookList != null && this.webhookList.status == 'success') {
            this.webhookDatasource.data = this.webhookList.data.sort((a, b) => a.webhookName > b.webhookName);
            this.webhookDatasource.paginator = this.paginator;
            console.log(this.webhookList);
            this.webhookNameList.push("All");
            for (var data of this.webhookList.data) {
                if (this.webhookNameList.indexOf(data.webhookName) == -1) {
                    this.webhookNameList.push(data.webhookName);
                }
            }
            //console.log(this.agentListDatasource);
            self.showDetail = true;
            //console.log(this.agentNameList);
            this.displayedColumns = ['radio', 'WebHookName', 'ToolName', 'EventName', 'DataType', 'MqChannel'];
            setTimeout(() => {
                this.showConfirmMessage = "";
            }, 3000);
        } else {
            self.showMessage = "Something wrong with Service.Please try again.";
            self.messageDialog.showApplicationsMessage("Something wrong with Service.Please try again.", "ERROR");
        }
    }


    list() {
        this.showWebhook = true;
        this.showAddWebHook = false;
    }
    async getLabelTools() {
        var self = this;
        try {
            self.toolsDetail = [];
            let toollabelresponse = await this.bulkuploadService.loadUiServiceLocation()
            if (toollabelresponse.status == "success") {
                this.toolsDetail = toollabelresponse.data;
            }
            for (var element of this.toolsDetail) {
                var toolName = (element.toolName);
                var labelName = (element.label);

                this.toolsArr.push(toolName);
                //  console.log(this.toolsArr)
            }
        }
        catch (error) {
            //  console.log(error);
        }

    }


    saveData(webhookName, selectedTool, eventToSubscribe, dataformat, mqchannel) {
        console.log(webhookName)
        console.log(selectedTool)
        console.log(eventToSubscribe)
        console.log(dataformat)
        console.log(mqchannel)
        var self = this;
        var statussubscribe = true;
        this.webhookService.saveDataforWebHook(webhookName, selectedTool, eventToSubscribe, dataformat, mqchannel, statussubscribe)
            .then(function (data) {
                console.log("WeBhook " + data);
                if (data.status == "success") {
                    //self.showConfirmMessage = "Settings saved successfully";
                    /* self.showApplicationMessage = "Settings saved successfully"
                    self.messageDialog.showApplicationsMessage("Settings saved successfully", "SUCCESS"); */
                } else {
                    /* self.showConfirmMessage = "Failed to save settings";
                    self.showApplicationMessage = "Failed to save settings"
                    self.messageDialog.showApplicationsMessage("Failed to save settings", "ERROR"); */
                }

            })

    }
    uninstallWebHook() {
        var self = this;
        //console.log("uninstall agent " + JSON.stringify(this.selectedAgent));

        var title = "Delete WebHook";
        var dialogmessage = "<br> <br> Do you want to uninstall <b> " + self.selectedWebhook.webhookName + " </b> on <b> </b> ? ";
        const dialogRef = self.messageDialog.showConfirmationMessage(title, dialogmessage, this.selectedWebhook.toolName, "ALERT", "40%");

        dialogRef.afterClosed().subscribe(result => {
            //console.log('The dialog was closed  ' + result);
            if (result == 'yes') {
                self.webhookService.webhookUninstall(self.selectedWebhook.webhookName).then(function (data) {
                    self.getRegisteredWebHooks();
                }).catch(function (data) {
                    self.showConfirmMessage = "service_error";
                    self.getRegisteredWebHooks();
                });
            }
        });
    }
}

