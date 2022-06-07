import React from "react";
import serviceS1 from "@/images/webDesign.jpg";
const ServiceDetailsContent = () => {
  return (
    <div className="serviceArea">
      <img src={serviceS1} alt="" />
      <h2>Digital Marketing Services</h2>
      <p>
        Our team helps companies - just like yours - start your marketing engine and generate more sales-qualified leads through two programs: 1) Marketing Starter, and, 2) Sales Starter.
      </p>
      <hr></hr>
      <p>
      Digital marketing is a big subject and covers an array of topics from search engine optimization to social selling. Then, trying to align your marketing efforts with your sales process can be an even bigger task.
      </p>
      <div className="row gaping">
          <h3>Digital Marketing Starter</h3>
          <p>
          Our Marketing Starter package is designed for business owners who don't have time to worry about all the details: they just need a team to help them kick-start their marketing efforts. We have a team of dedicated, in-house marketing professionals who work with business owners just like you who share similar goals:
          </p>
          <ul>
            <li>A need to increase web presence</li>
            <li>Convert website visitors into leads</li>
            <li>Work within a budget</li>
            <li>And we offer month to month contracts</li>
          </ul>
          <p>The Marketing Starter package includes an inbound strategy, buyer persona development, content strategy, sales & marketing alignment, and monthly reporting to ensure complete transparency.</p>
      </div>
      <div className="row gaping">
        <h3>Sales Starter</h3>
        <p>
        Now that leads are converting on your website, what’s next? A dedicated account manager will assist you through the process of setting up your CRM, align with your marketing message, and develop reporting to manage your sales team more efficiently.  
        </p>
      </div>
      
      
    </div>
  );
};

export default ServiceDetailsContent;
