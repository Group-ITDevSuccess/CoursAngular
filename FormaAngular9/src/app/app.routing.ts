import { ColorComponent } from './color/color.component';
import { CvComponent } from './components/cvTech/cv/cv.component';
import { RouterModule, Routes } from "@angular/router";


const APP_ROUTING: Routes = [
  {path: 'cv', component: CvComponent},
  {path: 'color', component: ColorComponent}
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);