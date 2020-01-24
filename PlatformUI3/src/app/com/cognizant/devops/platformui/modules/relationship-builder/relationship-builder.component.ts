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
import { Component, OnInit, Injector } from '@angular/core';
import { RelationshipBuilderService } from '@insights/app/modules/relationship-builder/relationship-builder.service';
import { ShowJsonDialog } from '@insights/app/modules/relationship-builder/show-correlationjson';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RelationLabel } from '@insights/app/modules/relationship-builder/relationship-builder.label';
import { from } from 'rxjs';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { MessageDialogService } from '@insights/app/modules/application-dialog/message-dialog-service';
import { MatTableDataSource } from '@angular/material';
import { DataSharedService } from '@insights/common/data-shared-service';
import { count } from 'rxjs/operators';
import { AddPropertyDialog } from './add-propertydialog';
import { SelectionModel } from '@angular/cdk/collections';
@Component({
  selector: 'app-relationship-builder',
  templateUrl: './relationship-builder.component.html',
  styleUrls: ['./relationship-builder.component.css', './../home.module.css']
})
export class RelationshipBuilderComponent implements OnInit {
  labelDestListDatasourceSelected: any = []
  propertyList = [];
  selectRelation: any = undefined;
  flagcolour: any;
  element: any = undefined;
  readChange: boolean = false;
  readChange2: boolean = false;
  deleteRelationArray = [];
  relationmappingLabels: RelationLabel[] = [];
  prefixname: string = '';
  property1selected: boolean = false;
  searchValue: string = '';
  property2selected: boolean = false;
  isbuttonenabled: boolean = false;
  dictResponse: any;
  corelationResponseMaster = [];
  dataComponentColumns = [];
  agentDataSource = [];
  responseDataSource = []
  toolNameList = [];
  AddDestination = {};
  newSource = [];
  AddSource = {};
  corrprop = [];
  fieldDestProp = [];
  fieldSourceProp = [];
  saveRelationArray = [];
  selectedProperty2: any;
  selectedProperty1: any;
  selectedSourceTool: any;
  selectedSourceLabel: any;
  selectedDestinationLabel: any;
  isListView = false;
  corelationResponseMaster2: any;
  isEditData = false;
  isrefresh: boolean = false;
  isSaveEnabled: boolean = false;
  isFlagEnabled: boolean = true;
  correlationFlag: boolean = false;
  selectedDestinationTool: any;
  destinationcheck = [];
  sourcecheck = [];
  agent1TableData: any;
  agent2TableData: any;
  finalRelationName: string = '';
  showApplicationMessage: String = "";
  listFilter: any;
  showDetail: boolean = false;
  noShowDetail: boolean = false;
  noShowDetail2: boolean = false;
  showDetail2: boolean = false;
  isDisabledState: boolean = false;
  MAX_ROWS_PER_TABLE = 5;
  showDetail3: boolean = false;
  noShowDetailCorr: boolean = false;
  showNoToolsSelectedForCorrelation: boolean = false;
  buttonOn: boolean = false;
  clicked: boolean = false;
  startToolNullPropertiesMessage = ""
  endToolNullPropertiesMessage = ""
  agent1Tool: any;
  agent1Category: any;
  agent1LabelName: any;
  agent2Tool: any;
  count: any;
  agent2Category: any;
  agent2LabelName: any;
  public data: any;
  selectedRadio: any;
  regex = new RegExp("^[a-zA-Z0-9_]*$");
  relData: any;
  displayDataSource = [];
  toolsDatasource = [];
  toolSourceDataSource = [];
  radioRefresh: boolean = true;
  correaltionFlag: boolean = true;
  flag: boolean = false;
  displayedToolColumns: any = []
  labelListDatasourceSelected: any = [];
  selectsourceproperty: any = new SelectionModel(true, []);
  selectdestinationproperty: any = new SelectionModel(true, []);
  labelSourceListDatasourceSelected: any = []
  constructor(private router: Router, private relationshipBuilderService: RelationshipBuilderService, private dialog: MatDialog, public messageDialog: MessageDialogService, private dataShare: DataSharedService) {
    this.dataDictionaryInfo();
    this.getCorrelation();
    this.displayedToolColumns = ['checkbox', 'toolproperties']
    this.isSaveEnabled = true;
  }


  ngOnInit() {
  }

