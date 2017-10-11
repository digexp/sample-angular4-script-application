import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [ ContactsService ]
})
export class ContactListComponent implements OnInit {
  contacts: any[];

  constructor(private service: ContactsService) { }

  ngOnInit() {
    return this.refreshContactList();
  }

  refreshContactList() {
    this.service.getContactList().subscribe((receivedData: any) => {
      this.contacts = receivedData;
    },
      error => console.error(error)
    );
  }

}
