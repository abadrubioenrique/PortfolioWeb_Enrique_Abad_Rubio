import { Component, OnInit } from '@angular/core';
import {Recurso} from '../../../../utiles/recursos_model';
import {RIGS} from '../../../../utiles/rigs_db';
@Component({
  selector: 'app-animacion',
  templateUrl: './animacion.component.html',
  styleUrls: ['./animacion.component.scss']
})
export class AnimacionComponent implements OnInit {

  rigs = RIGS;


  ngOnInit(): void {
   
  }
}

