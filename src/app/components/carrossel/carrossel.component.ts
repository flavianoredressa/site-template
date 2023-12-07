import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [],
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarrosselComponent {}
