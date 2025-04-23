import React from 'react';
import priceMatchImage from '../../assets/worcester.avif'; // update this with your actual image path

const PriceMatchSection = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#243344' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Boiler Image */}
          <div className="col-md-6 text-center mb-4 mb-md-0 position-relative">
            <img
              src={priceMatchImage}
              alt="Boiler"
              className="img-fluid"
              style={{ maxWidth: '350px' }}
            />
            {/* <div
              className="position-absolute text-white fw-bold px-3 py-2"
              style={{
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#FF5A5F',
                fontSize: '1.2rem',
                textAlign: 'center',
                borderRadius: '4px',
              }}
            > */}
              {/* <div style={{ fontSize: '0.8rem' }}>BOXT</div> */}
              {/* <div style={{ fontSize: '1.5rem', lineHeight: '1.2' }}>
                PRICE<br />MATCH<br />PROMISE
              </div> */}
            {/* </div> */}
          </div>

          {/* Right: Text Content */}
          <div className="col-md-6 text-white text-start">
            <h3 className="fw-bold">The BOXT Price Match Promise</h3>
            <p className="mt-3" style={{ fontSize: '1rem', maxWidth: '500px' }}>
              We enjoy saving you time and money; that's why we regularly review our prices. In fact, we
              guarantee to beat any like-for-like boiler installation quote by £50, so you can shop with
              peace of mind.
            </p>
            <button className="btn btn-outline-light mt-3 px-4 py-2 text-start">
              Find out more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceMatchSection;
