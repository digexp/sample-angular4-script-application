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
