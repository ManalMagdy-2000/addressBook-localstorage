import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../models/contact';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  newContact: Contact;
  avatarPreview: string | undefined;
  uniqueUsername: string | undefined;
  emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  constructor(
    private dialogRef: MatDialogRef<ContactFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.newContact = { ...this.data.contact };
    this.generateUniqueUsername();
  }

  handleAvatarUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.avatarPreview = reader.result as string;
      this.newContact.avatar = this.avatarPreview;
    };
    reader.readAsDataURL(file);
  }

  chooseAvatarFile() {
    const fileInput = document.getElementById('avatar');
    if (fileInput) {
      fileInput.click();
    }
  }

  generateUniqueUsername() {
    const firstname = this.newContact.fullName.split(' ')[0].toLowerCase();
    const randomNumber = Math.floor(Math.random() * 1000);
    this.uniqueUsername = firstname + randomNumber;
  }

  onSubmit() {
    if (this.data.isEdit) {
      // Handle edit functionality
      this.dialogRef.close(this.newContact);
    } else {
      // Handle add functionality
      this.dialogRef.close(this.newContact);
    }
  }
}
