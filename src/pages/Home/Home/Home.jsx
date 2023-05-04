import React, { useContext } from 'react';
import Banner from '../../../components/Banner';
import AllChef from '../../../components/AllChef/AllChef';
import CustomerReviews from '../../../components/CustomerReviews/CustomerReviews';
import FollowUs from '../../../components/FollowUs/FollowUs';
import { AuthContext } from '../../../providers/AuthProvider';
import { ClipLoader } from 'react-spinners';


const Home = () => {

    const {dataLoading, user} = useContext(AuthContext);
    
  if (dataLoading) {
    // return <Loader />
    return (
      <div className="flex justify-center my-20">
        <ClipLoader
          color={"#FFBF00"}
          loading={dataLoading}
          // cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }


    return (
        <div>
            <Banner></Banner>
            <AllChef></AllChef>
            <CustomerReviews></CustomerReviews>
            <FollowUs></FollowUs>
        </div>
    );
};

export default Home;