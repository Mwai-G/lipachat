import { Component, OnInit } from '@angular/core';
declare var Swiper: any;

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var swiper = new Swiper('.swiper-clients', {
      autoplay: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      speed: 800,
      // spaceBetween: 30,
      slidesPerView: 1,
      breakpoints: {
        1024: {
          slidesPerView: 3
        },
        500: {
          slidesPerView: 3
        },
        400: {
          slidesPerView: 2
        },
        300: {
          slidesPerView: 1
        }
      }
    });
  }

}
