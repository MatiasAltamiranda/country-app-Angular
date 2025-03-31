import {Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from "../../components/top-menu/top-menu.component";

@Component({
  selector: 'app-country-loyaut',
  imports: [RouterOutlet, TopMenuComponent],
  templateUrl: './countryLoyaut.component.html',
})
export class CountryLoyautComponent { }
