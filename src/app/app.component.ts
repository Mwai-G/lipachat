import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LandingPage';

  @ViewChild('Hero') home;
  @ViewChild('AboutUs') about;
  @ViewChild('Benefits') benefits;
  @ViewChild('Clients') clients;
  @ViewChild('Demo') demo;
  @ViewChild('Footer') contact;


  /** For scroll to section */
  scroll(elName: string): void {
    let el: any;
    switch (elName) {
      case 'home':
        el = this.home;
        break;
      case 'about':
        el = this.about;
        break;
      case 'benefits':
        el = this.benefits;
        break;
      case 'clients':
        el = this.clients;
        break;
      case 'demos':
        el = this.demo;
        break;
      case 'contact':
        el = this.contact;
        break;
      default:
    }
    this.scrollToView(el.nativeElement);
}

  /** For scroll to section */
  scrollToView(el: HTMLElement) {
    el.scrollIntoView();
  }

  
}
