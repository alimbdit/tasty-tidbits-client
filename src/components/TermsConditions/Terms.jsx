import React from "react";

const Terms = () => {
  
  return (
    <div className="modal">
      <div className="modal-box w-11/12 max-w-full ">
        <div className="flex justify-end sticky right-0 top-0">
          <label
            htmlFor="terms-and-conditions"
            className="btn border-0 btn-sm btn-circle bg-red-500 hover:bg-red-600"
          >
            ✕
          </label>
        </div>
        <div className="px-5">
          <h1 className="text-4xl font-bold text-center text-amber-500 dark:text-amber-400 uppercase my-8">
            Terms and Conditions
          </h1>
          <h2 className="text-xl font-medium text-red-500 dark:text-red-400 text-center mb-6">
            Welcome to our food website. By using our website, you agree to
            comply with and be bound by the following terms and conditions of
            use, which together with our privacy policy, govern our relationship
            with you in relation to this website.
          </h2>

          <ul className="px-5 list-decimal mb-20 text-lg text-gray-600 dark:text-gray-200 space-y-1">
            <li>
              The content of the pages of this website is for your general
              information and use only. It is subject to change without notice.
            </li>
            <li>
              This website uses cookies to monitor browsing preferences. If you
              do allow cookies to be used, personal information may be stored by
              us for use by third parties.
            </li>
            <li>
              Neither we nor any third parties provide any warranty or guarantee
              as to the accuracy, timeliness, performance, completeness, or
              suitability of the information and materials found or offered on
              this website for any particular purpose. You acknowledge that such
              information and materials may contain inaccuracies or errors and
              we expressly exclude liability for any such inaccuracies or errors
              to the fullest extent permitted by law.
            </li>
            <li>
              Your use of any information or materials on this website is
              entirely at your own risk, for which we shall not be liable. It
              shall be your own responsibility to ensure that any products,
              services, or information available through this website meet your
              specific requirements.
            </li>
            <li>
              This website contains material which is owned by or licensed to
              us. This material includes, but is not limited to, the design,
              layout, look, appearance, and graphics. Reproduction is prohibited
              other than in accordance with the copyright notice, which forms
              part of these terms and conditions.
            </li>
            <li>
              All trademarks reproduced on this website which are not the
              property of, or licensed to, the operator are acknowledged on the
              website.
            </li>
            <li>
              Unauthorised use of this website may give rise to a claim for
              damages and/or be a criminal offense.
            </li>
            <li>
              From time to time, this website may also include links to other
              websites. These links are provided for your convenience to provide
              further information. They do not signify that we endorse the
              website(s). We have no responsibility for the content of the
              linked website(s).
            </li>
            <li>
              Your use of this website and any dispute arising out of such use
              of the website is subject to the laws of [insert country or
              state].
            </li>
          </ul>
        </div>
        <div className="modal-action">
          <label htmlFor="terms-and-conditions" className="btn-black">
            Close
          </label>
        </div>
      </div>
    </div>
  );
};

export default Terms;
