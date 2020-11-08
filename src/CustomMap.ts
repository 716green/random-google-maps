// Instructions to every other class on how they can be an argument to 'addMarker'
// Interface acts as a gatekeeper for props. Does the prop qualify? If so, it can be an argument to the function
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  }
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;
  
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 3.5,
      center: {
        lat: 35,
        lng: -95
      }
    })
  }


  // TS will compare User and Company types and only allow mutual props to be referenced in this function
  addMarker(mappable: Mappable): void {
    // typing 'mappable.' will use intellisense to show props that can be mapped here
    let color = mappable.color
    let url = "http://maps.google.com/mapfiles/ms/icons/";
    url += color + "-dot.png";
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      },
      // adding custom colored markers
      icon: {
        url: url
      }
    })

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      })

      infoWindow.open(this.googleMap, marker)
    })
  }

}
