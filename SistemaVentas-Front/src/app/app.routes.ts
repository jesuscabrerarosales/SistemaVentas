import { Routes } from '@angular/router';
import { IndexComponent } from './modules/Home/index/index.component';
import { IndexComponentAdmin } from './modules/Admin/index/index.component';
import { LoginComponent } from './modules/Admin/login/login.component';

export const routes: Routes = [
  {
    path:"", component:IndexComponent
  },
  {
    path:"inicio", component:IndexComponent
  },
  {
    path:"admin", component:LoginComponent
  },
  {
    path:"admin-panel", component:IndexComponentAdmin
  }
];
