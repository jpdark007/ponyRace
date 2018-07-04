import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  races: Race[] = [
    {
      id: 0,
      name: 'Tokyo',
      poneyIds: [0, 1]
    },
    {
      id: 1,
      name: 'Paris',
      poneyIds: [1, 2]
    },
    {
      id: 2,
      name: 'Berk',
      poneyIds: [2, 3]
    }
  ]

  ponies: Poney[] =
  [
    {
      id: 0,
      "name": "Eric",
      "img" : "https://github.com/Aubret/poneymon/blob/master/src/assets/pony-blue-running.gif?raw=true",
      "distance": 0
    },
    {
      id: 1,
      "name": "Tom",
      "img": "https://github.com/Aubret/poneymon/blob/master/src/assets/pony-purple-running.gif?raw=true",
      "distance": 0
    },
    {
      id: 2,
      "name": "Steeve",
      "img": "https://github.com/Aubret/poneymon/blob/master/src/assets/pony-green-running.gif?raw=true",
      "distance": 0
    },
    {
      id: 3,
      "name": "Robert",
      "img": "https://github.com/Aubret/poneymon/blob/master/src/assets/pony-purple-running.gif?raw=true",
      "distance": 0
    }
  ];

  getPonies(){
    return this.ponies;
  }

  getRaces(){
    return this.races;
  }

  constructor() { }
}
