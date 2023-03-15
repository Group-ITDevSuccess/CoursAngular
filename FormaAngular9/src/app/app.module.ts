import { ROUTING } from './app.routing';
import { PremierService } from './components/service/premier.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CvComponent } from './components/cvTech/cv/cv.component';
import { ListCVComponent } from './components/cvTech/list-cv/list-cv.component';
import { ItemCVComponent } from './components/cvTech/item-cv/item-cv.component';
import { DetailsCvComponent } from './components/cvTech/details-cv/details-cv.component';
import { StyleComponent } from './directive/style/style.component';
import { FormsModule } from '@angular/forms';
import { ClassComponent } from './directive/class/class.component';
import { HighlightDirective } from './directive/highlight.directive';
import { RainbowDirective } from './directive/rainbow.directive';
import { DefaultImagePipe } from './components/cvTech/default-image.pipe';
import { EmbaucheComponent } from './components/cvTech/embauche/embauche.component';

import { ColorComponent } from './color/color.component';
import { FilsComponent } from './fils/fils.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterSimulatorComponent } from './router/router-simulator/router-simulator.component';
import { DetailComponent } from './components/cvTech/detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListCVComponent,
    ItemCVComponent,
    DetailsCvComponent,
    StyleComponent,
    ClassComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    EmbaucheComponent,
    ColorComponent,
    FilsComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
