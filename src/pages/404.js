import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

function NotFoundPage() {
  return (
    <>
      <SEO title="404" />
      <Layout>
        <div className="w-3/4 md:w-1/2 mt-10 font-serif font-hairline">
          <h1 className="text-4xl md:text-5xl text-red-600 garamond">404</h1>
        </div>
        <div className="text-xl manrope" >
          <p className="pb-4">Попаднахте на несъществуваща страница.</p>
          <p className="underline"><Link to="/">Обратно към началната страница</Link></p>
        </div> 

        <div className="h-88" />
      </Layout>
    </>
  );
}

export default NotFoundPage;
