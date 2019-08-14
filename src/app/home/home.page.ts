import { Component, OnInit } from '@angular/core';

declare var initialize;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  ngOnInit() {
    initialize();
  }
}
