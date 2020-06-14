import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

import MarkerIcon from '../../resources/marker.png';

import './styles.css';

const MapaAplicao = (props) => {

    const position = [props.latitude, props.longitude];

    const greenIcon = L.icon({
        iconUrl: MarkerIcon,
        iconSize:     [55, 55]
    });

    return (

        <Map className="map" center={position} zoom={17} animate={false} zoomControl={false}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={position} icon={greenIcon}/>
        </Map>
    );
}

export default MapaAplicao;