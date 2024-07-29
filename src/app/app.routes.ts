import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CardListComponent } from './ui/card-list/card-list.component';
import { DistrictComponent } from './pages/district/district.component';

export const routes: Routes = [
    {
    path:'',loadComponent:()=>import("./pages/home/home.component").then((m)=>m.HomeComponent)
    },
    
    {
        path:'contact',loadComponent:()=>import("./pages/contact/contact.component").then((m)=>m.ContactComponent)
    },
    {
        path:'card',loadComponent:()=>import("./ui/card-list/card-list.component").then((m)=>m.CardListComponent)
    },
    {
        path:'district/:id',loadComponent:()=>import("./pages/district/district.component").then((m)=>m.DistrictComponent)
    },
    {
        path:"login",loadComponent:()=>import('./pages/login/login.component').then((m)=>m.LoginComponent)
    }
];
