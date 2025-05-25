import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialCoffees = useLoaderData()
    const [coffees, setCoffees] = useState(initialCoffees)
    console.log(initialCoffees);

    return (
        <div>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 my-12'>
                {
                    coffees.map(coffee => <CoffeeCard setCoffees={setCoffees} coffees={coffees} coffee={coffee} key={coffee._id} />)
                }
            </div>
        </div>
    );
};

export default Home;