import { Routes } from '@angular/router';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { RoleSelectionComponent } from '../components/role-selection/role-selection.component';
import { RecruiterHomeComponent } from '../components/recruiter-home/recruiter-home.component';
import { SkillsComponent } from '../components/common/skills/skills.component';

export const routes: Routes = [

  {path: "", component:HomePageComponent},
  {path: 'roles', component: RoleSelectionComponent},
  {path: 'recruitHome', component: RecruiterHomeComponent},
  {path: 'skill', component: SkillsComponent}
];
