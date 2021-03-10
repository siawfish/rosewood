import React from 'react'
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

export default function Map({
    places
}) {
    return (
        <div className="mapContainer">
            <GoogleMapReact
                bootstrapURLKeys={{ 
                    key: "AIzaSyAem1WtYucFJXW71DVMD6LK3g7z2cPZF9w" 
                }}
                defaultCenter={{
                    lat: 5.6037,
                    lng: -0.1870
                }}
                yesIWantToUseGoogleMapApiInternals
                defaultZoom={11}
            >
                {
                    places?.map(place=>{
                        return (
                            <Marker 
                                lat={place.lat}
                                lng={place.lng}
                                text={place.price}
                            />
                        )
                    })
                }
            </GoogleMapReact>
        </div>
    )
}
