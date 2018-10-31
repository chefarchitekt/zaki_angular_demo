
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './../data.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  user$: Object;
  userId$: any;

  constructor(private route: ActivatedRoute,  private data: DataService) {
    this.route.params.subscribe(params => this.userId$ = params.id);
  }

  ngOnInit() {
    this.data.getUser(this.userId$).subscribe(
      data => this.user$ = data
    );

  }

}
