import React from "react";
import "./BoxSteps.css"; // Optional custom styles if needed
import discoverImg from "../../assets/discover.avif";
import chooseImg from "../../assets/choose.avif";
import installImg from "../../assets/install.avif";
import maintainImg from "../../assets/maintain.avif";
import StepProgressBar from "../StepProgressbar";
const steps = [
  {
    id: 1,
    title: "Discover",
    img: discoverImg,
    description:
      "Answer some questions about your home and get a fixed-price install quote in minutes",
  },
  {
    id: 2,
    title: "Choose",
    img: chooseImg,
    description:
      "Compare brands, models and sizes to choose the right solution for your home. Pay upfront or in instalments",
  },
  {
    id: 3,
    title: "Install",
    img: installImg,
    description:
      "Order online by 3pm for next working day installation by a skilled and friendly BOXT accredited engineer",
  },
  {
    id: 4,
    title: "Maintain",
    img: maintainImg,
    description:
      "Download the BOXT app to keep track of your installation and view all your important documents",
  },
];

export default function BoxSteps() {
  return (
    <div className="container text-center my-5">
      <h2 className="fw-bold mb-4" style={{ color: "#121212" }}>
        How does BOXT work?
      </h2>
      <div className="row justify-content-center">
        {steps.map((step) => (
          <div className="col-md-3 mb-4" key={step.id}>
            <div className="card border-0 h-100">
              <img
                src={step.img}
                alt={step.title}
                className="card-img-top rounded-4"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="d-flex justify-content-center font-size-2">
                <StepProgressBar step={step.id} />
              </div>
              <div className="mt-3">
                <h5 className="fw-bold">{step.title}</h5>
                <p className="text-muted">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button className="btn btn-outline-success px-5 py-3">
          Learn more
        </button>
      </div>
    </div>
  );
}
