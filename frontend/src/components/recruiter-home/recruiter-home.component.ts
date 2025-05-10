import { Component, ElementRef, ViewChild } from '@angular/core';
import {UserDetail} from '../../assets/interface/userDetail';

@Component({
  selector: 'app-recruiter-home',
  standalone: true,
  imports: [],
  templateUrl: './recruiter-home.component.html',
  styleUrl: './recruiter-home.component.css'
})
export class RecruiterHomeComponent {
  menuOpen = false;
  userDetails:any;

  ngOnInit() {
    this.userDetails = history.state;
  }

  toggleMenu(){
    this.menuOpen = !this.menuOpen;
  }

@ViewChild('myVideo') myVideo!: ElementRef<HTMLVideoElement>;

playVideo() {
  const video = this.myVideo.nativeElement;
  console.log('Video element:', video);
  video.volume = 0.1
  if (video.ended) {
    video.currentTime = 0;
  }
  video.play().catch(err => console.warn('Play error:', err));
}

pauseVideo() {
    const video = this.myVideo.nativeElement;
    video.pause();
}

}
