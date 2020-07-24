import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Certificate from '../components/certificate';

import iso9001 from "../certificates/CERT-10726_9001-2015_2017-2020.pdf";
import iso9001_eng from "../certificates/CERT-10726_9001-2015_2017-2020_eng.pdf";
import iso14001 from "../certificates/CERT-E2476_14001-2015_2017-2020.pdf";
import iso14001_eng from "../certificates/CERT-E2476_14001-2015_2017-2020_eng.pdf";
import ohsas18001 from "../certificates/CERT-O-1043_18001-2007_2017-2020.pdf";
import ohsas18001_eng from "../certificates/CERT-O-1043_18001-2007_2017-2020_eng.pdf";
import kamara from "../certificates/udostoverenie-kamara.pdf";

import iso9001_pic_eng from "../certificates/pngs/iso9001-eng.jpg";
import iso9001_pic from "../certificates/pngs/iso9001.jpg";
import iso14001_pic_eng from "../certificates/pngs/iso14001-eng.jpg";
import iso14001_pic from "../certificates/pngs/iso14001.jpg";
import ohsas18001_pic_eng from "../certificates/pngs/ohsas-eng.jpg";
import ohsas18001_pic from "../certificates/pngs/ohsas.jpg";
import kamara_pic from "../certificates/pngs/kamara.jpg";

const certs1 = [{cert: iso9001, certpic: iso9001_pic, name: 'ISO 9001:2015'},
                {cert: iso9001_eng, certpic: iso9001_pic_eng, name: 'ISO 9001:2015 (english version)'},
                {cert: iso14001, certpic: iso14001_pic, name: 'ISO 14001:2015'},
                {cert: iso14001_eng, certpic: iso14001_pic_eng, name: 'ISO 14001:2015 (english version)'}];
const certs2 = [{cert: ohsas18001, certpic: ohsas18001_pic, name: 'OHSAS 18001:2007'},
                {cert: ohsas18001_eng, certpic: ohsas18001_pic_eng, name: 'OHSAS 18001:2007 (english version)'},
                {cert: kamara, certpic: kamara_pic, name: 'Удостоверение от Камарата на Строителите в България'}];


const Certificates = ({ data }) => {
  return (
    <Layout>
      <SEO title="Сертификати" />
      <div className="mb-88 flex flex-col items-start">
        <div className="w-3/4 md:w-1/2 mt-10 font-hairline">
          <h1 className="text-4xl md:text-5xl text-red-600 garamond">СЕРТИФИКАТИ</h1>
        </div>
        <div className="w-5/6 self-center">
        <div className="w-full flex flex-wrap justify-around pt-4" >
          {certs1.map(certinfo =>
              <Certificate cert={certinfo.cert} certpic={certinfo.certpic} name={certinfo.name} />
          )}
        </div>
        <div className="w-full flex flex-wrap justify-around pt-4" >
          {certs2.map(certinfo =>
              <Certificate cert={certinfo.cert} certpic={certinfo.certpic} name={certinfo.name} />
          )}
        </div>
        </div>
      </div>
    </Layout>
  );
};

export default Certificates;

/*
<div className="w-full mt-32 flex flex-row justify-between">
  <ul className="ml-10 list-disc" >
    <li><a className="underline" href={iso9001} target="_blank"><strong>ISO 9001:2015</strong></a> <a className="underline" href={iso9001_eng} target="_blank">(английска версия)</a></li>
    <li><a className="underline" href={iso14001} target="_blank"><strong>ISO 14001:2015</strong></a> <a className="underline" href={iso14001_eng} target="_blank">(английска версия)</a></li>
    <li><a className="underline" href={ohsas18001} target="_blank"><strong>OHSAS 18001:2007</strong></a> <a className="underline" href={ohsas18001_eng} target="_blank">(английска версия)</a></li>
  </ul>
</div> */
