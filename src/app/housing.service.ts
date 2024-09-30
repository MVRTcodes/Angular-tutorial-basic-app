import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
      const data = await fetch(this.url);
      return (await data.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}?id=${id}`);
    // console.log(await data.json());
    const json = await data.json() ?? {};
    return json[id];
  }

  submitApplication(firstName: string, lastName: string,  email: string){
    console.log(firstName, lastName, email);
  }
}
