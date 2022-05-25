import React, { useEffect, useState } from 'react';
import ToolCard from '../Home/ToolCard';
import Footer from '../shared/Footer';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://polar-lowlands-05694.herokuapp.com/tools')
        .then(res => res.json())
        .then(data => setTools(data))
    },[])
    return (
        <div>
            <div className="divider"></div>
            <h2 className='text-center text-3xl font-bold'>ALL PAINTING TOOLS</h2>
            <div className="divider"></div>
            <div className='container-fluid flex justify-center'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-2'>
                    {
                        tools.map(toolItem => <ToolCard key={toolItem._id} item={toolItem}></ToolCard>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Tools;