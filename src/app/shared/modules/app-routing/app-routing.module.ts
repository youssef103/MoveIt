import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { OffertFormComponent } from '../../../components/offert-form/offert-form.component';
import { DistanceComponent } from '../../../components/distance/distance.component';
import { OfferterComponent } from '../../../components/offerter/offerter.component';
import { VolumeComponent } from '../../../components/volume/volume.component';
import { NotFoundComponent } from '../../../components/not-found/not-found.component';
import { OffertComponent } from '../../../components/offert/offert.component';

const appRouters: Routes = [
  {
    path: '',
    component: OffertFormComponent
  },
  {
    path: 'volym',
    component: VolumeComponent
  },
  {
    path: 'offert/:id',
    component: OffertComponent
  },
  {
    path: 'offert',
    component: OffertComponent
  },
  {
    path: 'tack/:id',
    component: OffertComponent
  },
  {
    path: 'offerter',
    component: OfferterComponent
  },
  {
    path: 'avstand',
    component: DistanceComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRouters)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
