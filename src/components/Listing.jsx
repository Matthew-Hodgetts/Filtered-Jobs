import React from 'react';
import './Listing.css';
const Listing = ({ listing }) => {
  return (
    <div className='listing container my-5'>
      <div className='row py-5'>
        <div className='col'>
          <div className='row align-items-center'>
            <div className='col-md-2'>
              <img
                src={listing.logo}
                alt={listing.company}
                className='listing__logo'
              />
            </div>
            <div className='col-md-5'>
              <div className='row align-items-center'>
                <div className='col'>
                  <h5 className='listing__company'>{listing.company}</h5>
                  {listing.new ? (
                    <span className='listing__new'>NEW!</span>
                  ) : (
                    ''
                  )}
                  {listing.featured ? (
                    <span className='listing__featured'>FEATURED</span>
                  ) : (
                    ''
                  )}
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <h5 className='listing__position'>{listing.position}</h5>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <ul className='listing__details'>
                    <li>{listing.postedAt}</li>
                    <li>{listing.contract}</li>
                    <li>{listing.location}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-5'>
              <ul className='listing__tags'>
                <li>{listing.role}</li>
                <li>{listing.level}</li>
                {listing.languages
                  ? listing.languages.map((lang, index) => {
                      return <li key={index}>{lang}</li>;
                    })
                  : null}
                {listing.tools
                  ? listing.tools.map((tool, index) => {
                      return <li key={index}>{tool}</li>;
                    })
                  : null}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
