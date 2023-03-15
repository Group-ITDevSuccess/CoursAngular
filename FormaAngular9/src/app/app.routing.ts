import { DetailComponent } from './components/cvTech/detail/detail.component';
import { ColorComponent } from './color/color.component';
import { CvComponent } from './components/cvTech/cv/cv.component';
import { RouterModule, Routes } from "@angular/router";


const APP_ROUTING: Routes = [
  {path: 'cv/:id', component: DetailComponent},
  {path: 'cv', redirectTo:'/', pathMatch: 'full'},
  {path: '', component: CvComponent},
  {path: 'color/:default', component: ColorComponent}
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);