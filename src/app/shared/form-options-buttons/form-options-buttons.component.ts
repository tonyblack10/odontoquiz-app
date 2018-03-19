import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-options-buttons',
  templateUrl: './form-options-buttons.component.html'
})
export class FormOptionsButtonsComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() urlCancel: string;

  @Output() save = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {
  }

  saveForm(value) {
    this.save.emit(value);
  }
}
