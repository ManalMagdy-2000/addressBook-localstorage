import { moduleMetadata, Meta } from '@storybook/angular';
import { StoryFn } from '@storybook/angular';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactFormComponent } from 'src/app/contact-form/contact-form.component';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';



export default {
  title: 'Components/Contact Form',
  component: ContactFormComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MatDialogModule,
        BrowserAnimationsModule ,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatMenuModule,
        MatDialogModule,
        MatTableModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { contact: { avatar: '', phone: '', email: '', fullName: '', username: '' }, isEdit: false } },
      ],
    }),
  ],
} as Meta;

const Template: StoryFn<ContactFormComponent> = (args) => ({
  component: ContactFormComponent,
  props: args,

});

export const AddContact = Template.bind({});
AddContact.args = {
  contact: {
    avatar: '',
    phone: '',
    email: '',
    fullName: '',
    username: '' ,
  },
  isEdit: false,
};

AddContact.args = {};
AddContact.argTypes = {
  isEdit: {
    control: { disable: true },
  },
};

export const EditContact = Template.bind({});
EditContact.args = {};
EditContact.argTypes = {
  isEdit: {
    control: { disable: false },
  },
};
