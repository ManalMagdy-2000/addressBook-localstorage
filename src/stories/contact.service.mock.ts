import { Injectable } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Injectable()
export class MockContactService {
  //here I replaced my local storage in actual service  to array of contacts
  private contacts: Contact[] = [];
  constructor() {
    this.contacts = [
      { username: 'JohnDoe', email: 'john@example.com', phone: '1234567890' , fullName :"Jone Doe" , avatar:''},
      { username: 'JaneSmith', email: 'jane@example.com', phone: '9876543210' ,fullName :"Jane Doe" , avatar:'' },
    ];
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  updateContact(updatedContact: Contact): void {
    const index = this.contacts.findIndex(c => c.username === updatedContact.username);
    if (index !== -1) {
      this.contacts[index] = updatedContact;
    }
  }

  deleteContact(contact: Contact): void {
    const index = this.contacts.indexOf(contact);
    if (index !== -1) {
      this.contacts.splice(index, 1);
    }
  }
}
