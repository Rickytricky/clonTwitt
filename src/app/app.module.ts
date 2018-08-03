import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TendenciaComponent } from './components/tendencia/tendencia.component';
import { PerfilnComponent } from './components/perfiln/perfiln.component';
import { SeguirComponent } from './components/seguir/seguir.component';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DerechosComponent } from './components/derechos/derechos.component';
import { ContenidoComponent } from './components/contenido/contenido.component';

@NgModule({
  declarations: [
    AppComponent,
    TendenciaComponent,
    PerfilnComponent,
    SeguirComponent,
    NoticiaComponent,
    NavbarComponent,
    DerechosComponent,
    ContenidoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
