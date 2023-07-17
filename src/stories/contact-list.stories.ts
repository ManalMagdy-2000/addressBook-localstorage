import { ContactFormComponent } from './../app/contact-form/contact-form.component';
import { moduleMetadata, StoryFn, Meta } from '@storybook/angular';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactListComponent } from 'src/app/contact-list/contact-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { AddContact } from './contact-form.stories';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { ContactService } from 'src/app/services/contact.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

export default {
  title: 'Components/Contact List',
  component: ContactListComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MatDialogModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatTableModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatMenuModule,
      ],
      providers: [
        { provide: MatDialog, useValue: {} },
        { provide: ContactService, useClass: ContactService },
      ],
    }),
  ],
} as Meta;

const Template: StoryFn<ContactListComponent> = (args) => ({
  component: ContactListComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  contacts: AddContact.args.contact ? [AddContact.args.contact] : [], // Use the contact from AddContact story if available
};

export const EmptyList = Template.bind({});
EmptyList.args = {
  contacts: [],
};
