import { Component, OnInit } from '@angular/core';
import { PAGINA } from 'src/app/utiles/web2_db';
import { WEB } from 'src/app/utiles/web_db';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {
  webs = WEB;
  paginas= PAGINA;
  viewport_big = 'assets/code/web/'+this.webs[0].name +'.png';
  viewport_big_php = 'assets/code/GDLWEBCAMP/'+this.paginas[0].name +'.png';

  constructor(){}
  
  ngOnInit(): void {
  }

  ViewportUpdate(id:number){    
    this.viewport_big= 'assets/code/web/'+this.webs[id].name +'.png';
  }
  ViewportUpdatePagina(id:number){    
    this.viewport_big_php= 'assets/code/GDLWEBCAMP/'+this.paginas[id].name +'.png';
  }
}
