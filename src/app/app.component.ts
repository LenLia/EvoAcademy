import { Component, ComponentRef, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FactoryComponent } from './factory/factory.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'FirstEvoApp';
  @ViewChild('dynamicComp', {read: ViewContainerRef})
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<FactoryComponent>

  addComponent(){
    this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(FactoryComponent)
  }

  deleteComponent(){
    this.viewRef.clear();
  }
}
