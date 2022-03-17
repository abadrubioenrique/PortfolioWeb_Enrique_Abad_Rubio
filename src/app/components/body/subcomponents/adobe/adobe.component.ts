import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adobe',
  templateUrl: './adobe.component.html',
  styleUrls: ['./adobe.component.scss']
})
export class AdobeComponent implements OnInit {


  slide_list = [
    {
      slide:'Chica Buho',
      title:'Owl Girl',
      Description:'Montaje realizado con Adobe Photoshop',
      img: "assets/Recursos_adobe/Chica_buho.jpg",
    },
    {
      slide:'Torre Vengadores',
      title:'Avengers Tower',
      Description:'Torre modelada en blender, montaje realizado con Adobe Photoshop',
      img: "assets/Recursos_adobe/Torre_vengadores_Noche.jpg",
    },
    {
      slide:'Nucleo de Ironman',
      title:"Iron man's Heart",
      Description:'Modelado en blender, texturizado en 3DMax con Arnold y postproducción con Adobe Photoshop',
      img: "assets/Recursos_adobe/Iron_man_Heart_postproduction.jpg",
    },
     {
      slide:'Varios Peinados',
      title:'Varios Peinados',
      Description:'Creado con Adobe Illustrator',
      img: "assets/Recursos_adobe/Peinados.jpg",
    },
    {
      slide:'Peinados',
      title:'Peinados',
      Description:'Creado con Adobe Illustrator',
      img: "assets/Recursos_adobe/Peinados_2.jpg",
    },

  ]

  slides =  this.slide_list;
  constructor() {
  }

  ngOnInit() {
  }

}