  async dataDictionaryInfo() {
    try {
      this.dictResponse = await this.relationshipBuilderService.loadToolsAndCategories();
      if (this.dictResponse != null) {
        for (var key in this.dictResponse.data) {
          this.agentDataSource = this.agentDataSource.filter((elem, i, arr) => {
            if (arr.indexOf(elem) === i) {
              return elem
            }
          });
          this.agentDataSource.push(this.dictResponse.data[key])
        }

      }

      for (var data of this.agentDataSource) {
        this.labelListDatasourceSelected.push(data.toolName)
      }
      for (var data of this.labelListDatasourceSelected) {
        if (this.responseDataSource.indexOf(data) == -1) {
          this.responseDataSource.push(data);
        }
      }

    } catch (error) {
      console.log(error)
    }
  }
  async loadAgent1Info(selectedSourceTool) {
    try {
      this.isrefresh = true;
      this.noShowDetail = true;
      this.clicked = false;
      this.buttonOn = false;
      let usersResponseData1 = await this.relationshipBuilderService.loadToolProperties(selectedSourceTool.labelName, selectedSourceTool.categoryName);
      this.agent1Tool = selectedSourceTool.toolName;
      this.agent1Category = selectedSourceTool.categoryName;
      this.agent1LabelName = selectedSourceTool.labelName;
      if (usersResponseData1.data != undefined && usersResponseData1.status == "success") {
        this.showDetail = true;
        this.noShowDetail = false;
        this.agent1TableData = usersResponseData1.data;

      } else {
        this.noShowDetail = true;
        this.showDetail = false;
        this.startToolNullPropertiesMessage = "No properties found"
      }
    } catch (error) {
      console.log(error);
    }
  }
  async loadAgent1Info2(selectedDestinationTool) {
    try {
      this.isrefresh = true;
      this.noShowDetail2 = true;
      this.noShowDetailCorr = false;
      this.showDetail3 = false;
      this.buttonOn = false;
      this.clicked = false;
      let usersResponseData2 = await this.relationshipBuilderService.loadToolProperties(selectedDestinationTool.labelName, selectedDestinationTool.categoryName);
      this.agent2Tool = selectedDestinationTool.toolName;
      this.agent2Category = selectedDestinationTool.categoryName;
      this.agent2LabelName = selectedDestinationTool.labelName;
      if (usersResponseData2.data != undefined && usersResponseData2.status == "success") {
        this.showDetail2 = true;
        this.noShowDetail2 = false;
        this.agent2TableData = usersResponseData2.data;
      } else {
        this.noShowDetail2 = true;
        this.showDetail2 = false;
        this.endToolNullPropertiesMessage = "No properties found"
      }
    } catch (error) {
      console.log(error);
    }
  }
  async loadAgent1Info3(selectedSourceLabel) {
    try {
      this.isrefresh = true;
      this.noShowDetail = true;
      this.clicked = false;
      this.buttonOn = false;
      let usersResponseData1 = await this.relationshipBuilderService.loadToolProperties(selectedSourceLabel.labelName, selectedSourceLabel.categoryName);
      this.agent1Tool = selectedSourceLabel.toolName;
      this.agent1Category = selectedSourceLabel.categoryName;
      this.agent1LabelName = selectedSourceLabel.labelName;
      if (usersResponseData1.data != undefined && usersResponseData1.status == "success") {
        this.showDetail = true;
        this.noShowDetail = false;
        this.agent1TableData = usersResponseData1.data;
      } else {
        this.noShowDetail = true;
        this.showDetail = false;
        this.startToolNullPropertiesMessage = "No properties found"
      }
    } catch (error) {
      console.log(error);
    }
  }

