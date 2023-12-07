import { Component, OnInit, Input} from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-avengers-details',
  templateUrl: './avengers-details.component.html',
  styleUrl: './avengers-details.component.css'
})
export class AvengersDetailsComponent implements OnInit{
  //constructor (public movie: HomeComponent["movies"]) {}
  //@Input() movies:HomeComponent["movies"] = [];
  //@Input() isFav:boolean=false;
  //watched: boolean = false;
  //Watched() {
    //this.isFav = !this.isFav;
  //}
  ngOnInit(): void {
    
  }
}
