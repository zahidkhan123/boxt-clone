import React from "react";

export const ItemCard = ({
  category,
  title,
  description,
  buttonText,
  image,
  buttonVariant = "success",
  buttonLink = "#",
}) => {
  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body">
        <div className="row g-0 align-items-center">
          <div className="col-md-8 text-start">
            <p className="text-uppercase fw-bold text-muted small mb-1">
              {category}
            </p>
            <h5 className="fw-bold">{title}</h5>
            <p className="text-muted">{description}</p>
            <a
              href={buttonLink}
              className={`btn btn-${buttonVariant}`}
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
            >
              {buttonText}
            </a>
          </div>
          {image && (
            <div className="col-md-4 text-center">
              <img
                src={image}
                alt="illustration"
                className="img-fluid"
                style={{ maxHeight: "150px", maxWidth: "150px" }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
