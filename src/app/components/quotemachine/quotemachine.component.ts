import { Component, OnInit } from '@angular/core';
export interface randomResponse {
  author: string;
  id: number;
  quote: string;
}

var colors = [
  '#8b0000', '#83ffa4', '#6897bb', '#0099cc', '#3399ff',
  '#ff7f50', '#f0bff4', '#ffab7f', '#fbcf9c', '#f4bfde',
  '#f4d5bf', '#52f8ab', '#f091e7', '#8adcbb', '#16ba78'
];

@Component({
  selector: 'app-quotemachine',
  templateUrl: './quotemachine.component.html',
  styleUrls: ['./quotemachine.component.css']
})
export class QuotemachineComponent implements OnInit {
  data: randomResponse[] = [{ author: 'Wooden Alley ', id: 1, quote: 'Eight Percent of success is showing up.' },
  { author: 'Rain Stefin ', id: 2, quote: 'Healthy Prospective is best Wealthy.' },
  { author: 'Randy Alley ', id: 3, quote: 'Face any solution as a winner.' },
  { author: 'Atul Hygi ', id: 4, quote: 'you sholud respect every one then only you respect by others.' },
  { author: 'Jesica Alley ', id: 5, quote: 'Go and Get ' },
  { author: 'Wooden Slat ', id: 6, quote: 'Their is no suggestions.' }];
  loading: boolean;
  twitter_link: string;
  quoteStatement: any;
  setInterval = setInterval;
  count: any = 0;

  constructor() { }

  ngOnInit() {    
    this.quoteStatement = this.data[this.count];
    this.setIntrvl();
  }

  makeNewQuote(): void{
    this.quoteStatement = this.data[5];
  }

  makeRequest(): void {
    this.loading = true;    
    this.loading = false;    
    if(this.count <= this.data.length){
      this.quoteStatement = this.data[this.count];
      this.count = this.count + 1;      
    }
    else{
      this.quoteStatement = this.data[0];
    }
    
    this.twitter_link = `https://twitter.com/intent/tweet?hashtags=quotes&related=encofreecodecamp&text=${encodeURI(this.data[this.count].quote + ' - ' + this.data[this.count].author)}`;
  }

  setIntrvl() {
    setInterval(() => this.makeRequest(), 10000);
  }

}
