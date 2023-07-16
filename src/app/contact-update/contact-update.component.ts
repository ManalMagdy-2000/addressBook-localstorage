import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent implements OnInit {
  contact: Contact = {
    avatar: '',
    phone: '',
    email: '',
    fullName: '',
    username: ''
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const username = this.route.snapshot.paramMap.get('username');
    const contactsData: string | null = localStorage.getItem('contacts');
    const contacts: Contact[] = contactsData !== null ? JSON.parse(contactsData) : [];
    this.contact = contacts.find(c => c.username === username) || this.contact;
  }

  onSubmit() {
    const contactsData: string | null = localStorage.getItem('contacts');
    let contacts: Contact[] = contactsData !== null ? JSON.parse(contactsData) : [];
    contacts = contacts.map(c => (c.username === this.contact.username ? this.contact : c));
    localStorage.setItem('contacts', JSON.stringify(contacts));
    alert('Contact updated successfully!');
    this.router.navigate(['/list']);
  }
}
