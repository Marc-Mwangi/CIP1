import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:Quote[]=[
    new Quote ('bleh','blah','blih',0,0)
  ]

  constructor() { }
  
  ngOnInit(): void {
  }

}
