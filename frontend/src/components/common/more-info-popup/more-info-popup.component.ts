import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-more-info-popup',
  standalone: true,
  imports: [],
  templateUrl: './more-info-popup.component.html',
  styleUrl: './more-info-popup.component.css'
})
export class MoreInfoPopupComponent {

  constructor(private dialog: MatDialogRef<MoreInfoPopupComponent>){}
  moreInfoText: string = 'This side of Website is for recruiters who can view and consider my Resume and other details. They can also view my skills, education, hobbies, and certificates';
  onClose(){
    this.dialog.close();
  }
}
