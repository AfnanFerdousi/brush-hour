import React from 'react';
import Founder from '../../assets/images/founder.jpeg'

const FoundersWords = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content grid-cols-2 flex-col lg:flex-row">
                <img src={Founder} className="max-w-sm rounded-lg shadow-2xl " alt='founder' />
                <div>
                    <h1 className="text-5xl font-bold text-primary">Founders Words</h1>
                    <p className="py-6 w-90">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div>
    );
};

export default FoundersWords;