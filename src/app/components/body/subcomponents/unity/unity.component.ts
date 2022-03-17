import { Component, OnInit } from '@angular/core';

import {RECURSOS} from '../../../../utiles/recursos_db';
import { CONSOLA } from 'src/app/utiles/consola_db';
import { LOGIN } from 'src/app/utiles/login_db';

@Component({
  selector: 'app-unity',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.scss']
})
export class UnityComponent implements OnInit {
  recursos = RECURSOS;
  consolas = CONSOLA;
  logins = LOGIN;
  viewport_big = 'assets/code/'+this.recursos[0].name +'.png';
  viewport_big_console = 'assets/code/'+this.consolas[0].name +'.png';
  viewport_big_login = 'assets/code/'+this.logins[0].name +'.png';
  constructor(){}
  
  ngOnInit(): void {
  }

  ViewportUpdate(id:number){    
    this.viewport_big= 'assets/code/'+this.recursos[id].name +'.png';
  }
  ViewportUpdate_console(id:number){    
    this.viewport_big_console= 'assets/code/'+this.consolas[id].name +'.png';
  }
  ViewportUpdate_login(id:number){    
    this.viewport_big_login= 'assets/code/'+this.logins[id].name +'.png'; 
  }
}
