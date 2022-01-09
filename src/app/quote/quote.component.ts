import { DeclareComponentTemplateInfo } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QuoteDetailComponent } from '../quote-detail/quote-detail.component';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  
  quote:Quote[]=[
    new Quote ('The universe is monstrously indifferent to the presence of man.','Douglas Sirk','Uwe Boll',0,0),
    new Quote('I think there should be holy war against yoga classes.', 'Lexi Alexander', 'Wim Wenders',0,0),
    new Quote('The world reveals itself to those who travel on foot.','Mike Nichols','Marc Mwangi',0,0),
    
  ]
  i:number;
  toggleDetails(index:number){
    this.quote[index].showDetails = !this.quote[index].showDetails;
  }
  quoteDelete(deleteIt, index){
    if (deleteIt){
      this.quote.splice(index,1);
    }
  }

  constructor() { }
  
  ngOnInit() {
  }

}
