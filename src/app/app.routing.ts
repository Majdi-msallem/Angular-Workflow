import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from 'shared/components/notfound/notfound.component';
import { PageComponent } from './Page/page.component';
import { AuthGuard } from 'shared/guard/auth.guard';
import { LoginGuard } from 'shared/guard/login.guard.spec';
import { VerifyEmailComponent } from './verify-email/verify-email.component'

const routes: Routes =[
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, 
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[LoginGuard] 
    
  },
 
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/admin-layout.module').then(x=>x.AdminLayoutModule),
      canActivate:[AuthGuard]
  }]},
  
  {
    path: 'page',
    component: PageComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./Page/page.module').then(x=>x.PageModule),

  }]},
      {path:'verify',component:VerifyEmailComponent},
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
