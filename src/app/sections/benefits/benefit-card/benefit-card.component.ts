import { Component, Input, OnInit } from '@angular/core';
import { IBenefit } from '../../../interfaces/benefit.interface';

@Component({
  selector: 'app-benefit-card',
  templateUrl: './benefit-card.component.html',
  styleUrls: ['./benefit-card.component.scss']
})
export class BenefitCardComponent implements OnInit {

  @Input() benefit: IBenefit;

  constructor() { }

  ngOnInit(): void {
  }

}
