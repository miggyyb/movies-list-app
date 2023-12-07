import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvengersDetailsComponent } from './avengers-details/avengers-details.component';
import { HomeComponent } from './home/home.component';
import { SpiderVerseComponent } from './spider-verse/spider-verse.component';
import { KnivesoutComponent } from './knivesout/knivesout.component';
import { GotgComponent } from './gotg/gotg.component';
import { TenetComponent } from './tenet/tenet.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'avengers-details',
    component: AvengersDetailsComponent
  },
  {
    path: 'spider-verse',
    component: SpiderVerseComponent
  },
  {
    path: 'knivesout',
    component: KnivesoutComponent
  },
  {
    path: 'gotg',
    component: GotgComponent
  },
  {
    path: 'tenet',
    component: TenetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
