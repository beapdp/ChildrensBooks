import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { InfoComponent } from './info/info.component';
import { GifComponent } from './gif/gif.component';


@NgModule({
  declarations: [
    HomeComponent,
    InfoComponent,
    GifComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
