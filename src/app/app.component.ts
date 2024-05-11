import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatSlideToggle,
    HomeComponent,
    MaterialModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
