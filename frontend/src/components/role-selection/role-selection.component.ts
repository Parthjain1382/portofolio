import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {UserDetail} from '../../assets/interface/userDetail';
import { UserDataService } from '../../service/user-data.service';

@Component({
  selector: 'app-role-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './role-selection.component.html',
  styleUrl: './role-selection.component.css'
})
export class RoleSelectionComponent {

  constructor(private router: Router, private userDataService: UserDataService) { }

  roles: UserDetail[] = [
    { name: 'Recruiter', image: '../../assets/images/avatar-1.jpg'},
    {name: 'Developer', image: '../../assets/images/avatar-2.jpg'},
    {name: 'Adventure', image: '../../assets/images/avatar-3.jpg'},
  ]

  selectRole(rolesObj: UserDetail) {

    switch (rolesObj.name) {
      case 'Recruiter':
           this.userDataService.setUserData(rolesObj);
            this.router.navigate(['/recruitHome']);
        break;
      case 'Developer':
            this.router.navigate(['/developerHome']);
        break;
      case 'Adventure':
            this.router.navigate(['/adventureHome']);
    }
  }
}
