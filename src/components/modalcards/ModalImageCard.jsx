import boilerPlan from "../../assets/boilerPlan.png";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BsCheckCircleFill } from "react-icons/bs";

export const ModalImageCard = ({
  backgroundColor = "#Fb6058",
  image = boilerPlan,
  title = "Buy a new boiler",
  subtitle = "Get your fixed price today",
  buttonText = "Get started",
  iconColor = "#F08080",
  textColor = "white",
  minHeight = "410px",
  maxWidth = "100%",
  marginTop = "0px",
  smallCard = false,
  check = false,
  backgroundImage = false,
  imageWidth = "70%",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        borderRadius: "8px",
        padding: "20px",
        width: "100%",
        minHeight: minHeight,
        height: "auto",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        maxWidth: maxWidth,
        margin: "0 auto",
        marginTop: marginTop,
        backgroundImage: backgroundImage
          ? `linear-gradient(360deg, rgba(0, 27, 39, 0.71) 20%, rgba(45, 61, 77, 0) 70%), url(${image})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: backgroundImage ? 1 : 1,
        // boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          transition: "opacity 0.3s ease",
          opacity: isHovered ? 0.7 : 1,
        }}
      >
        {!backgroundImage && (
          <img
            src={image}
            alt="Card Image"
            style={{
              width: smallCard ? "60%" : imageWidth,
              height: "auto",
              filter: isHovered ? "blur(5px)" : "none",
              transition: "filter 0.3s ease",
              display: "block",
              margin: "0 auto",
            }}
          />
        )}
        <div
          style={{
            position: "absolute",
            top:
              backgroundImage && smallCard
                ? isHovered
                  ? "70px"
                  : "100px"
                : backgroundImage
                ? isHovered
                  ? "225px"
                  : "290px"
                : "auto",
            // top: backgroundImage
            //   ? isHovered
            //     ? "220px"
            //     : "300px"
            //   : smallCard
            //   ? isHovered
            //     ? "-220px"
            //     : "-204px"
            //   : "auto",
            left: "15px",
            color: textColor,
            transition: "top 0.3s ease, transform 0.3s ease",
            transform: isHovered ? "translateY(-5px)" : "translateY(0)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div style={{ marginBottom: smallCard ? "5px" : "15px" }}>
            <h2
              style={{
                margin: smallCard ? "0 0 12px 0" : "0 0 18px 0",
                fontSize: smallCard ? "1.2em" : "1.5em",
                fontWeight: "bold",
                textAlign: "start",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {title}
              {check && <BsCheckCircleFill color={iconColor} size={20} />}
            </h2>
            <p
              style={{
                fontSize: smallCard ? "0.8em" : "0.9em",
                marginRight: "10px",
                textAlign: "start",
              }}
            >
              {subtitle}
            </p>
          </div>
          <div
            style={{
              fontSize: smallCard ? "1em" : "1.2em",
              fontWeight: "bold",
              marginTop: smallCard ? "0px" : "20px",
              textAlign: "start",
            }}
          >
            {buttonText}
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "15px",
          right: "15px",
          backgroundColor: isHovered ? textColor : "transparent",
          color: isHovered ? iconColor : textColor,
          border: isHovered
            ? `1px solid ${iconColor}`
            : `1px solid ${textColor}`,
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IoIosArrowForward />
      </div>
    </div>
  );
};
