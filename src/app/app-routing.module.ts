import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsReportComponent } from './pages/collections-report/collections-report.component';

const routes: Routes = [
  { path: 'collectionsReport', component: CollectionsReportComponent },
  {path:'', redirectTo:'/collectionsReport', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
