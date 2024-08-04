import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DepartmentComponent } from './pages/department/department.component';
import { AeroComponent } from './pages/aero/aero.component';
import { BankComponent } from './pages/bank/bank.component';
import { HealthComponent } from './pages/health/health.component';
import { InsuranceComponent } from './pages/insurance/insurance.component';
import { IndustrialComponent } from './pages/industrial/industrial.component';
import { MobilityComponent } from './pages/mobility/mobility.component';
import { LocomotiveComponent } from './pages/locomotive/locomotive.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"contact",component:ContactComponent},
    {path:"department",component:DepartmentComponent},
    {path:"aero",component:AeroComponent},
    {path:"bank",component:BankComponent},
    {path:"health",component:HealthComponent},
    {path:"insurance",component:InsuranceComponent},
    {path:"industrial",component:IndustrialComponent},
    {path:"mobility",component:MobilityComponent},
    {path:"locomotive",component:LocomotiveComponent}
];
