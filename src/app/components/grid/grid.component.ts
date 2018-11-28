import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { HandyModel } from './models/handyModel';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnDestroy {
  handys: Observable<HandyModel[]>;

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.handys = this._dataService.getHandys();
  }
  ngOnDestroy() {}

  getImgURL(id: string): string {
    console.log(id);
    return `/assets/grid.component/grid-assets/assets/${id}`;
  }
}
