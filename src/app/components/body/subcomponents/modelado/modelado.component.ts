import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {Recurso} from '../../../../utiles/recursos_model';
import {MODELADOS} from '../../../../utiles/modelados_db';
import * as THREE from 'three';
import { MeshOptions } from 'angular-stl-model-viewer';

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


