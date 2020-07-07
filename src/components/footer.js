import React from "react";
import { Link } from "gatsby";
import cx from "classnames";

const Footer = ({ className, ...props }) => {
  className = cx(
    "w-full px-8 py-4 text-white bg-red-900 flex flex-col md:flex-row justify-between items-start md:items-center manrope",
    className
  );
  return (
    <>
      <div className={className} {...props}>
        <div className="flex-initial text-xl font-semibold">С.И.Т. ООД</div>
        <div>
          <ul className="flex flex-col md:flex-row text-sm -mx-3 font-medium">
            <li className="mx-3"><Link to="/">За нас</Link></li>
            <li className="mx-3"><Link to="/contact">Контакти</Link></li>
            <li className="mx-3">©2019 С.И.Т. ООД</li>
          </ul>
        </div>
      </div>

      <div className="w-full px-8 py-2 text-white text-xs font-light bg-black flex flex-col sm:flex-row justify-between items-start md:items-center">
        <div>
          <strong className="font-bold">Телефон: </strong>
          XXX XXX XXX
          <strong className="ml-3 font-bold">Имейл: </strong>
          xxx@xxx.com
        </div>
        <div>
          <Link to="/" className="hover:underline">
            www.xxx.com
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;

