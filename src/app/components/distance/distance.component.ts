import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import { IDistance } from 'shared/models/distance.model';
import { DistanceService } from 'shared/services/distance.service';

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.scss']
})
export class DistanceComponent implements OnInit {

  ELEMENT_DATA: IDistance[] = [];
  displayedColumns: string[] = ['id', 'avstand', 'pris'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  constructor(private distanceService: DistanceService) {}

  ngOnInit() {
     this.distanceService.getAll()
    .subscribe((response: IDistance[]) => {
      this.ELEMENT_DATA = response;
      this.dataSource.data = this.ELEMENT_DATA;
    });
    this.dataSource.sort = this.sort;
  }
}
