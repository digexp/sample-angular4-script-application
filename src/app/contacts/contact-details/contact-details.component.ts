import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  selected: any;
  loading: boolean = false;
  contactFound: boolean = true;
  private sub1: any;
  private sub2: any;

  constructor(private route: ActivatedRoute, private service: ContactsService) { }

  ngOnInit() {
    this.sub1 = this.route.params
      .subscribe(params => {
        this.sub2 = this.service.getContactByEmail(params.email)
          .subscribe((data: any) => {
            if(data) {
              this.contactFound = true;
              this.selected = data;
            } else {
              this.contactFound = false;
            }
            this.selected = data;
          },
          error => console.error(error)
        );
      }
    );
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }

}
