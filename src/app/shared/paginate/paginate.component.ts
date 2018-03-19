import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html'
})
export class PaginateComponent implements OnInit {

  numbers: Array<number>;

  @Input() numberOfPages: number;
  @Input() currentPage: number;

  @Output() changePage = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.generateIndexes();
  }

  generateIndexes() {
    if(this.numberOfPages)
      return this.numbers = Array(this.numberOfPages).fill(1).map((x,i)=>i);

    return [];
  }

  nextPage() {
    let next = parseInt(this.currentPage.toString()) +1;
    this.setPage(next);
  }

  setPage(pageNumber: number) {
    if(pageNumber > 0 && pageNumber <= this.numberOfPages && pageNumber !== this.currentPage) {
      this.changePage.emit(pageNumber);
    }
  }

}
