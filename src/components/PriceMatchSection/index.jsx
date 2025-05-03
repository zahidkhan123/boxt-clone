import React from "react";
import priceMatchImage from "../../assets/worcester.avif"; // update this with your actual image path

const PriceMatchSection = () => {
  return (
    <section
      className="py-5"
      style={{ backgroundColor: "#243344", height: "800px" }}
    >
      <div className="container h-100">
        <div className="row align-items-center h-100">
          {/* Left: Boiler Image */}
          <div className="col-md-6 text-center mb-4 mb-md-0 position-relative">
            <img
              src={priceMatchImage}
              alt="Boiler"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto", width: "300px" }} // Reduced size for mobile
            />
          </div>

          {/* Right: Text Content */}
          <div className="col-md-6 text-white text-start ps-md-5">
            {" "}
            {/* Added ps-md-5 for left padding on medium screens and up */}
            <h3 className="fw-normal">The BOXT Price Match Promise</h3>
            <p
              className="mt-3"
              style={{
                fontSize: "1rem",
                maxWidth: "650px", // Increased width to allow more space
                lineHeight: "1.5", // Adjusted line height for better text flow
              }}
            >
              We enjoy saving you time and money; that's why we regularly review
              our prices. In fact, we guarantee to beat any like-for-like boiler
              installation quote by £50, so you can shop with peace of mind.
            </p>
            <button
              className="btn btn-outline-light mt-3 px-4 py-2"
              style={{ borderRadius: "0" }}
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
