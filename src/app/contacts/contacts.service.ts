import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class ContactsService {

  constructor(public http:Http) { }

  getContactList() {
    return this.http.get('assets/contacts.json').map((response: Response) => {
      return response.json();
    })
    .catch((error: Response) => Observable.throw(error));
  }

}
