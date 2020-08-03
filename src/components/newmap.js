import React from 'react';
import GoogleMapReact from 'google-map-react';
import '../css/marker.css';
import Pin from '../../static/icons/place.svg';

const ContactsMap = ({ className, ...props }) => {
    return (
        <div className="h-72 w-full lg:h-88 lg:w-7/12">
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyBirYN-T7bEIGKdnRsCMh52W-n_T_SW1QY'}}
              defaultCenter={{ lat: 42.136059, lng: 24.737103 }}
              defaultZoom={17}
            >
                <div lat={42.136059} lng={24.737103} >
                    <div class='pin bounce'></div>
                    <div class='pulse'></div>
                </div>
            </GoogleMapReact>
        </div>
    );
};

export default ContactsMap;


