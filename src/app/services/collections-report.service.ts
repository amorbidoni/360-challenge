import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { CollectionsReportResult } from '../interfaces/collections-report-result';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { environment } from 'src/environments/environments';



@Injectable({
  providedIn: 'root'
})
export class CollectionsReportService {

  constructor( private http: HttpClient,
    private messageService: MessageService ) { }
    private baseUrl = environment.apiUrl
  
   private log(message: string) {
    this.messageService.add(`CollectionsReportService: ${message}`);
  }
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 
      'Authorization': `Bearer NjQwNDMxNGI1YzU0YjllYmVhYjJiZDdmY2E5Y2EyMDg5ZDVlODFmNzRmMDc1OGJmMDY2OTY0NzlhNGJiZWQwNA` 
    })
  };
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** GET Collections Report */
  getCollectionsReport(date:string): Observable<CollectionsReportResult> {
    let _url:string = `${this.baseUrl}/report/collection/${date}`
    return this.http.get<CollectionsReportResult>(_url, this.httpOptions).pipe(
      catchError(this.handleError<CollectionsReportResult>('getCollectionsReport'))
    );
  }
}
