import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const ServiceCard = ({
  title,
  description,
  image,
  button1Text,
  button2Text,
  showButtons = true,
}) => {
  return (
    <div
      className="card p-3 shadow-sm border-0 h-100"
      style={{
        backgroundColor: showButtons ? "#e8f5e9" : "#e3f2fd",
        margin: "auto",
        minHeight: "100vh",
        height: "auto",
      }}
    >
      <img
        src={image}
        alt="card visual"
        className="card-img-top mx-auto mb-4"
        style={{
          width: "100%",
          height: "300px",
          objectFit: "contain",
          maxWidth: "350px",
        }}
      />
      {/* test */}
      <div className="card-body d-flex flex-column text-start">
        <h5 className="card-title fw-bold fs-3">{title}</h5>
        <p className="card-text text-muted flex-grow-1 fs-5">{description}</p>
        {showButtons && (
          <div className="d-flex flex-wrap justify-content-start gap-2">
            {button1Text && (
              <button className="btn btn-success btn-lg">{button1Text}</button>
            )}
            {button2Text && (
              <button className="btn btn-outline-success btn-lg">
                {button2Text}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
