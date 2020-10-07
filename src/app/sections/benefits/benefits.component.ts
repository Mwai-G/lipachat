import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
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
      description: 'Using chatbots to deal with inquiries is almost 10x cheaper than call centers and costs less than developing an application.'
    },
    {
      image: 'assets/images/grow-icon.png',
      name: 'Growth',
      description: 'Customers rarely ignore Whatsapp messages making it effective for marketing.'
    },
    {
      image: 'assets/images/intergrate-icon.png',
      name: 'Automated payments',
      description: 'Integrate to MPESA and banks for payments of goods and services.'
    },
    {
      image: 'assets/images/c-support.png',
      name: 'Better Customer Service',
      description: 'Happier customers 😃.'
    },
  ];


  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      768: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  };

  constructor() { }

  ngOnInit(): void {
  }

}