  async loadAgent1Info4(selectedDestinationLabel) {
    try {
      this.isrefresh = true;
      this.noShowDetail2 = true;
      this.noShowDetailCorr = false;
      this.showDetail3 = false;
      this.buttonOn = false;
      this.clicked = false;
      let usersResponseData2 = await this.relationshipBuilderService.loadToolProperties(selectedDestinationLabel.labelName, selectedDestinationLabel.toolCategory);
      this.agent2Tool = selectedDestinationLabel.toolName;
      this.agent2Category = selectedDestinationLabel.categoryName;
      this.agent2LabelName = selectedDestinationLabel.labelName;
      if (usersResponseData2.data != undefined && usersResponseData2.status == "success") {
        this.showDetail2 = true;
        this.noShowDetail2 = false;
        this.agent2TableData = usersResponseData2.data;
      } else {
        this.noShowDetail2 = true;
        this.showDetail2 = false;
        this.endToolNullPropertiesMessage = "No properties found"
      }
    } catch (error) {
      console.log(error);
    }
  }
  async  getCorrelation() {
    try {
      this.flagcolour = 2;
      this.displayDataSource = [];
      this.toolsDatasource = [];
      this.saveRelationArray = [];
      this.toolSourceDataSource = [];
      this.corelationResponseMaster = [];
      let correlationresponse = await this.relationshipBuilderService.loadUiServiceLocation()
      if (correlationresponse.status == "success") {
        this.corelationResponseMaster = correlationresponse.data;
        this.relationmappingLabels = [];
      }
      for (var element of this.corelationResponseMaster) {
        var destinationToolName = (element.destinationToolName);
        var sourceToolName = (element.sourceToolName);
        var flag = (element.enableCorrelation);
        var detailProp = '<b>' + element.sourceToolName + '</b>:' + element.sourceFields + ':<b>' + element.destinationToolName + '</b>:' + element.destinationFields;
        let relationLabel = new RelationLabel(destinationToolName, sourceToolName, element.relationName, element.sourceFields, element.destinationFields, element.relationship_properties, flag);
        this.relationmappingLabels.push(relationLabel);
        this.sourcecheck.push(sourceToolName);
      }
      this.dataComponentColumns = ['radio', 'relationName'];
    }
    catch (error) {
      console.log(error);
    }
  }

  async showDetailsDialogForNeo4j(data1, data2) {
    try {
      this.showDetail3 = false;
      this.noShowDetailCorr = false;
      this.clicked = true;
      this.buttonOn = true;
      this.showNoToolsSelectedForCorrelation = true
      let usersResponseData3 = await this.relationshipBuilderService.loadToolsRelationshipAndProperties(data1.toolName, data1.categoryName, data1.labelName, data2.toolName, data2.categoryName, data2.labelName);
      if (usersResponseData3.data != undefined && usersResponseData3.status == "success") {
        if (usersResponseData3.data["relationName"] != undefined) {
          this.showDetail3 = true;
          this.noShowDetailCorr = false;
          this.corrprop = usersResponseData3.data["relationName"];
          var isSessionExpired = this.dataShare.validateSession();
          if (!isSessionExpired) {
            let showJsonDialog = this.dialog.open(ShowJsonDialog, {
              panelClass: 'showjson-dialog-container',
              height: '300px',
              width: '500px',
              disableClose: true,
              data:
              {
                message: this.corrprop,
                title: "Co-Relation in Neo4j"

              }
            });

          }
        }
      } else {
        this.noShowDetailCorr = true;
        this.showDetail3 = false;
        var isSessionExpired = this.dataShare.validateSession();
        if (!isSessionExpired) {
          let showJsonDialog = this.dialog.open(ShowJsonDialog, {
            panelClass: 'showjson-dialog-container',
            height: '300px',
            width: '500px',
            disableClose: true,
            data:
            {
              message: 'No Relations Found between ' + this.selectedSourceTool.toolName + ' and ' + this.selectedDestinationTool.toolName,
              title: "Co-Relations in Neo4j"
            }

          });

        }

      }
    } catch (error) {
      console.log(error);

    }

  }

