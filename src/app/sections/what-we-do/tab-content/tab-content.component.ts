import { Component, Input, OnInit } from '@angular/core';
import { ITabContent } from '../../../interfaces/tab-content';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnInit {

  @Input() tabContent: ITabContent;
  constructor() { }

  ngOnInit(): void {
  }

}
