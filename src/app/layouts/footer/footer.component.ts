import { Component, inject } from '@angular/core';
import { EmitterEventService } from '../../services/emitter-event.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private emitterEvent = inject(EmitterEventService);


  goToTop() {
    this.emitterEvent.broadcast({ name: 'go-to-top' });
  }
}
