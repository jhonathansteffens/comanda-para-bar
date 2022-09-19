import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conclusion-page',
  templateUrl: './conclusion-page.component.html',
  styleUrls: ['./conclusion-page.component.css']
})
export class ConclusionPageComponent implements OnInit {

  success: boolean;
  constructor(private route : ActivatedRoute) {
    this.success = false;
   }

  ngOnInit(): void {
   this.success = this.route.snapshot.params['success'] === 'true' ? true : false;
  }

}
