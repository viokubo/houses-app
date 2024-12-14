import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-housing-location 
      *ngFor="let housingLocation of housingLocationList" 
      [housingLocation]="housingLocation">
    </app-housing-location>
  </section>
  `,
  styleUrl: './home.component.css'
}) export class HomeComponent {

  housingLocationList: HousingLocation[] = []
  housingService = inject(HousingService)

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations()
  }
}