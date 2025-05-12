import { Component, ElementRef, ViewChild } from '@angular/core';
import {UserDetail} from '../../assets/interface/userDetail';
import { CarouselComponent } from '../common/carousel/carousel.component';
import { MatDialog } from '@angular/material/dialog';
import { MoreInfoPopupComponent } from '../common/more-info-popup/more-info-popup.component';
import { UserDataService } from '../../service/user-data.service';

@Component({
  selector: 'app-recruiter-home',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './recruiter-home.component.html',
  styleUrl: './recruiter-home.component.css'
})
export class RecruiterHomeComponent {
  @ViewChild('myVideo') myVideo!: ElementRef<HTMLVideoElement>;
  menuOpen = false;
  userDetails:any;
  carouselSlides= [
   {
      imageUrl: 'assets/images/top-trending/resumeImage.png',
      title: 'Resume',
      tag: 'Recently Added'
    },
    {
      imageUrl: 'assets/images/top-trending/skill.jpg',
      title: 'Skill',
      tag: 'Recently Added'
    },
    {
      imageUrl: 'assets/images/top-trending/education.png',
      title: 'Education',
      tag: 'Recently Added'
    },
    {
      imageUrl: 'assets/images/top-trending/hobbies.png',
      title: 'Hobbies',
      tag: 'Recently Added'
    },
     {
      imageUrl: 'assets/images/top-trending/certificate.png',
      title: 'Certificate',
      tag: 'Recently Added'
    },
    {
      imageUrl: 'assets/images/top-trending/connectMe.png',
      title: 'Connect Me',
      tag: 'Recently Added'
    },
    {
      imageUrl: 'assets/images/avatar-1.jpg',
      title: 'The Seat',
      tag: 'Recently Added'
    },
    {
      imageUrl: 'assets/images/avatar-1.jpg',
      title: 'Britain and the Blitz',
      tag: 'Recently Added'
    },
  ]

  constructor(private dialog: MatDialog, private userDataService: UserDataService) {}
  ngOnInit() {
    this.userDetails = this.userDataService.getUserData();
  }

  toggleMenu(){
    this.menuOpen = !this.menuOpen;
  }

playVideo() {
  if(!this.menuOpen){
    const video = this.myVideo.nativeElement;
    video.volume = 0.05
    if (video.ended) {
      video.currentTime = 0;
    }
    video.play().catch(err => console.warn('Play error:', err));
  }
}

  pauseVideo() {
      const video = this.myVideo.nativeElement;
      video.pause();
  }

  viewResume() {
    const pdfUrl = 'assets/pdf/pranayJain_Resume.pdf';
    const pdfWindow = window.open(pdfUrl, '_blank');

    if (pdfWindow) {
      pdfWindow.focus();
    } else {
      alert('Please allow popups for this website');
    }
  }

  viewMoreInfo(){
    const isMobile = window.innerWidth <= 600;
    this.dialog.open(MoreInfoPopupComponent, {
      width: isMobile ? '90vw' : '30%',
      height: isMobile ? 'auto' : '30%'
    });
  }
}
