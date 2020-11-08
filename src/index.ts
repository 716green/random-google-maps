import { User } from './User';
import { Company } from './Company'
import { CustomMap } from './CustomMap';

const user = new User
const company = new Company
let customMap = new CustomMap('map')

customMap.addMarker(user)
customMap.addMarker(company) 