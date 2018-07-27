import { Component, OnInit } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';

import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('items', [
      transition('* => *', [
        query(':enter',style({opacity: 0}),{optional: true}),

        query(':enter',stagger('300ms',[
          animate('.6s ease-in',keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
        ]),{optional: true}),

        query(':leave',stagger('300ms',[
          animate('.6s ease-in',keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75px)', offset: 1}),
          ]))
        ]),{optional: true}),
      ])
    ])
  ]
})

export class HomeComponent implements OnInit {

  itemCount: number = 4;

  btnText: string = 'Add item';
  itemListText: string = 'My first list item';
  items = [];//"Item 1", "Item 2", "Item 3"]; itmes now populated from data service

  constructor( private _data: DataService ) { }

  ngOnInit() {
    this._data.item.subscribe(res => this.items = res); //ph added
    this.itemCount = this.items.length;
    this._data.changeItem(this.items);
  }

  addItem(){
    this.items.push(this.itemListText);
    this.itemListText ='';
    this.itemCount = this.items.length;

    this._data.changeItem(this.items);
  }

  removeItem(i){
    this.items.splice(i,1);

    this._data.changeItem(this.items);
  }

}
