import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AnimalsComponent} from './animals/animals.component';
import {AnimalsProvider} from './animals/animals.provider';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AnimalsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
