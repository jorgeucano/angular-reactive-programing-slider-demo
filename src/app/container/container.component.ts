import { Component, OnInit } from '@angular/core';
import {SimpsonsAPIService} from '../services/simpsons-api.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  simpsonAPI$: Observable<any>;

  constructor(private simpsonAPI: SimpsonsAPIService) { }

  ngOnInit() {
    this.simpsonAPI$ = this.simpsonAPI.getAPI(50).pipe(
      tap(v => { return v; })
    )
  }

}
