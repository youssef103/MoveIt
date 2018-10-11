import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

// Customs Module
import { AppRoutingModule } from 'shared/modules/app-routing/app-routing.module';
import { MdComponentsModule } from 'shared/modules/md-components/md-components.module';

// Components
import { AppComponent } from './app.component';
import { MainNavComponent } from 'shared/components/main-nav/main-nav.component';
import { FooterComponent } from 'shared/components/footer/footer.component';
import { DistanceComponent } from 'components/distance/distance.component';
import { NotFoundComponent } from 'components/not-found/not-found.component';
import { OffertFormComponent } from 'components/offert-form/offert-form.component';
import { OffertComponent } from 'components/offert/offert.component';
import { OfferterComponent } from 'components/offerter/offerter.component';
import { VolumeComponent } from 'components/volume/volume.component';

// Services
import { DistanceService } from 'shared/services/distance.service';
import { OffertService } from 'shared/services/offert.service';
import { VolymService } from 'shared/services/volym.service';



@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    FooterComponent,
    OffertFormComponent,
    DistanceComponent,
    OfferterComponent,
    VolumeComponent,
    NotFoundComponent,
    OffertComponent,
  ],
  imports: [
    BrowserModule,
    MdComponentsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DistanceService,
    OffertService,
    VolymService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
