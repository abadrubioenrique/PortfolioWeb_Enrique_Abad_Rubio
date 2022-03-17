import { Component, OnInit } from '@angular/core';
import {Certificado} from '../../utiles/certificados_model';
import {CERTIFICADOS} from '../../utiles/certificados_db';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})

export class AboutComponent {
  title = 'appComponent';
  certificados = CERTIFICADOS;
  formacionShow = false;
  certificadosShow = false;
  idiomasShow = false;

  formacionDisplay() {
    this.formacionShow = !this.formacionShow;
  }
  certificadosDisplay() {
    this.certificadosShow = !this.certificadosShow;
  }
  idiomasDisplay() {
    this.idiomasShow = !this.idiomasShow;
  }

  portfolioDisplay(){
    window.open('https://github.com/abadrubioenrique','_blank');
  }
}
