import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleBlog from "../../components/SingleBlog/SingleBlog";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ClipLoader } from "react-spinners";
import PDFFile from './FDFFile'
import { Page, Text, Image, Document, StyleSheet, PDFDownloadLink } from "@react-pdf/renderer";

const Blog = () => {
  // const blogs = useLoaderData();
  const { blogs, loading } = useContext(AuthContext);

  if (loading) {
    // return <Loader />
    return (
      <div className="flex justify-center my-20">
        <ClipLoader
          color={"#FFBF00"}
          loading={loading}
          // cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    
    <div className="mx-5 lg:mx-10 mb-10 container">
      <div className="text-center">
        <PDFDownloadLink document={<PDFFile/>} filename="FORM">
          
              <button className="btn-black">Download</button>
           
          
        </PDFDownloadLink>
        
      </div>
     
        <h1 className="font-extrabold text-5xl my-8 text-center text-gradient">
          Simple Question Answer
        </h1>
        <div>
          {blogs &&
            blogs.map((blog) => (
              <SingleBlog key={blog.blog_id} blog={blog}></SingleBlog>
            ))}
        </div>
      
    </div>
  );
};

export default Blog;
