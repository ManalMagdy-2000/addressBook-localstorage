import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  localStorageKey = 'contacts';
  contacts: Contact[] = [];

  constructor() {
    this.retrieveContactsFromLocalStorage();
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  retrieveContactsFromLocalStorage(): void {
    const contactsData: string | null = localStorage.getItem(this.localStorageKey);
    this.contacts = contactsData !== null ? JSON.parse(contactsData) : [];
  }

  saveContactsToLocalStorage(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.contacts));
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
    this.saveContactsToLocalStorage();
  }

  updateContact(updatedContact: Contact): void {
    const index = this.contacts.findIndex(c => c.username === updatedContact.username);
    if (index !== -1) {
      this.contacts[index] = updatedContact;
      this.saveContactsToLocalStorage();
    }
  }


  deleteContact(contact: Contact): void {
    const index = this.contacts.indexOf(contact);
    if (index !== -1) {
      this.contacts.splice(index, 1);
      this.saveContactsToLocalStorage();
    }
  }
}
