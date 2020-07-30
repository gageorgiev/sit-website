import React from "react";
import { Link } from "gatsby";
import cx from "classnames";

const Footer = ({ className, ...props }) => {
  className = cx(
    "w-full px-8 py-4 text-white bg-black bg-opacity-75 flex flex-col md:flex-row justify-between items-start md:items-center manrope",
    className
  );
  return (
    <>
      <div className={className} {...props}>
        <div className="flex-initial text-xl font-semibold">С.И.Т. ООД</div>
        <div>
          <ul className="flex flex-col md:flex-row text-sm -mx-3 font-medium">
            <li className="mx-3 underline"><Link to="/">За нас</Link></li>
            <li className="mx-3 underline"><Link to="/contact">Контакти</Link></li>
            <li className="mx-3">©2019 С.И.Т. ООД</li>
          </ul>
        </div>
      </div>

      <div className="w-full px-4 py-2 text-white text-xs manrope bg-black bg-opacity-50 flex flex-col items-end">
        <div>
          Уеб дизайн и уеб разработка от <a href="https://www.linkedin.com/in/gabriel-georgiev-b039571b3/" target="_blank" rel="noreferrer" className="underline" >Габриел Георгиев</a>.
          </div>
      </div>
    </>
  );
};

export default Footer;

