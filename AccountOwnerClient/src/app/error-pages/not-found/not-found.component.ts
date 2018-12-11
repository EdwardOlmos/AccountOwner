import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  public notFoundText: string = `404 NOT FOUND!`;

  constructor() { }

  ngOnInit() {
  }

}
