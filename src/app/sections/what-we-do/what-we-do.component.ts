import { Component, OnInit } from '@angular/core';
import { ITabContent } from 'src/app/interfaces/tab-content';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss']
})
export class WhatWeDoComponent implements OnInit {

  tabContent: ITabContent[] = [
    {
      headline: 'Sell your products or services on Whatsapp',
      lineOne: 'We develops chatbot solutions through which your businesses can sell products and services.',
      lineTwo: 'Extend your product and service reach by plug in to Whatsapp’s vast user base.',
      image: 'assets/images/about_img_1.png'
    },
    {
      headline: 'Marketing Support',
      lineOne: 'Take advantage of pro-active messaging chatbots in the #1 messaging channel using our intuitive chatbots.',
      lineTwo: 'Improve customer engagements and get more leads.',
      image: 'assets/images/about_img_2.png'
    },
    {
      headline: 'Customer care services  through Whatsapp',
      lineOne: 'Improve your customer care services by always availing support where your customers are.',
      lineTwo: 'Show your customers that you care.',
      image: 'assets/images/about_img_3.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
