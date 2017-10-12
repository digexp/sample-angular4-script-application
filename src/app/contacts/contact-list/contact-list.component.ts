import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: any[];
  query: string = '';
  private sub: any;

  constructor(private service: ContactsService) { }

  ngOnInit() {
    this.refreshContactList();
  }

  refreshContactList() {
    this.query = '';
    this.sub = this.service.getContactList()
      .subscribe((data: any) => {
        this.contacts = data;
      },
      error => console.error(error)
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
