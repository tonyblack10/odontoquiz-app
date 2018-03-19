import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-infobox',
  templateUrl: './infobox.component.html',
  styleUrls: ['./infobox.component.css']
})
export class InfoboxComponent implements OnInit {

  @Input() bgColor: string;
  @Input() icon: string;
  @Input() text: string;
  @Input() statistic: string | number;

  constructor() { }

  ngOnInit() {
  }

}
