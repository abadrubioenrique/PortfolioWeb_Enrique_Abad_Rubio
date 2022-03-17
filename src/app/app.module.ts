import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { SharedModule } from './shared/shared.module';
import { AboutComponent } from './components/about/about.component';
import { StickyNavModule } from 'ng2-sticky-nav';
import { ContactComponent } from './components/contact/contact.component';
import { UnityComponent } from './components/body/subcomponents/unity/unity.component';
import { WebComponent } from './components/body/subcomponents/web/web.component';
import { AdobeComponent } from './components/body/subcomponents/adobe/adobe.component';
import { AnimacionComponent } from './components/body/subcomponents/animacion/animacion.component';
import { ModeladoComponent } from './components/body/subcomponents/modelado/modelado.component';
import { TexturizadoComponent } from './components/body/subcomponents/texturizado/texturizado.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    AboutComponent,
    ContactComponent,
    UnityComponent,
    WebComponent,
    AdobeComponent,
    AnimacionComponent,
    ModeladoComponent,
    TexturizadoComponent,

  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    StickyNavModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
