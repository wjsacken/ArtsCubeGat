import React from "react";
import serviceS1 from "@/images/webDesign.jpg";
const ServiceDetailsContent = () => {
  return (
    <div className="serviceArea">
      <img src={serviceS1} alt="" />
      <h2>Web Design Services</h2>
      <p>
      We believe that your website should become your best performing salesperson by
       creating a strategy to attract potential customers, by creating content tailored 
       to address and solve their problems, and by optimizing performance.
      </p>
      <div className="row gaping">
          <h3>Strategy</h3>
          <p>
          Our promise is this: to deliver a website that looks and performs 
          better than your current website in less than 60 days. Through our 
          Growth Driven Design model, we seek to understand your ideal buyer's 
          pain points and help them find the information they need quickly. Once 
          the core pages have been built we identify additional opportunities 
          that align with your business goals and help you reach them.
          </p>
      </div>
      <div className="row gaping">
        <h3>Understanding Your Customer</h3>
        <p>
        Working with business owners, managers, sales, and other members of your team we 
        gain a deep understanding of what keeps your customers up at night and solve their 
        problem. Our teams work together to deliver solutions and to build trust which prompts 
        visitors to take action. No one company can never serve the entire market. Instead, 
        we focus on identifying the smallest viable market that generates the highest profit 
        margins for each of our clients.
        </p>
      </div>
      <div className="row gaping">
        <h3>Optimize</h3>
        <p>
        Once your new website goes live the real work begins. In the digital world, changes 
        happen rapidly with the advancement of technology, search engine algorithms, and 
        consumer interactions on your website. Through continuing our education as professional 
        marketers, analyzing your website traffic, testing specific pages for conversions, 
        and a variety of other tactics we make your website a top performing salesperson.
        </p>
      </div>
      
    </div>
  );
};

export default ServiceDetailsContent;
