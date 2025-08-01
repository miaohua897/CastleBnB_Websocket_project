import { Routes } from '@angular/router';
import { testComponent } from './test.component';
import { spotComponent } from './spot.component';
export const routes: Routes = [
{
    path:'',
    component:spotComponent
},    
{
    path:'test',
    component:testComponent
}];
