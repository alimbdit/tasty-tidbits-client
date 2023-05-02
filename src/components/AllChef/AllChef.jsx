import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import SingleChef from '../SingleChef/SingleChef';

const AllChef = () => {

    const {chefData} = useContext(AuthContext)
    console.log(chefData)

    return (
        <div className='container'>
            <h1 className='text-5xl font-bold text-center text-amber-500 uppercase my-10'>Our Chef</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10'>

                {
                    chefData.map(chef => <SingleChef key={chef.id} chef={chef}></SingleChef>)
                }

            </div>
        </div>
    );
};

export default AllChef;