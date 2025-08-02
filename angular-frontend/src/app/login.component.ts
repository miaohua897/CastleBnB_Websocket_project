import {Component} from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

/**
 * @title Tab group with the headers on the bottom
 */
@Component({
  selector: 'login-component',
  standalone: true,
  imports: [MatTabsModule,MatFormFieldModule, MatInputModule  ],
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})
export class loginComponent {}