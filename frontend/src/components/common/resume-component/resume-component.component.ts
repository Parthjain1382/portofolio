import { Component } from '@angular/core';
import {  MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-resume-component',
  standalone: true,
  imports: [],
  templateUrl: './resume-component.component.html',
  styleUrl: './resume-component.component.css'
})
export class ResumeComponentComponent {

  constructor(private dialogRef: MatDialogRef<ResumeComponentComponent>){}

  onClose(){
    this.dialogRef.close();
  }

  openPdf(){
    const pdfUrl = 'assets/pdf/pranayJain_Resume.pdf'; // Replace with your PDF file path
    const pdfWindow = window.open(pdfUrl, '_blank');


    if (pdfWindow) {
      pdfWindow.focus();
    } else {
      alert('Please allow popups for this website');
    }
  }

  downloadPdf() {
    const pdfUrl = 'assets/pdf/pranayJain_Resume.pdf'; // Adjust path accordingly
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'resume.pdf'; // Name the file as you'd like
    link.click();
  }



}
