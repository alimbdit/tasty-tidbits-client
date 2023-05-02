import React from 'react';
import {useLoaderData } from "react-router-dom";
import SingleBlog from '../../components/SingleBlog/SingleBlog';

const Blog = () => {
    const blogs = useLoaderData();

    return (
        <div className="mx-5 lg:mx-10 my-16">
      <h1 className="font-extrabold text-5xl my-8 text-center text-gradient">
        Simple Question Answer
      </h1>
      {blogs &&
        blogs.map((blog) => (
          <SingleBlog key={blog.blog_id} blog={blog}></SingleBlog>
        ))}
    </div>
    );
};

export default Blog;