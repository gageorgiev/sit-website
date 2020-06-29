import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

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

const TestimonialsNew = ({ data }) => {
  return (
    <Layout>
      <SEO title="Testimonials" />
      <div className="mb-24 flex flex-col items-start">
        <div className="w-3/4 md:w-1/2 mt-10 font-serif font-hairline">
          <h1 className="text-4xl md:text-5xl text-red-600">Сертификати</h1>
        </div>
        <div className="w-full flex justify-around" >
            <a href={iso9001} target="_blank" ><img src={iso9001_pic} className="h-48"/></a>
            <a href={iso9001_eng} target="_blank" ><img src={iso9001_pic_eng} className="h-48"/></a>
            <a href={iso14001} target="_blank" ><img src={iso14001_pic} className="h-48"/></a>
            <a href={iso14001_eng} target="_blank" ><img src={iso14001_pic_eng} className="h-48"/></a>
            <a href={ohsas18001} target="_blank" ><img src={ohsas18001_pic} className="h-48"/></a>
            <a href={ohsas18001_eng} target="_blank" ><img src={ohsas18001_pic_eng} className="h-48"/></a>
        </div>
      </div>
    </Layout>
  );
};

export default TestimonialsNew;

/*
<div className="w-full mt-32 flex flex-row justify-between">
  <ul className="ml-10 list-disc" >
    <li><a className="underline" href={iso9001} target="_blank"><strong>ISO 9001:2015</strong></a> <a className="underline" href={iso9001_eng} target="_blank">(английска версия)</a></li>
    <li><a className="underline" href={iso14001} target="_blank"><strong>ISO 14001:2015</strong></a> <a className="underline" href={iso14001_eng} target="_blank">(английска версия)</a></li>
    <li><a className="underline" href={ohsas18001} target="_blank"><strong>OHSAS 18001:2007</strong></a> <a className="underline" href={ohsas18001_eng} target="_blank">(английска версия)</a></li>
  </ul>
</div> */
