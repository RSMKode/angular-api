import { PokemonResults } from '@/interfaces/pokemon';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<PokemonResults> {
    const API_URL = 'https://pokeapi.co/api/v2/';

    return this.http.get<PokemonResults>(API_URL + 'pokemon?limit=10&offset=0');
  }
}
