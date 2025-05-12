import { Routes } from '@angular/router';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { RoleSelectionComponent } from '../components/role-selection/role-selection.component';
import { RecruiterHomeComponent } from '../components/recruiter-home/recruiter-home.component';
import { SkillsComponent } from '../components/common/skills/skills.component';
import { authGuard } from '../service/auth.guard';

export const routes: Routes = [

  { path: "", component: HomePageComponent },
  { path: 'roles', component: RoleSelectionComponent },
  { path: 'recruitHome', component: RecruiterHomeComponent, canActivate: [authGuard] },
  { path: 'skill', component: SkillsComponent,canActivate: [authGuard] }
];
