import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { RacesComponent } from './races/races.component';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'fi-root',
  standalone: true,
  imports: [HttpClientModule,RouterOutlet, MenuComponent,RacesComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ponyRacers';
}
