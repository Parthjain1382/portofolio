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
  @ViewChild('myVideo') myVideo!: ElementRef<HTMLVideoElement>;
  menuOpen = false;
  userDetails:any;

  ngOnInit() {
    this.userDetails = history.state;
  }

  toggleMenu(){
    this.menuOpen = !this.menuOpen;
  }

playVideo() {
  if(!this.menuOpen){
    const video = this.myVideo.nativeElement;
    video.volume = 0.1
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
