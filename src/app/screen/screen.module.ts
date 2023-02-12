import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenRoutingModule } from './screen-routing.module';
import { ScreenComponent } from './screen.component';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    ScreenComponent
  ],
  imports: [
    CommonModule,
    ScreenRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatExpansionModule
  ]
})
export class ScreenModule { }
