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

  @HostListener('window:scroll', ['$event'])
  
  onWindowScroll(e) {
    // alert('You scrolled')
    let element = document.querySelector('.navbar-light');
    if (window.pageYOffset > 100) {
      element.classList.add('white-nav');
    } else {
      element.classList.remove('white-nav')
    }

  }

  ngOnInit(): void {
  }

}
