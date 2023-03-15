import { DetailComponent } from './components/cvTech/detail/detail.component';
import { ColorComponent } from './color/color.component';
import { CvComponent } from './components/cvTech/cv/cv.component';
import { RouterModule, Routes } from "@angular/router";
import { AddCvComponent } from './components/cvTech/add-cv/add-cv.component';
import { DeleteCvComponent } from './components/cvTech/delete-cv/delete-cv.component';
import { ErrorComponent } from './components/error/error.component';


const APP_ROUTING: Routes = [
  {path: 'cv', children: [
    {path: '', component: CvComponent},
    {path: 'delete/:id', component: DeleteCvComponent},
    {path: 'add', component: AddCvComponent},
    {path: ':id', component: DetailComponent},
  ]},

  // {path: 'cv', redirectTo:'/', pathMatch: 'full'},
  {path: '', component: CvComponent},
  {path: 'color/:default', component: ColorComponent},
  {path: '**', component: ErrorComponent},

];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
