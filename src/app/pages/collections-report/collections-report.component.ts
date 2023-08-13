import { Component, OnInit } from '@angular/core';
import { CollectionsReportItemResult, CollectionsReportResult } from 'src/app/interfaces/collections-report-result';
import { CollectionsReportService } from 'src/app/services/collections-report.service';

@Component({
  selector: 'app-collections-report',
  templateUrl: './collections-report.component.html',
  styleUrls: ['./collections-report.component.scss']
})
export class CollectionsReportComponent implements OnInit {
  collectionsReport!:CollectionsReportResult  
  constructor(private collectionsReportService: CollectionsReportService){}
  registerItems:CollectionsReportItemResult[] = []

  ngOnInit(): void {
    this.getCollectionsReport(`17-10-2022`)
  }
  
  getCollectionsReport(date:string){
    this.collectionsReportService.getCollectionsReport(date).subscribe(res=>{
      this.collectionsReport = res;
      this.registerItems = res.data;
    })
  }
}
