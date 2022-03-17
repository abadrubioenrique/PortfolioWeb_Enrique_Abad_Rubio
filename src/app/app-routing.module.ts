import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BodyComponent } from './components/body/body.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { UnityComponent } from './components/body/subcomponents/unity/unity.component';
import { TexturizadoComponent } from './components/body/subcomponents/texturizado/texturizado.component';
import { ModeladoComponent } from './components/body/subcomponents/modelado/modelado.component';
import { AnimacionComponent } from './components/body/subcomponents/animacion/animacion.component';
import { AdobeComponent } from './components/body/subcomponents/adobe/adobe.component';
import { WebComponent } from './components/body/subcomponents/web/web.component';

const approutes: Routes = [
  {
    path: 'index', component: BodyComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'unity', component: UnityComponent
  },
  {
    path: 'web', component: WebComponent
  },
  {
    path: 'adobe', component: AdobeComponent
  },
  {
    path: 'animacion', component: AnimacionComponent
  },
  {
    path: 'modelado', component: ModeladoComponent
  },
  {
    path: 'texturizado', component: TexturizadoComponent
  },
  {
     path: '',   redirectTo: '/index', pathMatch: 'full' 
  }, // redirect to Home Page
  { 
     path: '**', component: PageNotFoundComponent 
  },  // Wildcard route for a 404 page 
];

@NgModule({
  imports: [RouterModule.forRoot(
    approutes
    )],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
