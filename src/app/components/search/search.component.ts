import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output()
  filterTermChange: EventEmitter<string> = new EventEmitter<string>();

  private _filterTerm: string;
  get filterTerm(): string {
    return this._filterTerm;
  }
  set filterTerm( value: string ) {
    this._filterTerm = value;
    this.filterTermChange.emit( this._filterTerm );
  }

  constructor() { }

  ngOnInit() {
  }

}
