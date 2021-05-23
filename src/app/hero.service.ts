import { Injectable } from '@angular/core';
import { hero } from './hero';
import { Heroes } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
 
  constructor() { }
  getHeroes():hero[] {
    return Heroes;
  }

  getHero(id: number): hero {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    return Heroes.find(h => h.id === id) as hero ;
    
  }
}
