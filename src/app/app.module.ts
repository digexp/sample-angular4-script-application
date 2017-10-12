import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { AboutComponent } from './about/about.component';
import { ContactsService } from './contacts/contacts.service';
import { SearchPipe } from './search.pipe';

const appRoutes: Routes = [
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'list',
		component: ContactListComponent
	},
	{
		path: 'details/:email',
		component: ContactDetailsComponent
	},
	{
		path: '',
		redirectTo: '/list',
		pathMatch: 'full'
	}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailsComponent,
    AboutComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ ContactsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
