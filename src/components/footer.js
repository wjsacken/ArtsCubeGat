import React from "react";
import { LogoImage } from "@/data";

const Footer = () => {
  const { light } = LogoImage;
  return (
    <footer className="footer_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6 col-md-5">
            <aside className="widget aboutwidget">
              <a href="/">
                <img src={light} alt="" />
              </a>
              <p>
                We're a business too and understand every dollar matters. Our team loves what we do, we care about your business, and understand your investment.
              </p>
            </aside>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <aside className="widget contact_widgets">
              <h3 className="widget_title">contact</h3>
              <p>
                604 Lee Street, Salisbury, NC
                <br />
                United States of America
              </p>
              <p>
                P: <a href="tel:833-737-8481">833 737 8481</a>
              </p>
              <p>
                E: <a href="mailto:helpme@artscube.biz">helpme@artscube.biz</a>
              </p>
            </aside>
          </div>
          <div className="col-lg-3 col-sm-2 col-md-3">
            <aside className="widget social_widget">
              <h3 className="widget_title">social</h3>
              <ul>
                <li>
                  <a href="https://twitter.com/arts_cube?lang=en">
                    <i className="fa fa-twitter"></i>Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/ArtsCubeMarketing">
                    <i className="fa fa-facebook-square"></i>Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/3807143/admin/">
                    <i className="fa fa-linkedin"></i>LinkedIn
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="copyright">
              © copyright {new Date().getFullYear()} by{" "}
              <a href="https://artscube.biz">Art's Cube</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
