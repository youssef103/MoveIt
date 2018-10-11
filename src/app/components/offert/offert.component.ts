import { Component, OnInit } from '@angular/core';
import { OffertService } from '../../shared/services/offert.service';
import { IOffert } from '../../shared/models/offert.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offert',
  templateUrl: './offert.component.html',
  styleUrls: ['./offert.component.scss']
})
export class OffertComponent implements OnInit {
  offert: IOffert;
  breakpoint1;
  breakpoint2;

  constructor(
    private route: ActivatedRoute,
    private offertService: OffertService
  ) {}

  ngOnInit() {
    this.breakpoint1 = (window.innerWidth <= 780) ? 12 : 8;
    this.breakpoint2 = (window.innerWidth <= 780) ? 12 : 4;

    this.route.paramMap.subscribe(params => {
      const offerid = +params.get('id');

      this.offertService
        .getSingel(offerid)
        .subscribe((response: IOffert) => (this.offert = response));
    });
  }

  bilar(n: number, v: number) {
    return Array(Math.ceil(n / v));
  }

  onResize(event) {
    this.breakpoint1 = (window.innerWidth <= 780) ? 12 : 8;
    this.breakpoint2 = (window.innerWidth <= 780) ? 12 : 4;
   }
}
