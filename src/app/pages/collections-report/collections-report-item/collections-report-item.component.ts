import { Component, Input } from '@angular/core';
import { CollectionsReportItemResult } from 'src/app/interfaces/collections-report-result';

@Component({
  selector: '[app-collections-report-item]',
  templateUrl: './collections-report-item.component.html',
  styleUrls: ['./collections-report-item.component.scss']
})
export class CollectionsReportItemComponent {
  @Input() registerItem!:CollectionsReportItemResult

}
