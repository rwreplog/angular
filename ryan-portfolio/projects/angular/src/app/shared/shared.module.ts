import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    // vendor
    CommonModule,
    RouterModule,

    //material
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
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
