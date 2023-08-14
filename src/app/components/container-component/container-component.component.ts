import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container-component',
  templateUrl: './container-component.component.html',
  styleUrls: ['./container-component.component.scss']
})
export class ContainerComponentComponent {
  @Input() title:string = '';
  @Input() isOpen:boolean = true;
  @Input() hasMinimizeButton:boolean =true;
  @Input() scrollContainer:boolean = true;
  toggleIsOpen(){
    this.isOpen = !this.isOpen;
  }

}
