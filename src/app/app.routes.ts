import { Routes } from '@angular/router';
import {StartComponent} from "./start/start.component";
import {JocComponent} from "./joc/joc.component";
import {FinalEneritzLangoyoComponent} from "./final-eneritz-langoyo/final-eneritz-langoyo.component";

export const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'joc', component: JocComponent },
  { path: 'gameover-langoyo', component: FinalEneritzLangoyoComponent },
];
