import { Component, OnInit } from '@angular/core';
import {IBenefit } from 'src/app/interfaces/benefit.interface';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {

  benefits: IBenefit[] = [
    {
      image: 'assets/images/save-icon.png',
      name: 'Save On Cost',
      description: 'Using chatbots to is almost 10x cheaper compared to call centers and apps.'
    },
    {
      image: 'assets/images/grow-icon.png',
      name: 'Growth',
      description: 'Customers rarely ignore whatsapp messages making it effective for marketing.'
    },
    {
      image: 'assets/images/intergrate-icon.png',
      name: 'Automated payments',
      description: 'Integrate to MPESA and bank for payments of goods and services.'
    },
    {
      image: 'assets/images/c-support.png',
      name: 'Better Customer Service',
      description: 'Happier customers 😃.'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
