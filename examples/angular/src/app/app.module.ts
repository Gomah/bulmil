import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BulmilModule } from '@bulmil/angular/dist';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BulmilModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
