import { Routes } from '@angular/router';
import { ListComponent } from './cv-portfolio/list/list.component';
import { FormComponent } from './cv-portfolio/form/form.component';

export const routes: Routes = [
  { path: 'cv-portfolio', component: ListComponent },
  { path: 'cv-portfolio/new', component: FormComponent },
  { path: 'cv-portfolio/edit/:id', component: FormComponent },
];

