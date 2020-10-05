import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Output() scrollTo = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  scroll(section: string) {
    this.scrollTo.emit(section);
  }
}
