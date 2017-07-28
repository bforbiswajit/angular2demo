import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//import components
import { AppComponent }  from './app.component'
import { create } from './Biswa_Components/create.component'

//import directives
import {autoGrow} from './Biswa_Directives/auto-grow.directive'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, create, autoGrow],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
