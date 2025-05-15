import React from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const coffees = useLoaderData()
    console.log(coffees);

    return (
        <div>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 my-12'>
                {
                    coffees.map(coffee => <CoffeeCard coffee={coffee} key={coffee._id} />)
                }
            </div>
        </div>
    );
};

export default Home;