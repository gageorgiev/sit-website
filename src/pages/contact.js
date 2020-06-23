import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import map from "../images/contacts-map.png"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />

      <div className="flex flex-wrap mt-10 mb-20">
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col items-start">
          <div className="w-3/4 md:w-1/2 font-serif font-hairline">
            <h1 className="text-4xl md:text-5xl text-red-600">Контакти</h1>
          </div>
          <div
            className="w-full sm:w-3/4 lg:w-2/3 mt-10 px-6 py-4"
            style={{
              boxShadow:
                "0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)"
            }}
          >
            <p>
              <strong>Телефон: </strong>XXX XXX XXX
          </p>
            <p>
              <strong>Имейл: </strong>xxx@xxx.com
          </p>
            <p>
              <strong>Адрес: </strong>ул. Хан Кардам №8
            </p>
          </div>
        </div>

        <img src={map} className="w-full md:w-1/2 lg:w-2/3"/>
      </div>
    </Layout>
  );
};

export default Contact;
