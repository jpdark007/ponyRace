import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  races: Race[]

  ponies: Poney[] = []

  getPonies(): Observable<Poney[]>{
    //return this.ponies;
    return this.http.get("http://localhost:3000/ponies").pipe(map((res) => {
      return <Poney[]>res;
    }));
  }

  getRaces(): Observable<Race[]>{
    return this.http.get("http://localhost:3000/races").pipe(map((res) => {
      return <Race[]>res;
    }));
    //return this.races;
  }

  getRaceById(id: number): Observable<Race>{
    //return this.getRaces().find(race => {
    // return race.id == id;
    //});
    return this.http.get("http://localhost:3000/races/"+id).pipe(map((res) => {
      return <Race>res;
    }));
  }

  reset(){
    this.ponies.forEach(poney => {
      poney.distance = 0;
    })
  }

  constructor(private http: HttpClient) { }
}
