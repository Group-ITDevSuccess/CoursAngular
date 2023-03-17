import { LoginComponent } from './components/login/login.component';
import { DetailComponent } from './components/cvTech/detail/detail.component';
import { ColorComponent } from './color/color.component';
import { CvComponent } from './components/cvTech/cv/cv.component';
import { RouterModule, Routes } from "@angular/router";
import { AddCvComponent } from './components/cvTech/add-cv/add-cv.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginGuard } from './guard/login.guard';
import { LogoutGuard } from './guard/logout.guard';
import { UpdateCvComponent } from './components/cvTech/update-cv/update-cv.component';


const APP_ROUTING: Routes = [
  {path: 'cv', children: [
    {path: '', component: CvComponent},
    {path: 'add', component: AddCvComponent, canActivate: [LoginGuard]},
    {path: 'updateCv/:id', component: UpdateCvComponent},
    {path: ':id', component: DetailComponent},
  ]},

  // {path: 'cv', redirectTo:'/', pathMatch: 'full'},
  {path: '', component: CvComponent},
  {path: 'color/:default', component: ColorComponent},
  {path: 'login', component: LoginComponent, canActivate: [LogoutGuard]},
  {path: '**', component: ErrorComponent},

];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
