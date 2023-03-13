import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { FormsModule } from '@angular/forms';
import { FilsComponent } from './fils/fils.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    FilsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
