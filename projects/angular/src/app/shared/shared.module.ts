import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    // vendor
    CommonModule,
    RouterModule,

    //material
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    LoaderComponent,
    //vendor
    CommonModule,
    RouterModule,

    //material
    MatCardModule,
    MatButtonModule,

    //local
  ]
})
export class SharedModule { }
