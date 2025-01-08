import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import pageError from '../../public/page-error.json'

const ErrorPage = () => {
    const { error, status } = useRouteError()
    // console.log(error)
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
      <Lottie className=" lg:w-2/5" animationData={pageError} loop={true} />
        <div className='max-w-md text-center'>
          <h2 className='mb-5 font-extrabold text-9xl text-gray-600'>
            <span className='sr-only'>Error</span> {status || 404}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-semibold btn-default'
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
    );
};

export default ErrorPage;