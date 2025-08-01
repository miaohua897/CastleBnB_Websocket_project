import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';


/**
 * @title Menu with icons
 */
@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule ,     
    MatButtonModule,    
  ],
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css'],
})
export class  navComponent{}