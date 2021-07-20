import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Multiselect-Dropdown-project';
  list:any;
  constructor()
  {
    this.list = 
      [
        {name:'India',checked : false,Value:'IN'},
        {name:'US',checked : false,Value:'USA'},
        {name:'China',checked : false,Value:'CHN'},
        {name :'France',checked : false,Value:'FRCE',},
        {name :'Germany',checked : false,Value:'GR'},
        {name :'Colombia',checked : false,Value:'COL'},
        {name :'Brazil',checked : false,Value:'BZ'}
      ]

       

  }
  shareCheckedList(item:any[]){
    console.log(item);
  }
  shareIndividualCheckedList(item:{}){
    console.log(item);
  }
}
