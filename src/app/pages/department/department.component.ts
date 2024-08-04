import { Component } from '@angular/core';
import { CardsComponent } from "../../units/cards/cards.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CardsComponent,],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {

}
