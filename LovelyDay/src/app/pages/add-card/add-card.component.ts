import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from '../../services/weather.service';


@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit, OnDestroy {

  temp: number;
  city = 'Rome';
  state: string;
  capitals = [];
  selectedCity;
  cardCity;
  showNote = false;
  followedCM = false;
  sub1;

  constructor(public http: HttpClient, public weather: WeatherService) { }

  ngOnInit() {
  }



ngOnDestroy() {
  this.sub1.unsubscribe();
}
}
