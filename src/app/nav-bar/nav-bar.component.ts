import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom

})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
