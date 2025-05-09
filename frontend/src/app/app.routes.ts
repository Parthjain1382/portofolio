import { Routes } from '@angular/router';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { RoleSelectionComponent } from '../components/role-selection/role-selection.component';

export const routes: Routes = [

  {path: "", component:HomePageComponent},
  {path: 'roles', component: RoleSelectionComponent},
];
