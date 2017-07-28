import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//import components
import { AppComponent }  from './app.component';
import { create } from './Biswa_Components/create.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, create],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
