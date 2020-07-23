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

import iso9001_pic_eng from "../certificates/pngs/CERT-10726_9001-2015_2017-2020_eng-1.png";
import iso9001_pic from "../certificates/pngs/CERT-10726_9001-2015_2017-2020-1.png";
import iso14001_pic_eng from "../certificates/pngs/CERT-E2476_14001-2015_2017-2020_eng-1.png";
import iso14001_pic from "../certificates/pngs/CERT-E2476_14001-2015_2017-2020-1.png";
import ohsas18001_pic_eng from "../certificates/pngs/CERT-O-1043_18001-2007_2017-2020_eng-1.png";
import ohsas18001_pic from "../certificates/pngs/CERT-O-1043_18001-2007_2017-2020-1.png";

const certs = [{cert: iso9001, certpic: iso9001_pic},
                {cert: iso9001_eng, certpic: iso9001_pic_eng},
                {cert: iso14001, certpic: iso14001_pic},
                {cert: iso14001_eng, certpic: iso14001_pic_eng},
                {cert: ohsas18001, certpic: ohsas18001_pic},
                {cert: ohsas18001_eng, certpic: ohsas18001_pic_eng}, ]


const Certificates = ({ data }) => {
  return (
    <Layout>
      <SEO title="Сертификати" />
      <div className="mb-88 flex flex-col items-start">
        <div className="w-3/4 md:w-1/2 mt-10 font-hairline">
          <h1 className="text-4xl md:text-5xl text-red-600 font-medium">СЕРТИФИКАТИ</h1>
        </div>
        <div className="w-full flex flex-wrap justify-around pt-4" >
          {certs.map(certinfo =>
              <Certificate cert={certinfo.cert} certpic={certinfo.certpic} />
          )}
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
