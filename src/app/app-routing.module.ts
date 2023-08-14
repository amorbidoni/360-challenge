import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsReportComponent } from './pages/collections-report/collections-report.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [

  { path:'main', 
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), 
    canActivate: [authGuard]
  },
  { 
    path:'login', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), 
  },
  { path:'', redirectTo:'/login', pathMatch: 'full'},
  // TODO: crear el componente pagenotfound
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
