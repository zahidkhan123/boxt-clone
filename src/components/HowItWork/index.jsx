import React from "react";
import workBox1 from "../../assets/workBox1.avif";
import workBox2 from "../../assets/workBox2.avif";
import workBox3 from "../../assets/workBox3.avif";
import workBox4 from "../../assets/workBox4.avif";
export const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Discover",
      description:
        "Answer some questions about your home and get a fixed-price install quote in minutes",
      image: workBox1,
    },
    {
      id: 2,
      title: "Choose",
      description:
        "Compare brands, models and sizes to choose the right solution for your home. Pay upfront or in instalments",
      image: workBox2,
    },
    {
      id: 3,
      title: "Install",
      description:
        "Order online by 3pm for next working day installation by a skilled and friendly BOXT accredited engineer",
      image: workBox3,
    },
    {
      id: 4,
      title: "Maintain",
      description:
        "Download the BOXT app to keep track of your installation and view all your important documents",
      image: workBox4,
    },
  ];

  return (
    <div className="container text-center py-5">
      <h2 className="mb-5">How does BOXT work?</h2>

      <div className="position-relative">
        {/* Horizontal line */}
        <div
          className="position-absolute top-50 start-0 w-100"
          style={{ height: "4px", background: "#eee", zIndex: 1 }}
        ></div>

        {/* Steps */}
        <div
          className="row justify-content-between position-relative"
          style={{ zIndex: 2 }}
        >
          {steps.map((step) => (
            <div key={step.id} className="col-6 col-md-3 mb-5">
              <div className="position-relative mb-3">
                <img
                  src={step.image}
                  alt={step.title}
                  className="img-fluid rounded-4"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div
                  className="position-absolute top-0 start-50 translate-middle-x bg-white border border-dark rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "40px",
                    height: "40px",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {step.id}
                </div>
              </div>
              <h5>{step.title}</h5>
              <p className="text-muted small">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Learn more button */}
      <div className="mt-4">
        <button className="btn btn-outline-success px-4 py-2">
          Learn more
        </button>
      </div>
    </div>
  );
};
