import React, { Component } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactsMap from '../components/newmap';
import { Spring, config } from 'react-spring/renderprops';

import CallIcon from '../../static/icons/call.svg';
import EmailIcon from '../../static/icons/email.svg';
import PinIcon from '../../static/icons/pin_drop.svg';

const Contact = () => {
  const [hovering, setHovering] = React.useState(false);

  return (
    <Layout>
      <SEO title="Контакти" />

      <div className="flex flex-wrap mt-10 mb-20">
        <div className="w-full lg:w-5/12 flex flex-col items-start">
          <div className="w-3/4 font-hairline">
            <h1 className="text-4xl md:text-5xl text-red-600 garamond">КОНТАКТИ</h1>
          </div>
          <Spring
            from={{
              opacity: 0,
              marginTop: '2rem'
            }}
            to={{
              transform: `scale(${hovering ? 1.1 : 1})`,
              marginBottom: `${hovering ? '1rem' : '0rem'}`,
                shadow: `${hovering ? '0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)' : '0 15px 35px rgba(0,0,0,0), 0 5px 15px rgba(0,0,0,0)'}`,
                opacity: 1,
                marginTop: '0rem'
            }}
            config={key => (key === 'opacity' ? config.molasses : config.default )}
          >
            {props => <div
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className="w-full lg:w-11/12 mt-10 px-6 py-4 manrope text-base md:text-xl"
              style={{
                boxShadow: props.shadow,
                transform: props.transform,
                marginBottom: props.marginBottom,
                marginTop: props.marginTop,
                opacity: props.opacity
              }}
            >
              <div className="flex flex-row w-full">
                <div className="flex flex-row pb-2">
                <img src={CallIcon} className="justify-center pr-2 w-8" style={{ strokeOpacity: '50%'}}/>
                <p><div className="font-bold">Телефони: </div></p>
                </div>
              </div>
              <div class="mb-4 ml-4 md:ml-12 justify-end">
                <p className="flex flex-row"><div className="font-bold mr-2">Главен инженер:</div>+359 886 588 066</p>
                <p className="flex flex-row"><div className="font-bold mr-2">Офертен отдел:</div>  +359 886 033 650</p>
                <p className="flex flex-row"><div className="font-bold mr-2">Счетоводство:</div>  +359 885 568 658</p>
              </div>
              <div className="flex flex-row w-full pb-2">
                <img src={EmailIcon} className="justify-center pr-2 w-8" />
                <div className="flex flex-row">
                  <div className="font-bold mr-2">Имейл: </div>
                  <div>sit_ltd@mail.bg</div>
                </div>
              </div>
              <div className="flex flex-row w-full">
                <img src={PinIcon} className="justify-center pr-2 w-8" />
                <div className="font-bold mr-2">Адрес: </div>
                <div>ул. Хан Кардам №8, Пловдив</div>
              </div>
            </div>}
          </Spring>
        </div>
        <ContactsMap />
      </div>
      <div className="lg:h-24" />
    </Layout>
  );
};

export default Contact;
