import React from "react";
import { CustomButton } from "../customButton";

export const ItemCard = ({
  category,
  title,
  description,
  buttonText,
  image,
  buttonVariant = "success",
}) => {
  return (
    <div className="card border-0 h-100" style={{ backgroundColor: "#F5F7F9" }}>
      <div className="card-body">
        <div className="row g-0 align-items-center">
          <div className="col-md-8 text-start">
            <p className="text-uppercase fw-bold text-muted small mb-1">
              {category}
            </p>
            <h5 className="fw-bold mt-3">{title}</h5>
            <p className="text-muted">{description}</p>
            <CustomButton
              backgroundColor={
                buttonVariant === "success" ? "#00A56F" : "#007bff"
              }
              textColor="white"
              text={buttonText}
              onMouseEnter={(e) => {
                e.currentTarget.closest(
                  ".card"
                ).style.backgroundColor = `rgba(${
                  buttonVariant === "success" ? "40, 167, 69" : "0, 123, 255"
                }, 0.1)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.closest(".card").style.backgroundColor = "";
              }}
            />
          </div>
          {image && (
            <div className="col-md-4 text-center">
              <img
                src={image}
                alt="illustration"
                className="img-fluid"
                style={{ maxHeight: "220px", maxWidth: "220px" }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
