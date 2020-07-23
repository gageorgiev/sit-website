import React from "react";
import cx from "classnames";
import branding from "../images/noun_branding_1885335.svg";
import processing from "../images/noun_The Process_1885341.svg";
import modeling from "../images/noun_3d modeling_1885342.svg";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Parallax, ParallaxLayer } from 'react-spring';
import home from "../images/green-building.jpg";
import Timeline from '../components/timeline';
import builders from '../images/builders.jpg';
import ParallaxSlideshow from '../components/parallax-slideshow';
import ImageSlider from '../components/image-slider';
import PartnerLogo from '../components/partner-logo';

import '../css/fonts.css';



import logo_aeroconcept from '../images/partner-logos/aeroconcept.jpg';
import logo_hus from '../images/partner-logos/hus.jpg';
import logo_iota from '../images/partner-logos/iota.jpg';
import logo_persenk from '../images/partner-logos/persenk.jpg';
import logo_tehnopanel from '../images/partner-logos/tehnopanel.jpg';
import logo_teolino from '../images/partner-logos/teolino.jpg';
import logo_gap from '../images/partner-logos/gap.jpg';

const partnerlogos1 = [{logo: logo_hus, height: '6rem'},
                      {logo: logo_iota, height: '5.8rem'},
                      {logo: logo_gap, height: '6.2rem'},
                      {logo: logo_teolino, height: '4.5rem'}];
const partnerlogos2 =  [{logo: logo_persenk, height: '3.2rem', paddingTop: '1rem'},
                      {logo: logo_tehnopanel, height: '5rem', paddingTop: '0.3rem'}];


const StyledButton = ({ className, children, ...props }) => {
  className = cx(
    "py-2 px-4 bg-indigo-700 hover:bg-indigo-600 text-base text-white font-bold uppercase rounded shadow-md hover:-translate-1",
    className
  );
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

const Service = ({ title, url, children }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-2">
      <Link
        to={url}
        className="text-2xl text-red-700 hover:text-red-600 hover:underline"
      >
        {title}
      </Link>
      <p>{children}</p>
    </div>
  );
};


function Index({ data }) {
  const services = data.services.edges;

  return (
    <>
      <div className="h-indexscreen" >
        <ImageSlider />
      </div>
      <Layout headerClass="relative bg-white">
        <SEO title="За нас" />
        <div
          className="mt-16 mb-20 bg-size-full md:bg-size-screen bg-no-repeat flex flex-col items-right"
        >

          <div className="bg-fixed bg-top bg-cover lg:bg-contain" style={{ backgroundImage: `url(${builders})` }}>
            <div className="mb-20 flex flex-col mt-4 md:mt-16" >
              <p className="mb-2 text-4xl text-gray-800 self-center garamond" >
                ЗА НАС
              </p>

              <div className="flex flex-wrap text-m md:text-l lg:text-xl px-4 md:px-8 lg:px-16 manrope" >
                <img src={branding} className="h-24 mb-2 mx-auto justify-center" />
                <p className="mb-4">
                  Строителна фирма „С.И.Т.” ООД е регистрирана през 1995 г. в Пловдивски окръжен съд по ф. д. № 3550 и пререгистрирано в Агенция по вписванията Търговски регистър
                  със съдружници и управители инж. Стефан Георгиев и Петър Георгиев и от тази дата осъществява строителна дейност. Основната дейност, която е реализирана от създаването
                  до момента е изграждане на промишлени, търговски и жилищни сгради чрез възлагане и собствено строителство с цел продажба.
                </p>
                <img src={processing} className="h-24 mb-2 mx-auto justify-center" />
                <p className="mb-4">
                  Дружество „С.И.Т.” ООД  предлага бързина, сигурност и високо качество на строителство. Този факт се дължи на прецизната и упорита работа на ръководството,
                  инженерно-техническите кадри и високо квалифицираният изпълнителски персонал.
                </p>
                <img src={modeling} className="h-24 mb-2 mx-auto justify-center" />
                <p className="mb-4">
                  При ценообразуването дружеството предлага конкурентни цени в резултат на осигуреността със собствена механизация и  поддържането на добри и коректни бизнес отношения с
                  доставчиците на материали, което е предпоставка за ритмично изпълнение графиците за строителство и срочното им предаване на инвеститорите за експлоатация.
                </p>
              </div>
            </div>

          </div>

        </div>
        <Timeline />
        <div className="mb-20 flex flex-col mt-4 md:mt-16" >
          <p className="mb-4 text-4xl text-gray-800 self-center garamond" >НАШИТЕ ПАРТНЬОРИ</p>
          <div className="flex flex-wrap justify-around" >
            {partnerlogos1.map(logodata =>
              <PartnerLogo logo={logodata.logo} height={logodata.height} paddingTop={''} />
            )}
          </div>
          <div className="flex flex-wrap justify-around" >
            {partnerlogos2.map(logodata =>
              <PartnerLogo logo={logodata.logo} height={logodata.height} paddingTop={logodata.paddingTop} />
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}

export const query = graphql`
  query {
    services: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
          }
          excerpt
        }
      }
    }
  }
`;

export default Index;


