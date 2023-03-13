import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CvComponent } from './components/cvTech/cv/cv.component';
import { ListCVComponent } from './components/cvTech/list-cv/list-cv.component';
import { ItemCVComponent } from './components/cvTech/item-cv/item-cv.component';
import { DetailsCvComponent } from './components/cvTech/details-cv/details-cv.component';
import { StyleComponent } from './directive/style/style.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListCVComponent,
    ItemCVComponent,
    DetailsCvComponent,
    StyleComponent
  ],
  imports: [
    BrowserModule,
    NgModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
