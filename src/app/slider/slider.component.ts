import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {

  @Input() simpsonQuotes$: Observable<any>;
  simpsonQuotes: Array<any>;
  slideNumber: number = 0;
  subscription: Array<Subscription> = [];
  constructor() { }

  ngOnInit() {
    console.log('subscribe');
    this.subscription.push(
      this.simpsonQuotes$.subscribe(
        (response) => {
          this.simpsonQuotes = response;
          this.iterator();
        }
      )
    );
  }

  ngOnDestroy(): void {
    console.log('unsubscribe');
    this.subscription.forEach(s => s.unsubscribe());
  }

  iterator() {
    this.subscription.push(
      interval(5000).subscribe(
        () => {
          this.next();
        }
      )
    );
  }

  prev() {
    if (this.slideNumber === 0) {
      this.slideNumber = 9;
    } else {
      this.slideNumber--;
    }
  }
  next() {
    if (this.slideNumber === 9) {
      this.slideNumber = 0;
    } else {
      this.slideNumber++;
    }
  }

}
