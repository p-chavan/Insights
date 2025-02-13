/*******************************************************************************
 * Copyright 2021 Cognizant Technology Solutions
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

 import { Injectable } from '@angular/core';
 import { RestCallHandlerService } from '@insights/common/rest-call-handler.service';
 import { BehaviorSubject, Observable } from 'rxjs';
 
 
 @Injectable()
 export class OutcomeService {
     
     public iconClkSubject=new BehaviorSubject<any>('');
     public setOutcomeSubject=new BehaviorSubject<any>([]);
 
     constructor(private restCallHandlerService: RestCallHandlerService) {
     }

     loadOutcomeList(): any {
        return this.restCallHandlerService.get("LIST_OUTCOME");
    }
 
     public saveOutcomeConfig(config: any): Promise<any> {
         return this.restCallHandlerService.postWithData("SAVE_OUTCOME_CONFIG", config, "", { 'Content-Type': 'application/x-www-form-urlencoded' }).toPromise();
     }
 
     public fetchOutcomeToolConfig(): Promise<any> {
         return this.restCallHandlerService.get("FETCH_OUTCOME_TOOL_CONFIG");
     }

     public updateOutcomeConfig(config: any): Promise<any> {
         return this.restCallHandlerService.postWithData("UPDATE_OUTCOME_CONFIG", config, "", { 'Content-Type': 'application/x-www-form-urlencoded' }).toPromise();
     }

     public updateOutcomeConfigStatus(config: any): Promise<any> {
        return this.restCallHandlerService.postWithData("UPDATE_OUTCOME_CONFIG_STATUS", config, "", { 'Content-Type': 'application/x-www-form-urlencoded' }).toPromise();
    }
 
     public deleteOutcome(id: any): Promise<any> {
         return this.restCallHandlerService.postWithParameter("DELETE_OUTCOME_CONFIG", {'id': id} , { 'Content-Type': 'application/x-www-form-urlencoded' }).toPromise();
     }
 }