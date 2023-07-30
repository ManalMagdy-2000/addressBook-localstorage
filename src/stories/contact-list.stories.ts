import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { action } from '@storybook/addon-actions';

import { ContactListComponent } from 'src/app/contact-list/contact-list.component';
import { ContactService } from 'src/app/services/contact.service';
import { MockContactService } from './contact.service.mock';

export default {
  title: 'Contact List',
  component: ContactListComponent,
  decorators: [
    moduleMetadata({
      declarations: [ContactListComponent],
      imports: [
        BrowserAnimationsModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
      ],
      providers: [{ provide: ContactService, useClass: MockContactService }], // Provide the mock service here
    }),
  ],
};

// Default story without any props
export const Default = () => ({
  template: `
    <app-contact-list [contacts]="contacts"></app-contact-list>
  `,
});

// Story with a list of contacts passed as props
export const WithContacts = () => ({
  template: `
    <app-contact-list [contacts]="contacts"></app-contact-list>
  `,
  props: {
    contacts: [
      // Add some test contacts here to display in the list
      {
        fullName: 'John Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
        username: 'johnny',
      },
      // Add more test contacts if needed
    ],
  },
});





/*import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { action } from '@storybook/addon-actions';

import { ContactListComponent } from 'src/app/contact-list/contact-list.component';
import { ContactService } from 'src/app/services/contact.service';
import { MockContactService } from './contact.service.mock';

export default {
  title: 'Contact List',
  component: ContactListComponent,
  decorators: [
    moduleMetadata({
      declarations: [ContactListComponent],
      imports: [
        BrowserAnimationsModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
      ],
      providers: [{ provide: ContactService}], // Provide the mock service here
    }),
  ],
};

export const Default = () => ({
  component: ContactListComponent,
  template: `
    <app-contact-list></app-contact-list>
  `,
});

export const EditContact = () => ({
  component: ContactListComponent,
  template: `
    <app-contact-list
      [contacts]="contacts"
      (editContact)="onEditContact($event)"
    ></app-contact-list>
  `,
  props: {
    contacts: [
      // Add some test contacts here to display in the list
      {
        fullName: 'John Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
        username: 'johnny',
        avatar :''
      },
      // Add more test contacts if needed
    ],
    onEditContact: action('editContact'),
  },
});

// Add more stories for other actions (addContact, deleteContact) if needed
*/
