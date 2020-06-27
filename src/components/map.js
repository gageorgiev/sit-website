import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

const ContactsMap = ({ className, ...props }) => {
    return (
            <Map google={props.google}
                zoom={20}
                initialCenter={{
                    lat: 42.136059,
                    lng: 24.737103
                }}
                size={{ height: 500, width: 500 }}
            >
                <Marker
                    title={'ул. Хан Кардам 8'}
                    position={{
                        lat: 42.136059,
                        lng: 24.737103
                    }}
                />
            </Map>
    );
};


export default GoogleApiWrapper({ apiKey: 'AIzaSyBoUyquM_X2JgbZaGpOe5L1AG-buN3q8w0' })(ContactsMap);