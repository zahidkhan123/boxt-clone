import React from "react";
import priceMatchImage from "../../assets/worcester.avif"; // update this with your actual image path

const PriceMatchSection = () => {
  return (
    <section
      className="py-5"
      style={{
        backgroundColor: "#243344",
        minHeight: "200px",
        padding: "2rem 0",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Boiler Image */}
          <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
            <img
              src={priceMatchImage}
              alt="Boiler"
              className="img-fluid"
              style={{
                maxWidth: "100%",
                height: "auto",
                width: "70%",
                // maxWidth: "300px",
                margin: "0 auto",
              }}
            />
          </div>

          {/* Right: Text Content */}
          <div className="col-12 col-md-6 text-white text-center text-md-start px-4 px-md-5">
            <h3
              className="fw-normal mb-4"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}
            >
              The BOXT Price Match Promise
            </h3>
            <p
              className="mt-3 mb-4"
              style={{
                fontSize: "clamp(0.9rem, 2vw, 1rem)",
                maxWidth: "650px",
                lineHeight: "1.6",
                margin: "0 auto",
              }}
            >
              We enjoy saving you time and money; that's why we regularly review
              our prices. In fact, we guarantee to beat any like-for-like boiler
              installation quote by £50, so you can shop with peace of mind.
            </p>
            <button
              className="btn btn-outline-light px-4 py-2"
              style={{
                borderRadius: "0",
                minWidth: "200px",
                fontSize: "clamp(0.9rem, 2vw, 1rem)",
              }}
            >
              Find out more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceMatchSection;
