import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Servicios
import { BioService } from './services/bio.service';
import { ProductosService } from './services/productos.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LoadingComponent } from './shared/loading/loading.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    PageNotFoundComponent,
    ContactoComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BioService, ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
