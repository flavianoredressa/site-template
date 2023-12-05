import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [CommonModule, RouterModule, TopbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  isToggle = false;
}
