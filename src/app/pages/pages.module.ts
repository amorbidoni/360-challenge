import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CollectionsReportComponent } from './collections-report/collections-report.component';
import { ComponentsModule } from '../components/components.module';
import { CollectionsReportItemComponent } from './collections-report/collections-report-item/collections-report-item.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [CollectionsReportComponent, CollectionsReportItemComponent, MainComponent ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    
  ]
})
export class PagesModule { }
