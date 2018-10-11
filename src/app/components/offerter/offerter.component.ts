import { Component, OnInit } from '@angular/core';
import { OffertService } from '../../shared/services/offert.service';
import { IOffert } from '../../shared/models/offert.model';

@Component({
  selector: 'app-offerter',
  templateUrl: './offerter.component.html',
  styleUrls: ['./offerter.component.scss']
})
export class OfferterComponent implements OnInit {
  offerter: IOffert[] = [];

  constructor(private offertService: OffertService) { }

  ngOnInit() {
    this.offertService.getAll()
      .subscribe((response: IOffert[]) => this.offerter = response);
  }

  updateOffert(offert: IOffert) {
    this.offertService.update(offert)
      .subscribe(updatedOrder => console.log(updatedOrder));
  }

  deleteOffert(offert: IOffert) {
    this.offertService.delete(offert.id)
      .subscribe(() => {
        const index = this.offerter.indexOf(offert);
        this.offerter.splice(index, 1);
    });
  }
}
