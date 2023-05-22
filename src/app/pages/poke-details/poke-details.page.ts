import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';
import { NavController } from '@ionic/angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.page.html',
  styleUrls: ['./poke-details.page.scss'],
})
export class PokeDetailsPage implements OnInit  {
  @ViewChild('barChart') barChart:any;
  canvas: any;
  ctx: any;
  
  // Init variables
  idPoke: any;
  pokeDetails: any;
  bars: any;
  eyelashe_About = true;
  colorClass = false;



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
        this.pokeDetails = poke.data;
      })
      .catch(error => {
        console.error(error);
      });
    const div = document.getElementById('eyelasheAbout');
    div?.classList?.toggle('active');
  }


  ionViewDidEnter() {
       //this.createBarChart();
  }

//Creation Bar Chart
  createBarChart() {
    const ctx = this.barChart?.nativeElement.getContext('2d');
    this.bars = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [{
          label: 'Data',
          data: [10, 20, 30],
          backgroundColor: ['red', 'green', 'blue'],
        }]
      },
      options: {
        // Opciones de la gráfica
      }
    });
  }

  // go back page 
  goBack() {
    this.navCtrl.pop();
  }

  //Validate and change the state of the about tab
  eyelasheAbout() {
    this.eyelashe_About = true;
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
