import { ElementRef } from '@angular/core';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() scrollTo = new EventEmitter<string>();

  // for autoclosing nav on small screen
  @ViewChild('nav') nav: ElementRef<HTMLElement>;
  triggerNav = true;

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

  scroll(section: string): void {
    this.scrollTo.emit(section);
    this.closeNav();
  }

  /** Closes the nav-close on someone clicking section link for small screens */
  closeNav(): void {
    if (this.triggerNav) {
      const el: HTMLElement = this.nav.nativeElement;
      el.click();
    }
  }


}
