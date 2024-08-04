import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet,} from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  departments=[
    { id:1,
    Title:"Aerospace and Defence",
    Image:"https://www.worldatlas.com/r/w1200/upload/b3/d8/55/shutterstock-726791473.jpg",
    description:"Pushing boundaries & defending horizons with cutting-edge technologies",
    path:'/aero',
  },
  {
    id:2,
    Title:"Banking & Financial Service (BFS)",
    Image:"https://th.bing.com/th/id/OIP.htzAPz8fvd9Aap41-z1U9QHaFY?rs=1&pid=ImgDetMain",
    description:"Accelerating the cashless economy efficiently by adopting global standards & local priorities",
    path:"/bank"},
  {
    id:3,
    Title:"Healthcare",
    Image:"https://th.bing.com/th/id/OIP.vCss-WqfLdEgSf-Nqn66DwHaE8?rs=1&pid=ImgDetMain",
    description:"Unlocking the potential of insurance through technology",
    path:"/health"
  },
  {
    id:4,
    Title:"Insurance",
    Image:"https://nestdigital.com/wp-content/uploads/2023/07/Rectangle-20-3.jpg",
    description:"Unlocking the potential of insurance through technology",
    path:"/insurance"
  },
  {
    id:5,
    Title:"Locomotive",
    Image:"https://nestdigital.com/wp-content/uploads/2023/07/Rectangle-20-2.jpg",
    description:"Elevating Locomotive Experiences through Innovative Technologies",
    path:"/locomotive"},
  {
    id:6,
    Title:"Industrial",
    Image:"https://nestdigital.com/wp-content/uploads/2023/05/Rectangle-20.png",
    description:"Where Power Meets Production: Redefining Manufacturing & Energy",
    path:"/industrial"
  },
  {
    id:7,
    Title:"Mobility",
    Image:"https://nestdigital.com/wp-content/uploads/2023/04/Rectangle-20.jpg",
    description:"We are Revolutionizing the world of Mobility",
    path:"/mobility"}
];
}


