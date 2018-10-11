import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import { IVolym } from '../../shared/models/volym.model';
import { VolymService } from '../../shared/services/volym.service';


@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.scss']
})


export class VolumeComponent implements OnInit {
  ELEMENT_DATA: IVolym[] = [];
  displayedColumns: string[] = ['id', 'boarea', 'vindsyta', 'antal_bilar', 'avstand', 'pris'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  constructor(private volymService: VolymService) {}

  ngOnInit() {
     this.volymService.getAll()
    .subscribe((response: IVolym[]) => {
      this.ELEMENT_DATA = response;
      this.dataSource.data = this.ELEMENT_DATA;
    });
    this.dataSource.sort = this.sort;
  }
}
