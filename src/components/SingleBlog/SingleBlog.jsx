import React from 'react';

const SingleBlog = ({blog}) => {
    const {blog_id, question, answer} = blog;
    console.log(blog)
    return (
        <div className='border border-error/25 rounded-2xl p-8 mb-10 bg-amber-500 bg-opacity-5'>
            <h1 className='font-bold text-red-700 mb-3 text-xl'>{blog_id}. {question}</h1>
            <p className='text-amber-700 text-lg font-medium mb-2'>
                <span className='font-extrabold text-amber-900'>Ans: </span>
                {answer}
            </p>
            
        </div>
    );
};

export default SingleBlog;