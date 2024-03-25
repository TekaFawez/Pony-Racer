import { Component } from '@angular/core';
import { RaceModel } from '../models/race.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fi-races',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './races.component.html',
  styleUrl: './races.component.css',
})
export class RacesComponent {
  races:Array <RaceModel> = [
    { id: 1, name: 'Lyon' },
    { id: 2, name: 'London' },
  ];
}
