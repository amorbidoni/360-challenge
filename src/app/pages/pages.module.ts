import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CollectionsReportComponent } from './collections-report/collections-report.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [CollectionsReportComponent ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    
  ]
})
export class PagesModule { }
