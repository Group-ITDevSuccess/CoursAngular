import { ROUTING } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CvComponent } from './components/cvTech/cv/cv.component';
import { ListCVComponent } from './components/cvTech/list-cv/list-cv.component';
import { ItemCVComponent } from './components/cvTech/item-cv/item-cv.component';
import { LogoutGuard } from './guard/logout.guard';
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
import { AddCvComponent } from './components/cvTech/add-cv/add-cv.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { ObservableComponent } from './components/observable/observable.component';
import { HttpComponent } from './components/http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginInterceptorProvider } from './interceptors/login.interceptor';
import { LoginGuard } from './guard/login.guard';
import { UpdateCvComponent } from './components/cvTech/update-cv/update-cv.component';
import { SearchComponent } from './components/cvTech/search/search.component';


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
    DetailComponent,
    AddCvComponent,
    ErrorComponent,
    LoginComponent,
    ObservableComponent,
    HttpComponent,
    UpdateCvComponent,
    SearchComponent
  ],
  imports: [
  BrowserModule,
    FormsModule,
    HttpClientModule,
    ROUTING
  ],
  providers: [LoginInterceptorProvider, LoginGuard, LogoutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
