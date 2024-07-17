import { Component } from '@angular/core';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstEvoApp';
  isCollapsed = false;
  switchIndicator(): void {
    this.isCollapsed = !this.isCollapsed;
    if(this.isCollapsed){
      Notify.info('Collapsed');
    }
    else {
      Notify.info('Not Collapsed')
    }
  }
}
