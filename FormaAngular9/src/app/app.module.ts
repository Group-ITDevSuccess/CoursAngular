import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CvComponent } from './components/cvTech/cv/cv.component';
import { ListCVComponent } from './components/cvTech/list-cv/list-cv.component';
import { ItemCVComponent } from './components/cvTech/item-cv/item-cv.component';
import { DetailsCvComponent } from './components/cvTech/details-cv/details-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListCVComponent,
    ItemCVComponent,
    DetailsCvComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
