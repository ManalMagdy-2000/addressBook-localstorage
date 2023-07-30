// contact-service-mock.ts

import { Contact } from 'src/app/models/contact';

// Mock service for testing in Storybook
export class ContactServiceMock {
  contacts: Contact[] = [];

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
