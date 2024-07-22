import { Component } from '@angular/core';
import { filter, interval, map, Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstEvoApp';

  randomSubscrip$!: Subscription;
  sequentiallySubscrip$!: Subscription;
  
  randomArray: string[]=[];
  sequentiallyArray: number[]=[];

  enableSequentiallyStopButton = false;
  enableRandomStopButton = false;


  enableSequentiallyFunction(){
    const interval$ = interval(2000);
    this.sequentiallySubscrip$ = interval$.subscribe(
      (value) =>{
        this.sequentiallyArray.push(value);
      })

    this.enableSequentiallyStopButton=true;
  }

  disableSequentiallyFunction(){
    this.sequentiallySubscrip$.unsubscribe();
    this.enableSequentiallyStopButton=false;
  }


  enableRandomFunction(){
    const interval$ = interval(2000);
    this.randomSubscrip$ = interval$.pipe(
      map(() => `Rundom Value:  ${Math.floor(Math.random()*1000)}`)
    ).subscribe((value) =>{
      this.randomArray.push(value);
    })

    this.enableRandomStopButton=true;

  }

  disableRandomFunction(){
    this.randomSubscrip$.unsubscribe();
    this.enableRandomStopButton=false;

  }


  
}
