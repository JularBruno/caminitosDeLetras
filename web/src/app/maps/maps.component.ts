import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  lat: number = -31.405301;
  lng: number = -64.190929;
  zoom: number = 15;

  constructor() { }

  ngOnInit() {
  }

}
