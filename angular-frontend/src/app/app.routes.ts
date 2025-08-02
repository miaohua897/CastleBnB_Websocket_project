import { Routes } from '@angular/router';
import { spotComponent } from './spot.component';
import { loginComponent } from './login.component';
export const routes: Routes = [
{
    path:'',
    component:spotComponent
},    
{
    path:'login',
    component:loginComponent
}
];
