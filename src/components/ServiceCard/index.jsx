import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CustomButton } from "../customButton";

export const ServiceCard = ({
  title,
  description,
  image,
  button1Text,
  button2Text,
  buttonTextColor,
  buttonColor,
  backgroundColor,
  cardHeadingColor,
  cardDesColor,
  cardHeading,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOutlineHovered, setIsOutlineHovered] = useState(false);
  const [isOutlineClicked, setIsOutlineClicked] = useState(false);

  const getHoverBackgroundColor = () => {
    if (backgroundColor === "#Fb6058") {
      return "#F08080"; // Green color for first card
    } else if (backgroundColor === "#F5F7F9") {
      return "#E6F3F7"; // Light blue for second card
    }
    return backgroundColor;
  };
  const getHoverButtonBackgroundColor = () => {
    if (buttonColor === "#00A56F") {
      return "#04b078"; // Green color for first card
    } else if (backgroundColor === "white") {
      return "#E6F3F7"; // Light blue for second card
    }
    return buttonColor;
  };

  return (
    <div
      className="card shadow-sm border-0 h-100 mt-5"
      style={{
        backgroundColor: isHovered
          ? getHoverBackgroundColor()
          : backgroundColor,
        margin: "auto",
        // minHeight: "70vh",
        height: "auto",
        padding: "0px 10px",
        transition: "background-color 0.3s ease",
      }}
    >
      <img
        src={image}
        alt="card visual"
        className="card-img-top mx-auto mb-4"
        style={{
          // width: "100%",
          // height: "300px",
          objectFit: "contain",
          // maxWidth: "350px",
          aspectRatio: "2/1",
          marginTop: "20px",
        }}
      />
      <div className="card-body d-flex flex-column text-start justify-content-end">
        <p className="card-text fw-bold" style={{ color: cardHeadingColor }}>
          {cardHeading}
        </p>
        <h5
          className="card-title fw-bold fs-3"
          style={{ color: cardHeadingColor }}
        >
          {title}
        </h5>
        <p className="card-text fs-5" style={{ color: cardDesColor }}>
          {description}
        </p>

        <div className="d-flex flex-wrap justify-content-start gap-2 mt-auto pb-4">
          {button1Text && (
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <CustomButton
                backgroundColor={
                  isHovered ? getHoverButtonBackgroundColor() : buttonColor
                }
                textColor={buttonTextColor}
                text={button1Text}
              />
            </div>
          )}
          {button2Text && (
            <div
              onClick={() => setIsOutlineClicked(!isOutlineClicked)}
              onMouseEnter={() => setIsOutlineHovered(true)}
              onMouseLeave={() => setIsOutlineHovered(false)}
            >
              <CustomButton
                backgroundColor={isOutlineHovered ? "#FFFFFF" : buttonColor}
                textColor={buttonTextColor}
                text={button2Text}
                outline={true}
                outlineColor={buttonColor}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
