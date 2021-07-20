import { NgModule } from '@angular/core';
import { AppMultiselectComponent } from './app-multiselect.component';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser'




@NgModule({
  declarations: [
    AppMultiselectComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    
  ],
  exports: [
    AppMultiselectComponent
  ]
})
export class AppMultiselectModule { }
