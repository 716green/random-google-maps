import faker from 'faker'
import { Mappable } from './CustomMap'

// Declare that we want TS to ensure this is structured correctly according to the inteface declared after 'impliments'. Will provide better error codes.
export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  }
  color: string = 'red';

  constructor() {
    this.companyName = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(faker.address.latitude(48, 35)),
      lng: parseFloat(faker.address.longitude(-80, -125))
    }
  }

  markerContent(): string {
    return `<div><h1>🏦 ${this.companyName}</h1>
    <h3>The ${this.catchPhrase} company</h3></div>`
  }
  
}