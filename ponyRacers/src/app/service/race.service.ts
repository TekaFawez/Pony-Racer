import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  BehaviorSubject, Observable, catchError, throwError} from 'rxjs';
import { RaceModel } from '../models/race.model';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  private readonly API_URL = 'assets/data/races.json';

  constructor(private http:HttpClient) { }

  list(): Observable<RaceModel[]> {
    return this.http.get<RaceModel[]>(this.API_URL)

  }
  
}
