import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { EmitterEventService } from '../services/emitter-event.service';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [CommonModule, RouterModule, TopbarComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  private emitterEvent = inject(EmitterEventService);
  isToggle = false;

  ngOnInit() {
    this.subscribeTop();
  }

  subscribeTop() {
    this.emitterEvent.subscrible('go-to-top', () => {
      window.scrollTo({top: 0});
    });
  }
}


