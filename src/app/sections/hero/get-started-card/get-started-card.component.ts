import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started-card',
  templateUrl: './get-started-card.component.html',
  styleUrls: ['./get-started-card.component.scss']
})
export class GetStartedCardComponent implements OnInit {

  @Input() details: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.details)
  }

}
