import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
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
export class CarrosselComponent {
  swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    freeMode: true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },

  })
}
