import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  constructor(private dialogRef: MatDialogRef<EducationComponent>) {}

  onClose() {
    this.dialogRef.close();
  }

  openPdf() {
    const pdfUrl = 'assets/pdf/education.pdf';
    const pdfWindow = window.open(pdfUrl, '_blank');
    if (pdfWindow) {
      pdfWindow.focus();
    } else {
      alert('Please allow popups for this website');
    }
  }

  downloadPdf() {
    const pdfUrl = 'assets/pdf/education.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'education.pdf';
    link.click();
  }
}
