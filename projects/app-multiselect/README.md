# AppMultiselect

This library is used to select multiple options in dropdown with search .

# Install

```
npm i app-multiselect
```
# Example

 # app.module.ts

 ```
import { AppMultiselectModule } from 'app-multiselect';
 ```
 # app.component.html
 ```
<lib-app-multiselect
 [list]="list"
 [filter_option]="true" filterBy="Value,name"
 (onChanges)="shareCheckedList($event)" 
 (shareIndividualCheckedList)="shareIndividualCheckedList($event)">
</lib-app-multiselect>
 ```
 # app.component.ts

 ```
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

 ```

 # Options
 ```
list-List to be shown in Dropdown
filter_option- 'true'- search field will be enabled. 'false' - search field will be disabled
onChanges()-will give you the update values from the dropdown.
shareIndividualCheckedList()-Methods for checked and unchecked condition.
 ```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
