import React from 'react';
import Banner from '../../../components/Banner';
import AllChef from '../../../components/AllChef/AllChef';
import CustomerReviews from '../../../components/CustomerReviews/CustomerReviews';
import FollowUs from '../../../components/FollowUs/FollowUs';


const Home = () => {
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