import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'scm-footbar',
  templateUrl: './footbar.component.html',
  styleUrls: ['./footbar.component.css']
})
export class FootbarComponent implements OnInit {
  thisYear = new Date().getFullYear();
  constructor() { }

  ngOnInit() {
  }

}
