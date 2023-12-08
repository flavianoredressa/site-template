import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Swiper } from 'swiper';

register();
@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [],
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarrosselComponent implements OnInit {
  swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    freeMode: true,
    centeredSlides: true,
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
      },
      1250: {
        slidesPerView: 2.5,
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
