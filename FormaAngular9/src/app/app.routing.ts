import { LoginComponent } from './components/login/login.component';
import { DetailComponent } from './components/cvTech/detail/detail.component';
import { ColorComponent } from './color/color.component';
import { CvComponent } from './components/cvTech/cv/cv.component';
import { RouterModule, Routes } from "@angular/router";
import { AddCvComponent } from './components/cvTech/add-cv/add-cv.component';
import { DeleteCvComponent } from './components/cvTech/delete-cv/delete-cv.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginGuard } from './guard/login.guard';


const APP_ROUTING: Routes = [
  {path: 'cv', children: [
    {path: '', component: CvComponent},
    {path: 'delete/:id', component: DeleteCvComponent, canActivate: [LoginGuard]},
    {path: 'add', component: AddCvComponent, canActivate: [LoginGuard]},
    {path: ':id', component: DetailComponent},
  ]},

  // {path: 'cv', redirectTo:'/', pathMatch: 'full'},
  {path: '', component: CvComponent},
  {path: 'color/:default', component: ColorComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: ErrorComponent},

];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
