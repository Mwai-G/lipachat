import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IGetStartedCard } from '../../interfaces/get-started-card.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Output() scrollTo = new EventEmitter<string>();

  cardsDetails: IGetStartedCard[] = [
    {
      imageUrl: 'assets/images/business-icon.jpg',
      heading: 'Lipachat for business',
      text: 'Automate your business customer care, sell and market yourself on Whatsapp.',
      link: 'https://api.whatsapp.com/send?phone=254110090747&text=Hi'
    },
    {
      imageUrl: 'assets/images/user-icon.jpg',
      heading: 'Lipachat for individuals',
      text: 'Buy airtime, pay bills and convert bonga points to cash on Whatsapp.',
    }
  ];
  constructor() { }


  ngOnInit(): void {
  }

  scroll() {
    this.scrollTo.emit('about');
  }


}
