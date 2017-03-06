/*
 ~  Copyright 2016 Ripple Foundation C.I.C. Ltd
 ~  
 ~  Licensed under the Apache License, Version 2.0 (the "License");
 ~  you may not use this file except in compliance with the License.
 ~  You may obtain a copy of the License at
 ~  
 ~    http://www.apache.org/licenses/LICENSE-2.0

 ~  Unless required by applicable law or agreed to in writing, software
 ~  distributed under the License is distributed on an "AS IS" BASIS,
 ~  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~  See the License for the specific language governing permissions and
 ~  limitations under the License.
 */
import routes from "./index.route";
import reducer from "./transfer-of-care-reducer-all";
import transferOfCareListComponent from './transfer-of-care-list.component';
import transferOfCareDetailComponent from './transfer-of-care-detail.component';
import transferOfCareActions from './transfer-of-care-actions';

export default {
  "name": 'transferOfCare',
  "routes": routes,
  "reducer": reducer,
  "components": {
    transferOfCareListComponent,
    transferOfCareDetailComponent
  },
  "actions": {
    transferOfCareActions
  },
  "sidebarInfo": {
    name: 'transfers',
    link: 'transferOfCare',
    linkDetail: 'transferOfCare-detail',
    title: 'Transfer of Care'
  }
}