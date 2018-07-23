import { Component, OnInit } from '@angular/core';
import { Marker } from '../../classes/marker.class';

@Component({
  selector: 'mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

    markers: Marker[] = [];
    lat = 25.668095;
    lng = -100.345549;

    constructor() {
        const marker = new Marker(25.668095, -100.345549);
        this.markers.push(marker);
        this.markers.push(new Marker(25.684425, -100.339176));
    }

    ngOnInit() {
    }


}
