import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Swiper } from 'swiper';

register();
@Component({
  selector: 'app-card-assinar',
  standalone: true,
  imports: [],
  templateUrl: './card-assinar.component.html',
  styleUrl: './card-assinar.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class CardAssinarComponent implements OnInit {
  swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    freeMode: true,
    centeredSlides: true,
    pagination: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    breakpoints: {
      250: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      950: {
        slidesPerView: 2,
        spaceBetween: 30
      }
    }
  })

  ngOnInit() {
    const swiperEl = document.querySelector('swiper-container');
    if (swiperEl) {
      Object.assign(swiperEl, this.swiper);
      swiperEl.initialize();
    }
  }
}
