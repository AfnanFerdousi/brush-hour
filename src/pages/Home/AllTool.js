import React, { useEffect, useState } from 'react';
import ToolCard from './ToolCard';

const AllTool = () => {
    const [tool, setTool] = useState([]);

    useEffect(() => {
        fetch('https://brush-hour-server-ten.vercel.app/tools/home')
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])
    return (
        <div className='my-10'>
            <div className="divider"></div>
            <h2 className='text-center text-3xl font-bold'>PAINTING TOOLS</h2>
            <div className="divider"></div>
            <div className='container-fluid flex justify-center'>
                <div className=' grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-2'>
                    {
                        tool.map(toolItem => <ToolCard key={toolItem._id} item={toolItem}></ToolCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllTool;