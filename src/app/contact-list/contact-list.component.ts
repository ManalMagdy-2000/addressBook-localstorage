import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Contact } from '../models/contact';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  displayedColumns: string[] = ['avatar', 'fullName', 'email', 'phone', 'username', 'actions'];

  constructor(private dialog: MatDialog, private contactService: ContactService) {}

  ngOnInit() {
    this.retrieveContacts();
  }

  retrieveContacts() {
    this.contacts = this.contactService.getContacts().slice(); // Make a copy of the contacts array
  }


  editContact(contact: Contact) {
    const dialogRef = this.dialog.open(ContactFormComponent, {
      data: {
        contact: { ...contact }, // Make a copy of the contact
        isEdit: true
      }
    });

    dialogRef.afterClosed().subscribe(updatedContact => {
      if (updatedContact) {
        const index = this.contacts.findIndex(c => c.username === updatedContact.username);
        if (index !== -1) {
          this.contacts[index] = { ...updatedContact };
          this.contactService.updateContact(updatedContact);
          this.retrieveContacts(); // Retrieve contacts again
        }
      }
    });
  }





  addContact() {
    const dialogRef = this.dialog.open(ContactFormComponent, {
      data: {
        contact: {
          avatar: '',
          phone: '',
          email: '',
          fullName: '',
          username: ''
        },
        isEdit: false
      }
    });

    dialogRef.afterClosed().subscribe(newContact => {
      if (newContact) {
        this.contactService.addContact(newContact);
        this.retrieveContacts();
      }
    });
  }

  deleteContact(contact: Contact) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: `Are you sure you want to delete ${contact.fullName}?`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.contactService.deleteContact(contact);
        this.retrieveContacts();
      }
    });
  }
}
