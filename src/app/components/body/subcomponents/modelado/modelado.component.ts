import { Component, OnInit } from '@angular/core';
import {MODELADOS} from '../../../../utiles/modelados_db';

@Component({
  selector: 'app-modelado',
  templateUrl: './modelado.component.html',
  styleUrls: ['./modelado.component.scss']
})
export class ModeladoComponent implements OnInit {

  modelados = MODELADOS;
  constructor(){}

  ngOnInit(): void {
   
  }
}


