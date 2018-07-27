import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';//ph added     this will allow us to access the route parameters
import { Router } from '@angular/router';

import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  items: any;

  //constructor is called when about module loaded
  constructor(private route: ActivatedRoute, private router : Router, private _data: DataService) { //ph added << constructor dependency injection
    this.route.params.subscribe(res => console.log(res.id))//res = response
  }

  ngOnInit() {
    this._data.item.subscribe(res => this.items = res); //ph added
  }

  sendMeHome(){//ph added -> should send home
    this.router.navigate(['']);
  }

}
