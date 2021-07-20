import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'lib-app-multiselect',
  template: `
  <div>
  <h3>Multi select dropdown</h3>
  <div >
     

   
<button  class="dropbtn">
<span *ngIf="checkedList.length<=0">Selected Values:</span>
  <span *ngIf="checkedList.length>0">{{checkedList.join(', ')}}</span>
</button>
      <div id="myDropdown" class="dropdown-content">
      <input type="text" placeholder="Search.. "  class="search" #query id="query" (keyup)="filter_search(query.value)">
      <i class="fas fa-search font"></i>
      <div class="lab-container">
   
    <label   class="lab" *ngFor="let a of filteredlist">
              <input type="checkbox" [(ngModel)]="a.checked" 
                  (change)="getSelectedValue(a.checked,a.name)" />
              <span>{{a.name}}</span>
          </label>
          </div>
  </div>
  </div>
</div>
  `,
  styles: [
    `
    .dropbtn {
      background-color: #04AA6D;
      color: white;
      padding: 16px;
      font-size: 16px;
      border: none;
      cursor: pointer;
      position:relative;
      top:22pc;
    }
    
    /* Dropdown button on hover & focus */
    .dropbtn:hover, .dropbtn:focus {
      background-color: #3e8e41;
    }
    .font 
    {
      right: 27px;
      position: relative;
    }
    
    .lab-container
    {
      height:15pc;
      overflow-x:scroll;
    }
#query {
  box-sizing: border-box;
 
  background-position: 14px 12px;
  background-repeat: no-repeat;
  font-size: 16px;
  padding: 14px 20px 12px 45px;
  border: none;
  border-bottom: 1px solid #ddd;
}
#query:focus {outline: 3px solid #ddd;}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
 
  position: absolute;
  background-color: #f6f6f6;
  min-width: 230px;
 
  border: 1px solid #ddd;
  z-index: 1;
}
.dropdown-content .lab {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content .lab:hover {background-color: #f1f1f1}


`
  ]
})
export class AppMultiselectComponent implements OnInit {

  @Input() list: any[];
  @Input() filter_option: any;
  filteredlist: any[];
  @Input() filterBy: any
  @Output() onChanges = new EventEmitter();
  @Output() shareIndividualCheckedList = new EventEmitter();
  showsearch: boolean = false
  temp: any = [];
  checkedList: any[];
  currentSelected!: {};

  constructor() {
    this.list = [];
    this.filteredlist = []
    this.checkedList = [];
  }
  ngOnInit() {
    this.filteredlist = this.list;
    if (this.filter_option == true) {
      this.showsearch = true;
    }
    else {
      this.showsearch = false;
    }
  }
  getSelectedValue(status: Boolean, value: String) {
    if (status) {
      this.checkedList.push(value);
    } else {
      var index = this.checkedList.indexOf(value);
      this.checkedList.splice(index, 1);
    }

    this.currentSelected = { checked: status, name: value };

    //share checked list
    this.shareCheckedlist();

    //share individual selected item
    this.shareIndividualStatus();
  }
  shareCheckedlist() {
    this.onChanges.emit(this.checkedList);
  }
  shareIndividualStatus() {
    this.shareIndividualCheckedList.emit(this.currentSelected);
  }
  filter_search(val: any) {
    this.temp = [];
    switch (this.filterBy) {
      case 'name':
        this.filteredlist = (val) ? this.list.filter(p => p.name.toLowerCase().includes(val.toLowerCase())) :
          this.list;
        break;

      case 'Value':
        this.filteredlist = (val) ? this.list.filter(p => p.Value.toLowerCase().includes(val.toLowerCase())) :
          this.list;
        break;


      case 'name,Value':
      case 'Value,name':

        if (val) {

          this.filteredlist = [];
          this.list.filter(obj => {


            if (obj.Value.toLowerCase().includes(val.toLowerCase()) || obj.name.toLowerCase().includes(val.toLowerCase())) {
              obj.name = obj.name.toLowerCase();
              //  obj.Value=obj.value.toLowerCase();
              this.temp.push(obj)
              this.filteredlist = this.temp
            

            }


          })
        }

        else {
          this.filteredlist = this.list;
        }

        break;
      default:
        alert("enter Correct values in FilterBy");


    }



  }

}
