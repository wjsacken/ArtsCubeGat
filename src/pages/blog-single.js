import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import BlogDetails from "@/components/blog-details";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";
import JSONData from "@/components/blog.json"


const BlogSinglePage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Blog Details Page">
          <HeaderOne />
          <PageBanner title="Blog Details" name="Blog" />
          <BlogDetails />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};
const JSONbuildtime = () => (
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    <h1>{JSONData.title}</h1>
    <ul>
      {JSONData.content.map((data, index) => {
        return <li key={`content_item_${index}`}>{data.item}</li>
      })}
    </ul>
  </div>
)
export default JSONbuildtime;
//export default BlogSinglePage;
