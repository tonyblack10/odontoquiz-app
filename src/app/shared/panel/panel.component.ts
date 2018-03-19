import { fadeInAnimation } from './../animations/fadeInAnimation';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class PanelComponent implements OnInit {

  @Input() header: string;

  constructor() { }

  ngOnInit() {
  }

}
