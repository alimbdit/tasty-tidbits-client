import React, { useContext } from "react";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../providers/AuthProvider";

const Contact = () => {

    const handleEmailChange = e => {

    }

    const handleSubmit = event => {
        event.preventDefault();
        
    }

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
    );
  }

  return (
    <div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
          <div className="lg:text-center">
           
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Get in touch with us
            </p>
            <p className="my-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Have a question or comment about our recipes? Interested in
              collaborating with us? Fill out the form below and we'll get back
              to you as soon as possible.
            </p>
            {/* <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">submit</span>
                </button>
              </div>
            </form> */}
            <div className="lg:mx-auto mx-5 lg:w-1/3 px-7 lg:px-12 py-9 border bg-red-100 bg-opacity-25 border-red-400 rounded-xl mb-6">
            <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
            <form onSubmit={handleSubmit} action="">
            <input
              className="input  rounded-2xl placeholder:text-gray-600 border-amber-500 focus:ring-2 focus:ring-amber-200 focus:border-red-500 py-2 px-7 mb-5 w-full"
              type="text"
              name="name"
              placeholder="Your Name"
              
            />
            
            <input
              onChange={handleEmailChange}
              className="input  rounded-2xl placeholder:text-gray-600 border-amber-500 focus:ring-2 focus:ring-amber-200 focus:border-red-500 py-2 px-7 mb-5 w-full"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
             <textarea 
              className="textarea textarea-lg  rounded-2xl placeholder:text-gray-600 border-amber-500 focus:ring-2 focus:ring-amber-200 focus:border-red-500 py-2 px-7  w-full"
              type="text"
              name="message"
              placeholder="Message">
            </textarea >
            
            <input
              className="hover:bg-red-500 bg-amber-500 text-white font-medium  px-5 py-2 text-lg justify-center  rounded-2xl cursor-pointer mt-5 w-full"
              type="submit"
              value="Send"
              
            ></input>

           
          </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
