import { Injectable } from '@angular/core';
import { ResponseInt } from './response-int';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  testData: ResponseInt[];

  constructor() { 
    this.testData=[
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
      },
      {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
      },
    ]
  }

}
