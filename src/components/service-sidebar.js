import React, { Fragment } from "react";

const ServiceSidebar = () => {
  return (
    <Fragment>
      <aside className="widget categories">
        <h3 className="widget_title">Services</h3>
        <div className="meipaly_categorie_widget">
          <ul>
            <li>
              <a href="/web-design">Web Design</a>
            </li>
            <li>
              <a href="#">Digital Marketing</a>
            </li>
            <li>
              <a href="#">Google Ads</a>
            </li>
            <li>
              <a href="#">Inbound Marketing</a>
            </li>
            <li>
              <a href="#">Sales Services</a>
            </li>
          </ul>
        </div>
      </aside>
      <aside className="widget categories">
        <div className="meipaly_services_help">
          <h4>need help?</h4>
          <p>
            Prefer speaking with a human to filling out a form? call corporate
            office and we will connect you with a team member who can help.
          </p>
          <h2>666 888 000</h2>
        </div>
      </aside>
    </Fragment>
  );
};

export default ServiceSidebar;
