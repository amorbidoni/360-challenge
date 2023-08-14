import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsReportComponent } from './pages/collections-report/collections-report.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: 'collectionsReport', component: CollectionsReportComponent, canActivate: [authGuard] },
  { path:'login', component: LoginComponent },
  { path:'', redirectTo:'/login', pathMatch: 'full'},
  // TODO: crear el componente pagenotfound
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
