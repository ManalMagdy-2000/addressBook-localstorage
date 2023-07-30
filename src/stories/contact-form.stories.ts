import { moduleMetadata, StoryFn, Meta } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContactFormComponent } from 'src/app/contact-form/contact-form.component';
import { ContactService } from 'src/app/services/contact.service';
import { MockContactService } from './contact.service.mock';

export default {
  title: 'Contact Form',
  component: ContactFormComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { contact: { fullName: '', email: '', phone: '', username: '', avatar: '' }, isEdit: false } },
        { provide: ContactService, useClass: MockContactService }
      ],
      declarations: [ContactFormComponent]
    })
  ]
} as Meta;

const Template: StoryFn<ContactFormComponent> = (args) => ({
  component: ContactFormComponent,
  props: args
});

export const AddContact = Template.bind({});
AddContact.args = {
  data: { contact: { fullName: '', email: '', phone: '', username: '', avatar: '' }, isEdit: false }
};

export const EditContact = Template.bind({});
EditContact.args = {
  data: {
    contact: {
      fullName: 'John Doe',
      email: 'johndoe@example.com',
      phone: '123-456-7890',
      username: 'johndoe123',
      avatar: 'https://example.com/avatar1.jpg'
    },
    isEdit: true
  }
};
/*
export const SubmitContactForm = Template.bind({});
SubmitContactForm.args = {
  data: { contact: { fullName: '', email: '', phone: '', username: '', avatar: '' }, isEdit: false }
};
SubmitContactForm.decorators = [
  {
    template: `
      <form (ngSubmit)="onSubmit()">
        <app-contact-form [data]="data"></app-contact-form>
        <button type="submit">Submit Form</button>
      </form>
    `,
  },
];
SubmitContactForm.argTypes = {
  data: { table: { disable: true } }, // Hide data from the controls table
  onSubmit: { action: 'onSubmit' }, // Define the action to simulate the onSubmit method call
};
*/

