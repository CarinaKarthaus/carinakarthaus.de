import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  // images = ['engineering2.jpg', 'macbook.jpg', 'macbook2.jpg', 'teamwork.jpg'];
  images = new Array();
  headlines = ['Engineering & coding perfectly combined',
    'Passion for challenge',
    'Going the extra-mile',
    'International work experience'
  ];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.preload(
      'engineering2.jpg', 
      'macbook.jpg', 
      'macbook2.jpg', 
      'teamwork.jpg');
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);
    
  }

  preload(...args: any[]):void {
    for (let i = 0; i < args.length; i++) {
      this.images[i] = new Image();
      this.images[i].src = './assets/img/' + args[i];
    }
  }
}
