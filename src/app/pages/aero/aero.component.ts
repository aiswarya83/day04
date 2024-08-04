import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-aero',
  standalone: true,
  imports: [RouterLink,],
  templateUrl: './aero.component.html',
  styleUrl: './aero.component.css'
})
export class AeroComponent {
  
}
