import { Component, OnInit } from '@angular/core';
declare var Swiper: any;

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var swiper = new Swiper('.swiper-demo', {
      slidesPerView: 1,
      // autoplay: true,
      loop: true,
      speed: 800,
      spacebetween: 10,
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    let myIframe = document.getElementsByTagName('iframe')[0].contentWindow;
    console.log(myIframe.document)
  }

}
