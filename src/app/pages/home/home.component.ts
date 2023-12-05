import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EntreEmContatoComponent } from '../../components/entre-em-contato/entre-em-contato.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, EntreEmContatoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
