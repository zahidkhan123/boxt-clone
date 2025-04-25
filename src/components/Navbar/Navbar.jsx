import React, { useState } from "react";
import "./TopbarNav.css";
import boilers from "../../assets/boilers.png";
import heatPumps from "../../assets/heatPump.png";
import solar from "../../assets/solarBattery.png";
import ac from "../../assets/airConditionar.png";
import evCharger from "../../assets/evChargers.png";
import boilerPlan from "../../assets/boilerPlan.png";
import boxtCar from "../../assets/boxtCar.png";
import cardBoiler from "../../assets/cardBoiler.png";
import financeOption from "../../assets/financeOption.svg";

const TopbarNav = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeButton, setActiveButton] = useState("boilers"); // Track active button
  const [isHovering, setIsHovering] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <>
      <div className="topbar px-5 py-2 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-5">
          <span className="brand text-danger fs-1">B O X T</span>

          <button
            className="btn btn-dark rounded-pill px-4 py-3 fs-6"
            onClick={handleModalToggle}
          >
            Get a fixed price <span className="ms-1">&#9662;</span>
          </button>

          <button className="btn btn-link text-dark fs-6 dropdown-toggle px-0">
            Advice & FAQs
          </button>

          <button className="btn btn-link text-dark fs-6 dropdown-toggle px-0">
            About BOXT
          </button>
        </div>

        <button className="btn rounded-pill px-4 py-2 help-btn d-flex align-items-center gap-2">
          <span className="text-dark">Help</span>
          <span className="text-dark fs-5">❓</span>
        </button>
      </div>

      {showModal && (
        <div className="custom-modal-backdrop" onClick={handleModalToggle}>
          <div
            className="d-flex gap-4 justify-content-center"
            style={{ marginTop: "2rem" }}
          >
            <button
              style={{
                width: "240px",
                backgroundColor:
                  activeButton === "boilers" ? "#fff" : "#e6e6e6",
              }}
              className="btn d-flex align-items-center"
              onClick={(e) => {
                e.stopPropagation();
                handleButtonClick("boilers");
              }}
            >
              <img
                src={boilers}
                alt="Boiler"
                className="me-2"
                style={{ width: "78px", height: "50px" }}
              />
              Boilers
              {activeButton === "boilers" && (
                <span className="position-absolute top-100 start-50 translate-middle-x">
                  ▼
                </span>
              )}
            </button>

            <button
              style={{
                width: "240px",
                backgroundColor:
                  activeButton === "heatpumps" ? "#fff" : "#e6e6e6",
              }}
              className="btn d-flex align-items-center"
              onClick={(e) => {
                e.stopPropagation();
                handleButtonClick("heatpumps");
              }}
            >
              <img
                src={heatPumps}
                alt="Heat Pump"
                className="me-2"
                style={{ width: "78px", height: "50px" }}
              />
              Heat Pumps
              {activeButton === "heatpumps" && (
                <span className="position-absolute top-100 start-50 translate-middle-x">
                  ▼
                </span>
              )}
            </button>

            <button
              style={{
                width: "240px",
                backgroundColor: activeButton === "solar" ? "#fff" : "#e6e6e6",
              }}
              className="btn d-flex align-items-center"
              onClick={(e) => {
                e.stopPropagation();
                handleButtonClick("solar");
              }}
            >
              <img
                src={solar}
                alt="Solar"
                className="me-2"
                style={{ width: "78px", height: "50px" }}
              />
              Solar & Battery
              {activeButton === "solar" && (
                <span className="position-absolute top-100 start-50 translate-middle-x">
                  ▼
                </span>
              )}
            </button>

            <button
              style={{
                width: "240px",
                backgroundColor: activeButton === "ac" ? "#fff" : "#e6e6e6",
              }}
              className="btn d-flex align-items-center"
              onClick={(e) => {
                e.stopPropagation();
                handleButtonClick("ac");
              }}
            >
              <img
                src={ac}
                alt="AC"
                className="me-2"
                style={{ width: "78px", height: "50px" }}
              />
              Air Conditioning
              {activeButton === "ac" && (
                <span className="position-absolute top-100 start-50 translate-middle-x">
                  ▼
                </span>
              )}
            </button>

            <button
              style={{
                width: "240px",
                backgroundColor:
                  activeButton === "evcharger" ? "#fff" : "#e6e6e6",
              }}
              className="btn d-flex align-items-center"
              onClick={(e) => {
                e.stopPropagation();
                handleButtonClick("evcharger");
              }}
            >
              <img
                src={evCharger}
                alt="EV Charger"
                className="me-2"
                style={{ width: "78px", height: "50px" }}
              />
              EV Chargers
              {activeButton === "evcharger" && (
                <span className="position-absolute top-100 start-50 translate-middle-x">
                  ▼
                </span>
              )}
            </button>
          </div>
          <div className="d-flex gap-4 justify-content-center mt-5">
            <div
              style={{
                backgroundColor: "#Fb6058",
                borderRadius: "8px",
                padding: "20px",
                width: "300px",
                position: "relative",
                overflow: "hidden",
                height: "400px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.querySelector("img").style.filter = "blur(5px)";
                e.currentTarget.querySelector("img").style.opacity = "0.5";
                e.currentTarget.querySelector(".hover-text").style.opacity =
                  "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.querySelector("img").style.filter = "none";
                e.currentTarget.querySelector("img").style.opacity = "1";
                e.currentTarget.querySelector(".hover-text").style.opacity =
                  "0";
              }}
            >
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <img
                  src={boilerPlan}
                  alt="Boiler"
                  style={{
                    width: "100%",
                    height: "auto",
                    transition: "filter 0.3s ease, opacity 0.3s ease",
                  }}
                />
                <div
                  className="hover-text"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: "white",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  Get Started
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    color: "white",
                  }}
                >
                  Buy a new boiler
                  <p style={{ marginBottom: "10px" }}>
                    Get your fixed price today
                  </p>
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "15px",
                    right: "15px",
                    backgroundColor: "white",
                    color: "#F08080",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  &gt;
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#F1ffb0",
                borderRadius: "8px",
                padding: "20px",
                width: "300px",
                position: "relative",
                overflow: "hidden",
                height: "400px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.querySelector("img").style.filter = "blur(5px)";
                e.currentTarget.querySelector("img").style.opacity = "0.5";
                e.currentTarget.querySelector(".hover-text").style.opacity =
                  "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.querySelector("img").style.filter = "none";
                e.currentTarget.querySelector("img").style.opacity = "1";
                e.currentTarget.querySelector(".hover-text").style.opacity =
                  "0";
              }}
            >
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <img
                  src={boxtCar}
                  alt="Boiler"
                  style={{
                    width: "100%",
                    height: "auto",
                    transition: "filter 0.3s ease, opacity 0.3s ease",
                  }}
                />
                <div
                  className="hover-text"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: "white",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  Get Started
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    color: "white",
                  }}
                >
                  Buy a new car
                  <p style={{ marginBottom: "10px" }}>
                    Get your fixed price today
                  </p>
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "15px",
                    right: "15px",
                    backgroundColor: "white",
                    color: "#F08080",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  &gt;
                </div>
              </div>
            </div>

            <div>
              <div
                style={{
                  backgroundColor: "#e4f5ef",
                  borderRadius: "8px",
                  padding: "20px",
                  width: "300px",
                  position: "relative",
                  overflow: "hidden",
                  height: "190px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector("img").style.filter =
                    "blur(5px)";
                  e.currentTarget.querySelector("img").style.opacity = "0.5";
                  e.currentTarget.querySelector(".hover-text").style.opacity =
                    "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector("img").style.filter = "none";
                  e.currentTarget.querySelector("img").style.opacity = "1";
                  e.currentTarget.querySelector(".hover-text").style.opacity =
                    "0";
                }}
              >
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <img
                    src={boxtCar}
                    alt="Boiler"
                    style={{
                      width: "100%",
                      height: "auto",
                      transition: "filter 0.3s ease, opacity 0.3s ease",
                    }}
                  />
                  <div
                    className="hover-text"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      textAlign: "center",
                      color: "white",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    Get Started
                  </div>
                  <div
                    style={{
                      marginTop: "20px",
                      color: "white",
                    }}
                  >
                    Buy a new car
                    <p style={{ marginBottom: "10px" }}>
                      Get your fixed price today
                    </p>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "15px",
                      right: "15px",
                      backgroundColor: "white",
                      color: "#F08080",
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    &gt;
                  </div>
                </div>
              </div>{" "}
              <div
                style={{
                  backgroundColor: "#e6f1f8",
                  borderRadius: "8px",
                  padding: "20px",
                  width: "300px",
                  position: "relative",
                  overflow: "hidden",
                  height: "190px",
                  marginTop: "18px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector("img").style.filter =
                    "blur(5px)";
                  e.currentTarget.querySelector("img").style.opacity = "0.5";
                  e.currentTarget.querySelector(".hover-text").style.opacity =
                    "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector("img").style.filter = "none";
                  e.currentTarget.querySelector("img").style.opacity = "1";
                  e.currentTarget.querySelector(".hover-text").style.opacity =
                    "0";
                }}
              >
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <img
                    src={boxtCar}
                    alt="Boiler"
                    style={{
                      width: "100%",
                      height: "auto",
                      transition: "filter 0.3s ease, opacity 0.3s ease",
                    }}
                  />
                  <div
                    className="hover-text"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      textAlign: "center",
                      color: "white",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    Get Started
                  </div>
                  <div
                    style={{
                      marginTop: "20px",
                      color: "white",
                    }}
                  >
                    Buy a new car
                    <p style={{ marginBottom: "10px" }}>
                      Get your fixed price today
                    </p>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "15px",
                      right: "15px",
                      backgroundColor: "white",
                      color: "#F08080",
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    &gt;
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div
                style={{
                  backgroundColor: "#e6f1f8",
                  borderRadius: "8px",
                  padding: "20px",
                  width: "300px",
                  position: "relative",
                  overflow: "hidden",
                  height: "190px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector("img").style.filter =
                    "blur(5px)";
                  e.currentTarget.querySelector("img").style.opacity = "0.5";
                  e.currentTarget.querySelector(".hover-text").style.opacity =
                    "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector("img").style.filter = "none";
                  e.currentTarget.querySelector("img").style.opacity = "1";
                  e.currentTarget.querySelector(".hover-text").style.opacity =
                    "0";
                }}
              >
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <img
                    src={boxtCar}
                    alt="Boiler"
                    style={{
                      width: "100%",
                      height: "auto",
                      transition: "filter 0.3s ease, opacity 0.3s ease",
                    }}
                  />
                  <div
                    className="hover-text"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      textAlign: "center",
                      color: "white",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    Get Started
                  </div>
                  <div
                    style={{
                      marginTop: "20px",
                      color: "white",
                    }}
                  >
                    Buy a new car
                    <p style={{ marginBottom: "10px" }}>
                      Get your fixed price today
                    </p>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "15px",
                      right: "15px",
                      backgroundColor: "white",
                      color: "#F08080",
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    &gt;
                  </div>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#e6f1f8",
                  borderRadius: "8px",
                  padding: "20px",
                  width: "300px",
                  position: "relative",
                  overflow: "hidden",
                  height: "190px",
                  marginTop: "18px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector("img").style.filter =
                    "blur(5px)";
                  e.currentTarget.querySelector("img").style.opacity = "0.5";
                  e.currentTarget.querySelector(".hover-text").style.opacity =
                    "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector("img").style.filter = "none";
                  e.currentTarget.querySelector("img").style.opacity = "1";
                  e.currentTarget.querySelector(".hover-text").style.opacity =
                    "0";
                }}
              >
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <img
                    src={boxtCar}
                    alt="Boiler"
                    style={{
                      width: "100%",
                      height: "auto",
                      transition: "filter 0.3s ease, opacity 0.3s ease",
                    }}
                  />
                  <div
                    className="hover-text"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      textAlign: "center",
                      color: "white",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    Get Started
                  </div>
                  <div
                    style={{
                      marginTop: "20px",
                      color: "white",
                    }}
                  >
                    Buy a new car
                    <p style={{ marginBottom: "10px" }}>
                      Get your fixed price today
                    </p>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "15px",
                      right: "15px",
                      backgroundColor: "white",
                      color: "#F08080",
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    &gt;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopbarNav;
