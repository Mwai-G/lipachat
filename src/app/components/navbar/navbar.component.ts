import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e): void {
    const el = document.querySelector('.navbar-light');
    if (window.pageYOffset > 100) {
      el.classList.add('white-nav');
    } else {
      el.classList.remove('white-nav')
    }
  }


}
