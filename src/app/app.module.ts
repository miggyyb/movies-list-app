import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AvengersDetailsComponent } from './avengers-details/avengers-details.component';
import { HomeComponent } from './home/home.component';
import { SpiderVerseComponent } from './spider-verse/spider-verse.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { KnivesoutComponent } from './knivesout/knivesout.component';
import { GotgComponent } from './gotg/gotg.component';
import { TenetComponent } from './tenet/tenet.component';

@NgModule({
  declarations: [
    AppComponent,
    AvengersDetailsComponent,
    HomeComponent,
    SpiderVerseComponent,
    ListMoviesComponent,
    KnivesoutComponent,
    GotgComponent,
    TenetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
