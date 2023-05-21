import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.page.html',
  styleUrls: ['./poke-details.page.scss'],
})
export class PokeDetailsPage implements OnInit {

  // Init variables
  idPoke: any;
  pokeDetails: any;
  eyelashe_About = true;


  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonsService: PokemonsService,
    private navCtrl: NavController
  ) { }

  /**  The id variable sent from the main page is captured and the getPokemonByNameId 
   * service is consumed to obtain the information of said pokemon(id)*/
  ngOnInit() {
    this.idPoke = this.activatedRoute.snapshot.paramMap.get("id");
    this.pokemonsService.getPokemonByNameId(this.idPoke)
      .then(poke => {
        console.log(poke.data);
        this.pokeDetails = poke.data;
      })
      .catch(error => {
        console.error(error);
      });
    const div = document.getElementById('eyelasheAbout');
    div?.classList?.toggle('active');
  }
  // go back page 
  goBack() {
    this.navCtrl.pop();
  }

  //Validate and change the state of the about tab
  eyelasheAbout() {
    this.eyelashe_About = true;
    console.log('eyelasheAbout()');
    const div = document.getElementById('eyelasheAbout');
    if (!div?.classList.contains('active')) {
      div?.classList?.toggle('active');
    }
    const div2 = document.getElementById('eyelasheMoves');
    if (div2?.classList.contains('active')) {
      div2?.classList?.toggle('active');
    }

  }
  //Validate and change the state of the Moves tab
  eyelasheMoves() {
    console.log('eyelasheMoves()');
    this.eyelashe_About = false;
    const div = document.getElementById('eyelasheMoves');
    if (!div?.classList.contains('active')) {
      div?.classList?.toggle('active');
    }
    const div2 = document.getElementById('eyelasheAbout');
    if (div2?.classList.contains('active')) {
      div2?.classList?.toggle('active');
    }
  }

}
