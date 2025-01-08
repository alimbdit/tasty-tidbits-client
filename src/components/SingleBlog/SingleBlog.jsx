import React from 'react';

const SingleBlog = ({blog}) => {
    const {blog_id, question, answer} = blog;
    // console.log(blog)
    return (
        <div className='container border border-error/25 rounded-2xl p-8 mb-10 bg-amber-500 bg-opacity-5 dark:bg-opacity-10'>
            <h1 className='font-bold text-red-700 dark:text-red-100 mb-3 text-xl'>{blog_id}. {question}</h1>
            <p className='text-amber-700 dark:text-amber-100 text-lg font-medium mb-2'>
                <span className='font-extrabold text-amber-900 dark:text-amber-300'>Ans: </span>
                {answer}
            </p>
            
        </div>
    );
};

export default SingleBlog;