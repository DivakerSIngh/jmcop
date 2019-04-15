import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 29.135060;
  lng: number = 78.268870;
  constructor() { }

  ngOnInit() {
  }

}
