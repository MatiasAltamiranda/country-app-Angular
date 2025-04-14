import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'not-found',
  imports: [],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {

  lotacion = inject(Location);

  goBack(){
    this.lotacion.back()
  }

 }
