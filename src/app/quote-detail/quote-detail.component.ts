import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;  
  @Output() deleteIt = new EventEmitter();

  quoteDelete(complete:boolean){
    this.deleteIt.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
