import { NgModule }              from "@angular/core";
import { Routes, RouterModule }  from "@angular/router";
import { PortafolioComponent }   from './pages/portafolio/portafolio.component';
import { AboutComponent }        from './pages/about/about.component';
import { ItemComponent }         from './pages/item/item.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContactoComponent }     from './pages/contacto/contacto.component';

const app_routes: Routes = [
    {path: '', component: PortafolioComponent},
    {path: 'home', component: PortafolioComponent},
    {path: 'bio', component: AboutComponent},
    {path: 'item', component: ItemComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '404', component: PageNotFoundComponent},
    { path: '**', pathMatch: 'full', redirectTo: '404'}

]

@NgModule({
    imports: [
        RouterModule.forRoot(app_routes, {useHash: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}