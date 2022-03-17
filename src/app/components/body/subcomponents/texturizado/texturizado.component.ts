import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-texturizado',
  templateUrl: './texturizado.component.html',
  styleUrls: ['./texturizado.component.scss']
})
export class TexturizadoComponent implements OnInit {


  slide_list = [

    {
      slide:'Nucleo de Ironman',
      title:"Iron man's Heart",
      Description:'Texturizado con Arnold en 3DMax',
      img: "assets/Recursos_adobe/IronMan_Heart.jpg",
    },
     {
      slide:'Gafas de aviador Ray Ban',
      title:'Gafas de aviador Ray Ban',
      Description:'Texturizado con Substance Painter',
      img: "assets/Recursos_adobe/Gafas_de_sol.jpg",
    },
    {
      slide:'Torre Vengadores',
      title:'Avengers Tower',
      Description:'Texturizada en 3DMax',
      img: "assets/Recursos_adobe/Torre_vengadores_Dia.jpg",
    },
  ]

  slides =  this.slide_list;
  constructor() {
  }

  ngOnInit() {
  }

}

