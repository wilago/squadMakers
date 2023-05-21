import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';
import { Pokemons } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private apiUrl = environment.pokeApi;
  constructor() { }

  // 
  getPokemonByNameId(name: string | number ) {
    const url = `${this.apiUrl}/pokemon/${name}`;
    return axios.get(url);
  }

  getPokemonData(data: string ) {
    const url = `${data}`;
    return axios.get<Pokemons>(url);
  }
}
