import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 32.85,
    lng: -117.1611
};


function Map() {
    const [ selected, setSelected ] = useState({});
    const [map, setMap] = React.useState(null);

    const onSelect = item => {
        map.panTo(item.location);
        setSelected(item);
    }

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY
    })

    const onLoad = React.useCallback(function callback(map) {
        setMap(map);
      }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, []);

    const locations = [
        {
            name: "Location 1",
            location: {
                lat: 32.86,
                lng: -117.1711
            },
        },
        {
            name: "Location 2",
            location: {
                lat: 32.87,
                lng: -117.1811
            },
        }
    ]

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {
                locations.map(item => {
                    return (
                        <Marker 
                            key={item.name} 
                            position={item.location}
                            onClick={() => onSelect(item)}
                        />
                    )
                })
            }
        </GoogleMap>
    ) : <></>
}

export default Map;