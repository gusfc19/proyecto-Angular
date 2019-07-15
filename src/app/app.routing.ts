// import { InicioComponent } from './components/inicio/inicio.component';
import {RouterModule, Routes} from '@angular/router';
import {InicioComponent } from './components/inicio/inicio.component';
import {AcercaComponent } from './components/acerca/acerca.component';
import {ContactoComponent } from './components/contacto/contacto.component';


const nombre: string = "";
const number: number = null;

const appRoutes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'acerca', component: AcercaComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: '**', component: ContactoComponent},
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
