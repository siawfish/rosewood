import React from 'react'
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

export default function Map({
    places,
    containerStyle
}) {
    return (
        <div style={containerStyle} className="mapContainer">
            <GoogleMapReact
                bootstrapURLKeys={{ 
                    key: "AIzaSyAem1WtYucFJXW71DVMD6LK3g7z2cPZF9w" 
                }}
                defaultCenter={{
                    lat: 5.6037,
                    lng: -0.1870
                }}
                yesIWantToUseGoogleMapApiInternals
                defaultZoom={14}
            >
                {
                    places?.map((place, i)=>{
                        return (
                            <Marker 
                                key={i}
                                lat={place.cordinates.lat}
                                lng={place.cordinates.lng}
                                text={place.price}
                            />
                        )
                    })
                }
            </GoogleMapReact>
        </div>
    )
}
