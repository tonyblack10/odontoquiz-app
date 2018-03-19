import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'app/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { 
    path: 'categories', 
    loadChildren: './categories/categories.module#CategoriesModule', 
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: 'questions',
    loadChildren: './questions/questions.module#QuestionsModule',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    loadChildren: './users/users.module#UsersModule',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}