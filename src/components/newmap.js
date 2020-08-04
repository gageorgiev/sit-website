import React from 'react';
import GoogleMapReact from 'google-map-react';
import '../css/marker.css';
import Pin from '../../static/icons/place.svg';

const contactsmap = ({ classname, ...props }) => {
    return (
        <div classname="h-72 w-full lg:h-88 lg:w-7/12">
            <GoogleMapReact
              bootstrapurlkeys={{ key: 'aizasybiryn-t7beigkdnrscmh52w-n_t_sw1qy'}}
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


