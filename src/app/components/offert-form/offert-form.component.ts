import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OffertService } from '../../shared/services/offert.service';
import { IOffert } from '../../shared/models/offert.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-offert-form',
  templateUrl: './offert-form.component.html',
  styleUrls: ['./offert-form.component.scss']
})
export class OffertFormComponent implements OnInit {
  offertFrm;
  offert: IOffert;
  hasKallare: boolean;
  breakpoint1;
  breakpoint2;

  constructor(private fb: FormBuilder, private offertService: OffertService, private router: Router) {
    this.offertFrm = fb.group({
      namn: ['', Validators.required],
      epost: ['', [Validators.required, Validators.email]],
      fran: ['', Validators.required],
      till: ['', Validators.required],
      datum: [Validators.required],
      avstand: [0, Validators.required],
      bostadenYta: [0, Validators.required],
      kallare: [0],
      piano: [false],
      packhjalp: [false],
      meddelande: [],
      bilar: [0],
      pris: [0]
    });
  }

  ngOnInit() {
    this.breakpoint1 = (window.innerWidth <= 780) ? 12 : 8;
    this.breakpoint2 = (window.innerWidth <= 780) ? 12 : 4;

    this.offertFrm.reset();
  }

  onResize(event) {
    this.breakpoint1 = (window.innerWidth <= 780) ? 12 : 8;
    this.breakpoint2 = (window.innerWidth <= 780) ? 12 : 4;
   }

  createoffert() {
    this.offert = this.offertFrm.value;
    this.offert.bilar = this.antalBilar;
    this.offert.pris = this.pris;

    const isValid = this.offertService.create(this.offert);
    console.log(isValid);
    if ( !isValid ) { return; }

    isValid.subscribe((newoffert: IOffert) => {
      // this.offert = newoffert;
      this.router.navigate(['tack/', newoffert.id]);
    });
  }

  get epost() {
    return this.offertFrm.get('epost');
  }

  get avstand() {
    return this.offertFrm.get('avstand').value;
  }

  get kallare() {
    return this.offertFrm.get('kallare').value;
  }

  get piano() {
    return this.offertFrm.get('piano').value;
  }

  bilar(n: number, v: number) {
    return Array(Math.ceil(n / v));
  }

  get antalBilar() {
    return Math.ceil(this.bostadenYta / 49) + Math.ceil(this.kallare / 25);
  }

  get bostadenYta() {
    const rBoarea = this.offertFrm.get('bostadenYta').value;
    return rBoarea;
  }
  get pris() {
    const rAvstand = this.avstand,
      rBoareaBilarPris = Math.ceil(this.bostadenYta / 49) * 1100,
      rKallareBilarPris = Math.ceil(this.kallare / 25) * 1100,
      rPiano = this.piano ? 5000 : 0;

    let aPris, rMoms;

    if (rAvstand < 50) {
      aPris = rAvstand > 0 ? 1000 + (10 * rAvstand) : 0;
    } else if (( rAvstand >= 50 ) && ( rAvstand < 100 )) {
      aPris = 5000 + ( 8 * rAvstand ) ;
    } else {
      aPris = 10000 + ( 7 * rAvstand );
    }

    const total = aPris + rPiano + rBoareaBilarPris + rKallareBilarPris;
    rMoms = total * 0.25;
    return total + rMoms;
  }

  chkKallare() {
    this.hasKallare = !this.hasKallare;
  }

  getErrorEpostMessage() {
    return this.epost.hasError('required')
      ? `E-post är <strong> krävs </ strong>`
      : this.epost.hasError('email')
        ? 'Ange en giltig e-postadress'
        : '';
  }
}
