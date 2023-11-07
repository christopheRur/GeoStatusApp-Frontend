import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GeoStatComponent } from './components/geo-stat/geo-stat.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    GeoStatComponent
  ],
  imports: [

    BrowserModule,HttpClientModule,FormsModule,
    RouterModule.forRoot([{path:'geo-stat',
    component: GeoStatComponent},

  ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
