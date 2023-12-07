import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarrosselComponent } from '../../components/carrossel/carrossel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarrosselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
