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
      image: 'assets/images/icons8-money-box-64.png',
      name: 'Save On Cost',
      description: 'Quickly handle customer enquiries and get feedback faster at a cheaper cost.'
    },
    {
      image: 'assets/images/icons8-account-64.png',
      name: 'Growth',
      description: 'Easily engage with a broader customer audience from a single platform and grow your business.'
    },
    {
      image: 'assets/images/icons8-online-support-64.png',
      name: 'Better Customer Service',
      description: 'Provide your customers with easy payments methods on whatsapp.'
    },
    {
      image: 'assets/images/icons8-gears-64.png',
      name: 'Integration',
      description: 'Easy Intergration  to MPESA, banks and internal erp systems.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
