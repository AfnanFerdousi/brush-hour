import React from 'react';
import {Link} from 'react-router-dom'

const Banner = () => {
  return (
    <div className="hero h-screen" style={{ backgroundImage: `url("https://media.istockphoto.com/photos/art-equipment-picture-id538478165?b=1&k=20&m=538478165&s=170667a&w=0&h=dy84moCB_n0ah2c63aMYzocyDSuS50S9VRtt39-ZUjA=")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <Link to='/blogs' className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;