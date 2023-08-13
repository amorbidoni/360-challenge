import { Component, OnInit } from '@angular/core';
import { INITIAL_DATE_GB } from 'src/app/components/date-picker/date-picker.component';
import { CollectionsReportItemResult, CollectionsReportResult } from 'src/app/interfaces/collections-report-result';
import { CollectionsReportService } from 'src/app/services/collections-report.service';

@Component({
  selector: 'app-collections-report',
  templateUrl: './collections-report.component.html',
  styleUrls: ['./collections-report.component.scss']
})
export class CollectionsReportComponent implements OnInit {
  collectionsReport!:CollectionsReportResult;  
  registerItems:CollectionsReportItemResult[] = [];
  isLoading:boolean = true;
  selectedDate:string = INITIAL_DATE_GB;
  constructor(private collectionsReportService: CollectionsReportService){}

  ngOnInit(): void {
    this.getCollectionsReport(INITIAL_DATE_GB)
  }
  
  getCollectionsReport(date:string){
    this.isLoading = true;
    this.selectedDate = date;
    this.collectionsReportService.getCollectionsReport(date).subscribe(res=>{
      this.collectionsReport = res;
      this.registerItems = res.data;
      this.isLoading = false;
      console.log(this.collectionsReport)
    })
  }
  getSelectedDate(date:string):string{
    return new Date(date).toLocaleDateString('es-ES', {day:"2-digit", month:"long", year:"numeric"});
  }
}