  showaddPropertyDialog() {
    var isSessionExpired = this.dataShare.validateSession();
    if (!isSessionExpired) {
      const dialogRef = this.dialog.open(AddPropertyDialog, {
        panelClass: 'showjson-dialog-container',
        height: '350px',
        width: '500px',
        disableClose: true,
        data:
        {
          title: "Add Properties"
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        this.propertyList = []
        this.propertyList = result
      });
    }
  }
  selectLabelforsource(selectedSourceTool) {
    var islabelsameastool = false;
    this.labelSourceListDatasourceSelected = []
    this.agentDataSource.filter(av => {
      if (av.toolName == selectedSourceTool) {
        if (av.labelName != null) {
          this.labelSourceListDatasourceSelected.push(av)
        }
      }
    }
    )
  }


  selectLabelfordestination(selectedDestinationTool) {
    this.labelDestListDatasourceSelected = []
    this.agentDataSource.filter(av => {
      if (av.toolName == selectedDestinationTool) {
        if (av.labelName != null) {
          this.labelDestListDatasourceSelected.push(av)
        }
      }
    }
    )
  }


  showDetailsofCorrelation(selectedRelation) {
    var isSessionExpired = this.dataShare.validateSession();
    if (!isSessionExpired) {
      let showJsonDialog = this.dialog.open(ShowJsonDialog, {
        panelClass: 'showrelationship-dialog-container',
        height: '500px',
        width: '700px',
        disableClose: true,
        data:
        {
          message: selectedRelation,
          title: "Relationship Details"
        }

      });
    }
  }

  Refresh() {
    this.showDetail = false;
    this.showDetail2 = false;
    this.agentDataSource = [];
    this.selectedProperty1 = "";
    this.selectedProperty2 = "";
    this.selectdestinationproperty = "";
    this.selectsourceproperty = "";
    this.searchValue = null;
    this.selectedRadio = "";
    this.isbuttonenabled = false;
    this.isSaveEnabled = false;
    this.listFilter = "";
    this.isrefresh = false;
    this.buttonOn = false;
    this.selectedSourceTool = "";
    this.dataDictionaryInfo();
    this.radioRefresh = false;
    this.selectRelation = "";
    this.flagcolour = 2;
  }

  relationDelete() {
    var title = "Delete Correlation";
    var relationName = this.selectRelation.relationName;
    var dialogmessage = "You are deleting a Co-Relation " + "<b>" + this.selectRelation.relationName + "</b>" + ". The action of deleting a Co-Relation CANNOT be UNDONE. Moreover deleting an existing Co-Relation may impact other functionalities. Are you sure you want to DELETE the Co-Relation <b>" + this.selectRelation.relationName + "</b> ?";
    const dialogRef = this.messageDialog.showConfirmationMessage(title, dialogmessage, this.selectRelation.relationName, "ALERT", "40%");
    dialogRef.afterClosed().subscribe(result => {
      if (result == 'yes') {
        var finalJson = {};
        finalJson['relationName'] = relationName;
        finalJson['correlationFlag'] = this.correlationFlag;
        var correlationJson = JSON.stringify(finalJson);
        this.relationshipBuilderService.deleteCorrelation(correlationJson).then(
          (corelationResponse2) => {
            if (corelationResponse2.status == "success") {
              this.getCorrelation();
              var dialogmessage = "<b>" + relationName + "</b> deleted successfully."
              this.messageDialog.showApplicationsMessage(dialogmessage, "SUCCESS");
            }
          });
        this.Refresh();
      }
    });
    this.count = 0;
    this.destinationcheck = [];
    this.sourcecheck = [];
  }
  updateRelation() {
    var relationName = this.selectRelation.relationName;
    var finalJson = {};
    if (this.selectRelation.flag == true) {
      finalJson['relationName'] = relationName;
      finalJson['correlationFlag'] = false;
    }
    else {
      finalJson['relationName'] = relationName;
      finalJson['correlationFlag'] = true;
    }
    var correlationJson = JSON.stringify(finalJson);
    this.relationshipBuilderService.updateCorrelation(correlationJson).then(
      (corelationResponse2) => {
        if (corelationResponse2.status == "success") {
          this.getCorrelation();
          var dialogmessage = "<b>" + relationName + "</b> updated successfully."
          this.messageDialog.showApplicationsMessage(dialogmessage, "SUCCESS");
        }
      });

    this.Refresh();
  }

  enableDelete(deleteRelation) {
    this.isbuttonenabled = true;
    this.isrefresh = true;
    this.disableCorrelation(deleteRelation);

  }

  enableSaveProperty1() {
    this.property1selected = true;
    if (this.property2selected == true) {
      this.isSaveEnabled = true;
    }
  }

  enableSaveProperty2() {
    this.property2selected = true;
    if (this.property1selected == true) {
      this.isSaveEnabled = true;
    }
  }

  disableCorrelation(deleteRelation) {
    var relationName = deleteRelation.relationName;
    this.flag = deleteRelation.flag;
    if (this.flag == true) {
      this.flagcolour = 1;
    }
    else {
      this.flagcolour = 0;
    }

  }

  saveData(newName) {
    this.saveRelationArray = [];
    this.isListView = true;
    this.isEditData = true;
    var counter = 0;
    var checkname = this.regex.test(newName.value);
    if (!checkname) {
      newName = undefined;
      this.messageDialog.showApplicationsMessage("Please enter valid name, and it contains only alphanumeric character and underscore ", "ERROR");
    }
    else if ((this.selectedDestinationLabel || this.selectedSourceLabel) == undefined) {
      this.messageDialog.showApplicationsMessage("Label Name cannot be null", "ERROR");
    }
    else if ((this.selectsourceproperty.selected || this.selectdestinationproperty.selected) == "") {
      this.messageDialog.showApplicationsMessage("Fields value cannot be null", "ERROR");
    }
    else {
      this.prefixname = "FROM_" + this.selectedSourceLabel.toolName + "_TO_" + this.selectedDestinationLabel.toolName + "_";
      this.finalRelationName = this.prefixname + newName.value;
      this.count = 0;
      for (var x in this.destinationcheck) {
        if ((this.destinationcheck[x] == this.selectedDestinationLabel.toolName) && (this.sourcecheck[x] == this.selectedSourceLabel.toolName)) {
          this.count = this.count + 1;
          break;
        }
      }
      if (this.count == 0) {
        var title = "Save Co-Relation";
        var dialogmessage = "You are creating a new Co-Relation " + "<b>" + this.finalRelationName + "</b>" + " between <b>" + this.selectedSourceTool.toolName + "</b> and  <b> " + this.selectedDestinationTool.toolName + "</b> . Are you sure do you want to build the Co-Relation <b>" + this.finalRelationName + "</b> ?";
        const dialogRef = this.messageDialog.showConfirmationMessage(title, dialogmessage, this.selectRelation, "ALERT", "40%");
        dialogRef.afterClosed().subscribe(result => {
          if (result == 'yes') {
            //DESTINATION
            for (var j of this.selectdestinationproperty.selected) {
              this.fieldDestProp.push(j);
            }
            var res = [];
            for (var x in this.selectedDestinationLabel) {
              this.selectedDestinationLabel.hasOwnProperty(x) && res.push(this.selectedDestinationLabel[x])
            }
            var toolname = res[0];
            var toolcatergory = res[1];
            var labelName = res[2];
            this.AddDestination = { 'toolName': toolname, 'toolCategory': toolcatergory, 'labelName': labelName, 'fields': this.fieldDestProp };
            //FOR SOURCE 
            for (var i of this.selectsourceproperty.selected) {
              this.fieldSourceProp.push(i);
            }
            var res1 = [];
            for (var x in this.selectedSourceLabel) {
              this.selectedSourceLabel.hasOwnProperty(x) && res1.push(this.selectedSourceLabel[x])
            }
            var toolname1 = res1[0];
            var toolcatergory1 = res1[1];
            var labelName1 = res1[2];
            this.AddSource = { 'toolName': toolname1, 'toolCategory': toolcatergory1, 'labelName': labelName1, 'fields': this.fieldSourceProp };
            var newData = {
              'destination': this.AddDestination, 'source': this.AddSource, 'relationName': this.finalRelationName, 'relationship_properties': this.propertyList
            }
            this.saveRelationArray.push(newData);
            var addMappingJson = JSON.stringify({ 'data': this.saveRelationArray });
            this.relationshipBuilderService.saveCorrelationConfig(addMappingJson).then(
              (corelationResponse2) => {
                if (corelationResponse2.status == "success") {
                  this.getCorrelation();
                  var dialogmessage = "<b>" + this.finalRelationName + "</b> saved successfully."
                  this.messageDialog.showApplicationsMessage(dialogmessage, "SUCCESS");
                  this.Refresh();
                }
                else {
                  this.messageDialog.showApplicationsMessage(corelationResponse2.message, "ERROR");
                }
              });

          }

        });
      }
      else if (this.count == 1) {
        this.showApplicationMessage = "Failed to save settings"
        var dialogmessage = "Co-Relation between <b>" + this.selectedSourceTool.toolName + "</b> and <b>" + this.selectedDestinationTool.toolName + "</b> already exists in the Correlation.json.If you wish to create a new Co-Relation please delete the existing Co-relation and save it with a UNIQUE name."
        this.messageDialog.showApplicationsMessage(dialogmessage, "ERROR");
        this.count = 0;
        newName = undefined;
      }
      else {
        var dialogmessage = "Failed to create the Co-Relation <b>" + this.finalRelationName + "</b>. Please try again."
        this.messageDialog.showApplicationsMessage(dialogmessage, "ERROR");
      }
    }
  }
}
