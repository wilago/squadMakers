import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { Pokemons } from '../../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public pokemons!: Pokemons;
  public pokemonDetails: any[] = [];
  public previous= false
  public getDataPoke='';
  public posts = [1, 2, 3, 4, 5];

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.searchPokemon('?limit=6&offset=0');
  }

  searchPokemon(name: string) {
    this.pokemonsService.getPokemonByNameId(name)
      .then(response => {
        this.showpokemons(response);
      })
      .catch(error => {
        console.error(error);
      });
  }


  nextList() {
    this.pokemonsService.getPokemonData(this.pokemons.next)
      .then(resp => {
       this.showpokemons(resp);
      })
  }

  nextPrevious() {
    this.pokemonsService.getPokemonData(this.pokemons.previous?? "" )
      .then(resp => {
       this.showpokemons(resp);
      })
  }

  showpokemons(list:any){
    this.pokemonDetails=[];
    this.pokemons = list.data;
    this.pokemons.previous?this.previous=true:this.previous=false;
    for (let index of this.pokemons.results) {
      this.pokemonsService.getPokemonData(index.url)
        .then(resp => {
          this.pokemonDetails.push(resp.data);
        })

    }
  }

  handleChange(poke: any) {
    console.log(poke);
    this.getDataPoke=poke;
  }

  searhPoke(){
    console.log('searhPoke');
    this.searchPokemon(this.getDataPoke);
  }

}
