import React, { useEffect, useState } from "react";
import store from 'store';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import {useTranslation} from "react-i18next";

import './mapblock.scss';
import place from '../../../assets/components/Wrapper/Map/place.svg';
import call from '../../../assets/components/Wrapper/Map/call.svg';

const Maps  = ({google, city}) => {
    const {t} = useTranslation();
    const mapStyles = {
    position: 'relative',
    width: '100%',
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1146px'
    };

    const 
        mapDniproCoords = {
            lat: 48.4553018208205,
            lng: 35.0400262051654
        },
        mapZaporijjaCoords = {
            lat: 47.847555,
            lng: 35.127795
        },
        markerDniproCoords = {
            lat: 48.455181, 
            lng: 35.040081
        },
        markerZaporijjaCoords = {
            lat: 47.847555, 
            lng: 35.127795
        }
    ;


    const cityInfo = store.get('24rolls').customOptions.city;
    let mapCoordsDefault;
    let markerCoordsDefault;
    if ( cityInfo === 'Dnipro' ) {
        mapCoordsDefault = { ...mapDniproCoords };
        markerCoordsDefault = { ...markerDniproCoords };
    } else {
        mapCoordsDefault = { ...mapZaporijjaCoords };
        markerCoordsDefault = { ...markerZaporijjaCoords };
    }

    const [ mapCoords, setMapCoords ] = useState(mapCoordsDefault);
    const [ markerCoords, setMarkerCoords ] = useState(markerCoordsDefault);

    useEffect(() => {
        if (city === 1) {
            setMapCoords(mapDniproCoords);
            setMarkerCoords(markerDniproCoords);
        } else if (city === 2) {
            setMapCoords(mapZaporijjaCoords);
            setMarkerCoords(markerZaporijjaCoords);
        }
    }, [city]);

    return (
        <div className="bottom_map">
            <p>
                {t('components.map.title')}
            </p>
            <div className="mapBox">
                <Map
                    google={google}
                    zoom={15}
                    style={mapStyles}
                    center={mapCoords}
                    >
                    <Marker position={markerCoords} />
                </Map>
                <div className={'map-absolut'}>
                    <h1>
                        {t('components.map.contact.title')}
                    </h1>
                    <div className={'map-absolut_center'}>
                        <span>
                        <img src={place} alt=""/>
                            {t('components.map.contact.city')}
                    </span>
                        <span>
                        <img src={call} alt=""/>
                        068 719 24 24
                    </span>
                        <span>
                        <img src={call} alt=""/>
                        050 719 24 24
                    </span>
                    </div>
                    <button>
                        <a href="#">{t('button.backCall')}</a>
                    </button>
                </div>
            </div>
        </div>
    );
}

  export default GoogleApiWrapper({
    apiKey: "AIzaSyAA-A6WgLwedZhWlR0cXXndfDZL8phjY14",
  })(Maps);