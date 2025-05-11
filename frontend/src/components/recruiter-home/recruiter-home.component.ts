import { Component, ElementRef, ViewChild } from '@angular/core';
import {UserDetail} from '../../assets/interface/userDetail';
import { CarouselComponent } from '../common/carousel/carousel.component';

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
      title: 'The Seat',
      tag: 'Recently Added'
    },
    {
      imageUrl: 'assets/images/top-trending/skill.jpg',
      title: 'The Seat',
      tag: 'Recently Added'
    },
    {
      imageUrl: 'assets/images/top-trending/education.png',
      title: 'Britain and the Blitz',
      tag: 'Recently Added'
    },
    {
      imageUrl: 'assets/images/top-trending/hobbies.png',
      title: 'The Seat',
      tag: 'Recently Added'
    },
     {
      imageUrl: 'assets/images/top-trending/certificate.png',
      title: 'Britain and the Blitz',
      tag: 'Recently Added'
    },
    {
      imageUrl: 'assets/images/top-trending/connectMe.png',
      title: 'Britain and the Blitz',
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
  ngOnInit() {
    this.userDetails = history.state;
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

}
