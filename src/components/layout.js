import React from "react";
import { Link } from "gatsby";
import Menu from "./menu";
import { StaticImage } from "gatsby-plugin-image";

const Layout = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-5">
        <div className="col-span-1 h-full border-r-8 border-dqa">
          <div className="container ">
            <Link to="/">
              <StaticImage
                src="../images/logo.png"
                alt="Darul Quran Aceh"
                placeholder="blurred"
                width={120}
                height={100}
              />
              <h3>DQA Dokumentasi</h3>
            </Link>
            <Menu />
          </div>
        </div>
        <div className="col-span-4">
          <div className="container">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;

export const Head = () => <title>DQA</title>;
