import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import iso9001 from "../certificates/pngs/CERT-10726_9001-2015_2017-2020-1.png";
import iso9001_eng from "../certificates/pngs/CERT-10726_9001-2015_2017-2020_eng-1.png";
import iso14001 from "../certificates/pngs/CERT-E2476_14001-2015_2017-2020-1.png";
import iso14001_eng from "../certificates/pngs/CERT-E2476_14001-2015_2017-2020_eng-1.png";
import ohsas18001 from "../certificates/pngs/CERT-O-1043_18001-2007_2017-2020-1.png";
import ohsas18001_eng from "../certificates/pngs/CERT-O-1043_18001-2007_2017-2020_eng-1.png";


const CertCarousel = ({ className, ...props }) => {
    const cert_class = "h-screen w-1000 object-contain";

    return (
        <div> 
            <AliceCarousel mouseTrackingEnabled={true} >
                <img src={iso14001} className={cert_class} />
                <img src={iso14001_eng} className={cert_class} />
                <img src={iso9001} className={cert_class} />
                <img src={iso9001_eng} className={cert_class} />
                <img src={ohsas18001} className={cert_class} />
                <img src={ohsas18001_eng} className={cert_class} />
            </AliceCarousel>
        </div>
    );
};

export default CertCarousel;