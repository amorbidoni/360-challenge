import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div class="spinner">
      <mat-spinner ></mat-spinner>
    </div>
  `,
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
 
}
