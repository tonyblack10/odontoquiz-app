import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-error-message',
  templateUrl: './input-error-message.component.html'
})
export class InputErrorMessageComponent implements OnInit {

  @Input() errorMessage: string;

  constructor() { }

  ngOnInit() {
  }

}
