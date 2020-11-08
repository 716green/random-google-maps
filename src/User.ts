import faker from 'faker'
import { Mappable } from './CustomMap';

// 'export' will export specific variables - imports will be done in curly braces
// 'export default' should nearly never be used in TypeScript - importing default exports won't use curly braces


// Declare that we want TS to ensure this is structured correctly according to the inteface declared after 'impliments'. Will provide better error codes.
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  }
  color: string = 'blue';

  // Objects aren't defined when the class is created so you can not assign values to keys without instantiating the object first
  constructor() {
    let gender: number;
    let rand = Math.random()
    rand < 0.5 ? gender = 0 : gender = 1
    this.name = `${gender ? '👩‍💼' : '👨‍💼'} ${faker.name.firstName(gender)} ${faker.name.lastName(gender)}`
    this.location = {
      lat: parseFloat(faker.address.latitude(48, 35)),
      lng: parseFloat(faker.address.longitude(-80, -125))
    }
    console.log('lat', this.location.lat)
    console.log('lng', this.location.lng)
  }

  markerContent(): string {
    return `<div><h1>${this.name}</h1></div>`
  }

}