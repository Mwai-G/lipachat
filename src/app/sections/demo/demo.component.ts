import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
declare var Swiper: any;

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const swiper = new Swiper('.swiper-demo', {
      slidesPerView: 1,
      loop: true,
      speed: 800,
      spacebetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

  }
}
