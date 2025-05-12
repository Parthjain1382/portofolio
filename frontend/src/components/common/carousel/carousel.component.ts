import { Component, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ResumeComponentComponent } from '../resume-component/resume-component.component';
import { Router } from '@angular/router';
import { EducationComponent } from '../education/education.component';

interface CarouselItem {
  imageUrl: string;
  title: string;
  tag?: string; // For tags like "Recently Added"
}
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  @Input() items: CarouselItem[] = [];
  @Input() categoryTitle: string = 'Category';

  @ViewChild('carouselTrack') carouselTrack!: ElementRef;

  scrollPosition = 0;
  maxScrollPosition = 0;
  scrollAmount = 0;

  constructor(private dialog: MatDialog, private router: Router){}

  ngAfterViewInit() {
    // Calculate the maximum scroll position
    setTimeout(() => {
      this.calculateScrollLimits();
    }, 0);

    // Recalculate on window resize
    window.addEventListener('resize', () => {
      this.calculateScrollLimits();
    });
  }

  calculateScrollLimits() {
    const track = this.carouselTrack.nativeElement;
    this.maxScrollPosition = track.scrollWidth - track.clientWidth;

    // Calculate how much to scroll (approximately 2-3 items)
    const itemWidth = track.clientWidth / (window.innerWidth > 1200 ? 6 :
                                          window.innerWidth > 992 ? 5 :
                                          window.innerWidth > 768 ? 4 :
                                          window.innerWidth > 576 ? 3 : 2);
    this.scrollAmount = Math.floor(itemWidth * 2.5);
  }

  scrollLeft() {
    if (this.scrollPosition <= 0) return;

    const track = this.carouselTrack.nativeElement;
    this.scrollPosition = Math.max(0, this.scrollPosition - this.scrollAmount);
    track.scrollLeft = this.scrollPosition;
  }

  scrollRight() {
    if (this.scrollPosition >= this.maxScrollPosition) return;

    const track = this.carouselTrack.nativeElement;
    this.scrollPosition = Math.min(this.maxScrollPosition, this.scrollPosition + this.scrollAmount);
    track.scrollLeft = this.scrollPosition;
  }


  onItemClick(item: CarouselItem) {
    const isMobile = window.innerWidth <= 600;
    switch(item.title) {
      case 'Resume':
            this.dialog.open(ResumeComponentComponent, {
              width: isMobile ? '90vw' : '60%',
              height: isMobile ? '95vh' : '100%',
              panelClass: 'centered-dialog',
            });
        break;
      case 'Skill':
            this.router.navigate(['/skill']);
      break;
      case 'Education':
            this.dialog.open(EducationComponent, {
              width: isMobile ? '90vw' : '60%',
              height: isMobile ? '95vh' : '100%',
              panelClass: 'centered-dialog',
            });
      break;
      case 'Hobbies':
        // Handle Hobbies click
        break;
      case 'Certificate':
        // Handle Certificate click
        break;
      case 'Connect Me':
        // Handle Connect Me click
        break;
      default:
        // Handle default case
    }
  }
}
