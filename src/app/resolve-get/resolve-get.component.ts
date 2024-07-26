import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolve-get',
  templateUrl: './resolve-get.component.html',
  styleUrls: ['./resolve-get.component.css']
})
export class ResolveGetComponent implements OnInit {
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.dataService.getOnePosts().subscribe({
      next: (response: any) => {
        console.log(response)

      }
    }
    )
  }
}
