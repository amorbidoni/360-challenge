import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsReportComponent } from './collections-report/collections-report.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [  
  { 
    path:'',
    component: MainComponent,
    children:[
      { path: 'collectionsReport', component: CollectionsReportComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
