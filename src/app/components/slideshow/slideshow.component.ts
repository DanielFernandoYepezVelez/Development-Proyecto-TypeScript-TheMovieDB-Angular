import Swiper from 'swiper';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

/* Interfaces */
import { Movie } from '../../interfaces/now-playing.interface';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  private mySwiper: Swiper;
  @Input() movies: Movie[];

  constructor() { }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
    });
  }

  ngOnInit(): void {
    // console.log(this.movies);
  }

  public onSlideNext(): void {
    this.mySwiper.slideNext();
  }

  public onSlidePrev(): void {
    this.mySwiper.slidePrev();
  }
}
