import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started-card',
  templateUrl: './get-started-card.component.html',
  styleUrls: ['./get-started-card.component.scss']
})
export class GetStartedCardComponent implements OnInit {

  @Input() details: any;
  @Output() scrollTo = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  scroll() {
    this.scrollTo.emit('about');
  }

}
