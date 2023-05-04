import React from 'react';
import Banner from '../../../components/Banner';
import AllChef from '../../../components/AllChef/AllChef';
import CustomerReviews from '../../../components/CustomerReviews/CustomerReviews';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllChef></AllChef>
            <CustomerReviews></CustomerReviews>
        </div>
    );
};

export default Home;