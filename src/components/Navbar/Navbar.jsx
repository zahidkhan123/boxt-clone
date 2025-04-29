import React, { useState } from "react";
import "./TopbarNav.css";
import boilers from "../../assets/boilers.png";
import heatPumps from "../../assets/heatPump.png";
import solar from "../../assets/solarBattery.png";
import ac from "../../assets/airConditionar.png";
import evCharger from "../../assets/evChargers.png";
import boxtCar from "../../assets/boxtCar.png";
import financeOption from "../../assets/financeOption.svg";
import serviceImage from "../../assets/serviceImage.avif";
import { ModalCardStanderd } from "../modalcards/ModalCardStanderd";
import bolderNav from "../../assets/boiler_nav.avif";
import modalAc from "../../assets/modalAc.png";
import hybridPump from "../../assets/hybridHeatpump.png";
import solarBattry from "../../assets/solar&battry.png";
import video from "../../assets/boxtvideo.mp4";
import { FaCheckCircle } from "react-icons/fa";
import battrystorage from "../../assets/battrystorage.avif";
import howitwork from "../../assets/howitwork.svg";
import thunder from "../../assets/thunder.svg";
import { IoIosArrowDown } from "react-icons/io";

const TopbarNav = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeButton, setActiveButton] = useState("boilers");

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <>
      <div
        className="text-center px-0"
        style={{
          background:
            "linear-gradient(to bottom, #333, #1a1a1a, #333333, #4d4d4d, #666666)",
          color: "white",
        }}
      >
        <div className="container py-1">
          <div className="animate-text">
            <div className="text-container">
              <p className="mb-0 small">
                <FaCheckCircle className="me-2" />
                Over 150,000 BOXT customers
              </p>
              <p className="mb-0 small">
                <FaCheckCircle className="me-2" />
                Order by 3pm for Next Working Day installation
              </p>
              <p className="mb-0 small">
                <FaCheckCircle className="me-2" />
                Rated Excellent on Trustpilot
              </p>
            </div>
          </div>
        </div>
        <style>
          {`
            .text-container {
              height: 24px;
              position: relative;
              overflow: hidden;
            }
            .animate-text p {
              position: absolute;
              width: 100%;
              margin: 0;
              opacity: 0;
              animation: slideUp 15s infinite;
            }
            .animate-text p:nth-child(1) { animation-delay: 0s; }
            .animate-text p:nth-child(2) { animation-delay: 5s; }
            .animate-text p:nth-child(3) { animation-delay: 10s; }
            @keyframes slideUp {
              0%, 27% { opacity: 1; }
              33%, 100% { opacity: 0; }
            }
          `}
        </style>
      </div>
      <div
        className="topbar px-5 py-2 d-flex justify-content-between align-items-center position-absolute w-100"
        style={{ zIndex: 1000 }}
      >
        <div className="d-flex align-items-center gap-5">
          <span className="brand fs-1 text-white">B O X T</span>

          <button
            className="btn btn-light rounded-pill px-4 py-3 fs-6 text-dark"
            onClick={handleModalToggle}
          >
            Get a fixed price <span className="ms-1">&#9662;</span>
          </button>

          <button className="btn btn-link text-light fs-6 dropdown-toggle px-0">
            Advice & FAQs
          </button>

          <button className="btn btn-link text-light fs-6 dropdown-toggle px-0">
            About BOXT
          </button>
        </div>

        <button className="btn rounded-pill px-4 py-2 help-btn d-flex align-items-center gap-2 bg-white">
          <span className="text-dark">Help</span>
          <span className="text-dark fs-5">❓</span>
        </button>
      </div>
      <div className="container-fluid px-0 position-relative">
        <div className="row">
          <div className="col-12 position-relative">
            <video
              className="w-100"
              autoPlay
              muted
              loop
              style={{ height: "700px", objectFit: "cover" }}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div
              className="position-absolute"
              style={{
                top: "50%",
                right: "10%",
                transform: "translateY(-50%)",
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                maxWidth: "400px",
              }}
            >
              <ModalCardStanderd
                backgroundColor="#E7F7F2"
                textColor="#000"
                iconColor="#fff"
                title="Hybrid heat pumps"
                subtitle="Installed from only 5,595"
                buttonText="Get your fixed price"
                image={hybridPump}
              />
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="custom-modal-backdrop" onClick={handleModalToggle}>
          <div
            className="d-flex gap-5 justify-content-center"
            style={{ marginTop: "2rem" }}
          >
            <button
              style={{
                padding: "0px",
                width: "240px",
                color: activeButton === "boilers" ? "#5A2C38" : "#fff",
                backgroundColor:
                  activeButton === "boilers" ? "#fff" : "#5A2C38",
                position: "relative",
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
                <span
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <IoIosArrowDown size={20} />
                </span>
              )}
            </button>

            <button
              style={{
                padding: "0px",
                width: "240px",
                color: activeButton === "heatpumps" ? "#5A2C38" : "#fff",
                backgroundColor:
                  activeButton === "heatpumps" ? "#fff" : "#5A2C38",
                position: "relative",
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
                <span
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <IoIosArrowDown size={20} />
                </span>
              )}
            </button>

            <button
              style={{
                padding: "0px",
                width: "240px",
                color: activeButton === "solar" ? "#5A2C38" : "#fff",
                backgroundColor: activeButton === "solar" ? "#fff" : "#5A2C38",
                position: "relative",
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
                <span
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <IoIosArrowDown size={20} />
                </span>
              )}
            </button>

            <button
              style={{
                padding: "0px",
                width: "240px",
                color: activeButton === "ac" ? "#5A2C38" : "#fff",
                backgroundColor: activeButton === "ac" ? "#fff" : "#5A2C38",
                position: "relative",
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
                <span
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <IoIosArrowDown size={20} />
                </span>
              )}
            </button>

            <button
              style={{
                padding: "0px",
                width: "240px",
                color: activeButton === "evcharger" ? "#5A2C38" : "#fff",
                backgroundColor:
                  activeButton === "evcharger" ? "#fff" : "#5A2C38",
                position: "relative",
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
                <span
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <IoIosArrowDown size={20} />
                </span>
              )}
            </button>
          </div>
          <div
            className="p-4 rounded-4 mt-3 mx-5"
            style={{
              backgroundColor: "rgba(128, 128, 128, 0.7)",
              backdropFilter: "blur(8px)",
            }}
          >
            {activeButton === "boilers" && (
              <div className="d-flex gap-5 justify-content-center ">
                <div style={{ width: "330px" }}>
                  <ModalCardStanderd image={bolderNav} />
                </div>

                <div>
                  <ModalCardStanderd
                    backgroundColor="#e5fabb"
                    textColor="#000"
                    iconColor="#fff"
                    title="All-inclusive boiler plan"
                    subtitle="Get your fixed price today"
                    buttonText="Get your fixed price"
                  />
                </div>
                <div>
                  <ModalCardStanderd
                    image={boxtCar}
                    backgroundColor="#fcf5f5"
                    textColor="#000"
                    iconColor="white"
                    title="Book a repair"
                    subtitle="Nect day repair visit for 89"
                    minHeight="194px"
                    maxWidth="285px"
                    smallCard
                  />
                  <ModalCardStanderd
                    backgroundColor="#fcf5f5"
                    textColor="#000"
                    iconColor="white"
                    buttonText="Find out more"
                    minHeight="194px"
                    maxWidth="285px"
                    marginTop="18px"
                    smallCard
                    backgroundImage
                    image={serviceImage}
                    title="Gas boiler service"
                    subtitle="Protect your warrantly boiler servicing from HomeServe"
                  />
                </div>
                <div>
                  <ModalCardStanderd
                    image={boxtCar}
                    backgroundColor="#fcf5f5"
                    textColor="#000"
                    iconColor="green"
                    title="Flexible finance options"
                    subtitle="12 to 120 month plans available"
                    minHeight="194px"
                    maxWidth="285px"
                    smallCard
                  />
                  <ModalCardStanderd
                    backgroundColor="#fcf5f5"
                    textColor="#000"
                    iconColor="#fff"
                    title="Talk to a heating expert"
                    subtitle="Help when you need it most"
                    buttonText="Find out more"
                    minHeight="194px"
                    maxWidth="285px"
                    image={serviceImage}
                    marginTop="18px"
                    smallCard
                    backgroundImage
                  />
                </div>
              </div>
            )}
            {(activeButton === "heatpumps" || activeButton === "solar") && (
              <div className="d-flex gap-4 justify-content-center ">
                <div>
                  <ModalCardStanderd
                    image={activeButton === "solar" ? solarBattry : modalAc}
                    backgroundColor={
                      activeButton === "solar" ? "#aae1ff" : "#00A56F"
                    }
                    textColor={activeButton === "solar" ? "#000" : "white"}
                    iconColor={activeButton === "solar" ? "white" : "#000"}
                    title={
                      activeButton === "solar"
                        ? "Solar & Battery"
                        : "Heat pumps"
                    }
                    subtitle={
                      activeButton === "solar"
                        ? "Installed from only 3,799"
                        : "Installed from only 5,595"
                    }
                    // buttonText="Get your fixed price"
                    maxWidth="95%"
                    fllWidth
                    imageWidth="45%"
                    // minHeight="300px"
                  />
                </div>
                <div>
                  <ModalCardStanderd
                    backgroundColor="#E7F7F2"
                    textColor="#000"
                    iconColor="#fff"
                    title="Hybrid heat pumps"
                    subtitle="Installed from only 5,595"
                    buttonText="Get your fixed price"
                    image={battrystorage}
                  />
                </div>
                <div>
                  <ModalCardStanderd
                    image={financeOption}
                    backgroundColor="#fcf5f5"
                    textColor="#000"
                    iconColor="green"
                    title="How the grant works"
                    subtitle="Get 7,500 towards your heat pump"
                    buttonText="Find out more"
                    minHeight="194px"
                    maxWidth="285px"
                    smallCard
                    imageWidth="100%"
                  />
                  <ModalCardStanderd
                    backgroundColor="#fcf5f5"
                    textColor="#000"
                    iconColor="#fff"
                    title="Talk to a heating expert"
                    subtitle="Help when you need it most"
                    buttonText="Find out more"
                    minHeight="194px"
                    maxWidth="285px"
                    image={serviceImage}
                    marginTop="18px"
                    smallCard
                    backgroundImage
                  />
                </div>
              </div>
            )}
            {(activeButton === "ac" || activeButton === "evcharger") && (
              <div className="d-flex gap-4 justify-content-center">
                <div style={{ width: "44%" }}>
                  <ModalCardStanderd
                    image={serviceImage}
                    backgroundImage
                    // backgroundColor={"#00A56F"}
                    textColor={"#000"}
                    iconColor={"#fff"}
                    title={"Heat pumps"}
                    subtitle={"Installed from only 5,595"}
                    // buttonText="Get your fixed price"
                    maxWidth="95%"
                    fllWidth
                    imageWidth="45%"
                    // minHeight="300px"
                  />
                </div>
                <ModalCardStanderd
                  backgroundColor="#E7F7F2"
                  textColor="#000"
                  iconColor="#fff"
                  title="Hybrid heat pumps"
                  subtitle="Installed from only 5,595"
                  buttonText="Get your fixed price"
                  image={activeButton === "evcharger" ? thunder : howitwork}
                  imageWidth={activeButton === "evcharger" ? "50%" : "70%"}
                />

                <ModalCardStanderd
                  backgroundColor="#E7F7F2"
                  textColor="#000"
                  iconColor="#fff"
                  title="Hybrid heat pumps"
                  subtitle="Installed from only 5,595"
                  buttonText="Get your fixed price"
                  image={serviceImage}
                  backgroundImage
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TopbarNav;
