import React from 'react'
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import FadeIn from 'react-fade-in';

export default function Map({
    places,
    containerStyle,
    defaultCenter={
        lat: 5.6037,
        lng: -0.1870
    }
}) {
    return (
        <FadeIn transitionDuration={2000}>
            <div style={containerStyle} className="mapContainer">
                <GoogleMapReact
                    bootstrapURLKeys={{ 
                        key: "AIzaSyAem1WtYucFJXW71DVMD6LK3g7z2cPZF9w" 
                    }}
                    defaultCenter={defaultCenter}
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
        </FadeIn>
    )
}
