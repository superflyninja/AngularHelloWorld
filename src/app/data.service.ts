import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';//ph added

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private items = new BehaviorSubject<any>(['An initial item', 'Item the second']);//ph added
  item = this.items.asObservable();//ph added

  constructor() { }

  changeItem(item){//ph added
    this.items.next(item);
  }
}
