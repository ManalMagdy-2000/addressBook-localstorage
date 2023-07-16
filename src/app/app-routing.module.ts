import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactUpdateComponent } from './contact-update/contact-update.component';

const routes: Routes = [
  { path: 'list', component: ContactListComponent },
  { path: 'add', component: ContactFormComponent },
  { path: 'edit/:username', component: ContactUpdateComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
