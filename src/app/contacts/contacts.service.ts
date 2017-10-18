/*******************************************************************************
 * Copyright IBM Corp. 2017
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {
  private contacts: any[];
  private requestInProgress: Observable<any>;

  constructor(public http: Http) { }

  getContactList() {
    if(this.contacts) {
      // cached data
      return Observable.of(this.contacts); 
    } else if(this.requestInProgress) {
      // request in progress
      return this.requestInProgress;
    } else {
      this.requestInProgress = this.http.get('assets/contacts.json')
      .map(res => {
        // clear progress Observable
        this.requestInProgress = null;
        // return the data
        if(res.status === 400) {
          console.error('Could not retrieve contacts');
          return [];
        } else if(res.status === 200) {
          this.contacts = res.json();
          return this.contacts;
        }
      })
      .share();
      return this.requestInProgress;
    }
  }

  getContactByEmail(email: string) {
    return this.getContactList()
      .map((data: any) => {
        return data.find(item => item.email === email)
      }
    );
  }

}
