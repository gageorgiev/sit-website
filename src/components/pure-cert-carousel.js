import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import iso9001 from "../certificates/pngs/CERT-10726_9001-2015_2017-2020-1.png";
import iso9001_eng from "../certificates/pngs/CERT-10726_9001-2015_2017-2020_eng-1.png";
import iso14001 from "../certificates/pngs/CERT-E2476_14001-2015_2017-2020-1.png";
import iso14001_eng from "../certificates/pngs/CERT-E2476_14001-2015_2017-2020_eng-1.png";
import ohsas18001 from "../certificates/pngs/CERT-O-1043_18001-2007_2017-2020-1.png";
import ohsas18001_eng from "../certificates/pngs/CERT-O-1043_18001-2007_2017-2020_eng-1.png";


const CertCarousel = ({ className, ...props }) => {
    return (
        <CarouselProvider
            naturalSlideHeight={560}
            naturalSlideWidth={400}
            totalSlides={6}
            className="w-full md:w-3/5 lg:w-1/2 mt-8 self-center"
        >
            <div className="mb-8 w-full flex justify-around">
                <Dot slide={0}>
                    <img src={iso14001} className="w-16" />
                </Dot>
                <Dot slide={1}>
                    <img src={iso14001_eng} className="w-16" />
                </Dot>
                <Dot slide={2}>
                    <img src={iso9001} className="w-16" />
                </Dot>
                <Dot slide={3}>
                    <img src={iso9001_eng} className="w-16" />
                </Dot>
                <Dot slide={4}>
                    <img src={ohsas18001} className="w-16" />
                </Dot>
                <Dot slide={5}>
                    <img src={ohsas18001_eng} className="w-16" />
                </Dot>
            </div>

            <Slider>
                <Slide index={0}>
                    <Image src={iso14001} />
                </Slide>
                <Slide index={1}>
                    <Image src={iso14001_eng} />
                </Slide>
                <Slide index={2}>
                    <Image src={iso9001} />
                </Slide>
                <Slide index={3} >
                    <Image src={iso9001_eng} />
                </Slide>
                <Slide index={4} >
                    <Image src={ohsas18001} />
                </Slide>
                <Slide index={5} >
                    <Image src={ohsas18001_eng} />
                </Slide>
            </Slider>
        </CarouselProvider>
    );
};

export default CertCarousel;

/* <ButtonBack className="mr-8">
                    <button class="hover:bg-transparent bg-red-600 hover:text-red-600 font-semibold text-white py-2 px-4 border hover:border-red-500 border-transparent rounded">
                        Предишен
                </button>
                </ButtonBack>
                <ButtonNext >
                    <button class="hover:bg-transparent bg-red-600 hover:text-red-600 font-semibold text-white py-2 px-4 border hover:border-red-500 border-transparent rounded">
                        Следващ
                </button>
                </ButtonNext> */