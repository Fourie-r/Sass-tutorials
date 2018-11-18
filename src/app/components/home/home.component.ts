import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { mergeMap, tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const source$ = of('Hello');
    const source2$ = of('World');
    const merged$ = source$.pipe(switchMap(val => source2$));

    merged$.subscribe(val => console.log(val));
  }

}
