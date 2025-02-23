import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleBlog from "../../components/SingleBlog/SingleBlog";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ClipLoader } from "react-spinners";
import PDFFile from './FDFFile'
import { PDFDownloadLink } from "@react-pdf/renderer";
import Loader from "../../components/Loader";

const Blog = () => {
  const blogs = useLoaderData();
  const { loading } = useContext(AuthContext);

  if (loading) {
    // return <Loader />
    return (
      <div className="flex justify-center my-20">
        <ClipLoader
          color={"#FFBF00"}
          loading={loading}
          // cssOverride={override}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      // <Loader></Loader>
    );
  }

  return (
    
    <div className="mx-5 lg:mx-10 mb-10 container">
      <div className="text-center">
        <PDFDownloadLink document={<PDFFile/>} fileName="Simple-Question-Answer.pdf">
          
              <button className="btn-black">Download</button>
           
          
        </PDFDownloadLink>
        
      </div>
     
        <h1 className="font-extrabold text-5xl my-8 text-center text-gradient dark:text-gray-100">
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
