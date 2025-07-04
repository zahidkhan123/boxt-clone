import React, { useState, useEffect } from "react";
import "./TopbarNav.css";
import boilers from "../../assets/boilers.png";
import heatPumps from "../../assets/heatPump.png";
import solar from "../../assets/solarBattery.png";
import ac from "../../assets/airConditionar.png";
import evCharger from "../../assets/evchargers.png";
import boxtCar from "../../assets/boxtCar.png";
import financeOption from "../../assets/financeoption.svg";
import serviceImage from "../../assets/serviceImage.avif";
import { ModalCardStanderd } from "../modalcards/ModalCardStanderd";
import bolderNav from "../../assets/boiler_nav.avif";
import modalAc from "../../assets/modalAc.png";
import solarBattry from "../../assets/solar&battry.png";
import video from "../../assets/boxtvideo.mp4";
import { FaCheckCircle } from "react-icons/fa";
import battrystorage from "../../assets/batteryStorage.png";
import howitwork from "../../assets/howitwork.svg";
import thunder from "../../assets/thunder.svg";
import { IoIosArrowDown } from "react-icons/io";
import Slider from "react-slick";
import { ModalImageCard } from "../modalcards/ModalImageCard";

const TopbarNav = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeButton, setActiveButton] = useState("boilers");
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet and below
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="container-fluid px-0 position-relative">
        {/* Animated Text Slider */}
        <div
          className="position-absolute text-center"
          style={{
            zIndex: 1000,
            background:
              "linear-gradient(to bottom, rgb(25, 25, 25) 0%, rgba(55, 45, 45, 0.7) 50%, rgba(50, 27, 27, 0) 100%)",
            color: "white",
            marginBottom: "20px",
            padding: "5px 0",
            width: "100%",
          }}
        >
          <div className="container py-1">
            <div className="animate-text">
              <div className="text-container">
                <p className="mb-0 small" style={{ fontSize: "12px" }}>
                  <FaCheckCircle className="me-2" />
                  Over 150,000 BOXT customers
                </p>
                <p className="mb-0 small" style={{ fontSize: "12px" }}>
                  <FaCheckCircle className="me-2" />
                  Order by 3pm for Next Working Day installation
                </p>
                <p className="mb-0 small" style={{ fontSize: "12px" }}>
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
          <hr className="mt-0" style={{ borderColor: "#fff" }} />
        </div>

        {/* Topbar */}
        <div
          className="topbar px-5 py-2 mt-3 d-flex justify-content-between align-items-center position-absolute w-100"
          style={{
            zIndex: 999,
            backgroundColor: showModal ? "#606060" : "transparent",
            top: "30px",
          }}
        >
          <div className="d-flex align-items-center gap-5">
            <span
              className="brand text-white"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
            >
              B O X T
            </span>

            <button
              className="btn btn-light rounded-pill px-3 py-2 text-dark"
              style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
              onClick={handleModalToggle}
            >
              Get a fixed price <span className="ms-1">&#9662;</span>
            </button>

            <button
              className="btn btn-link text-light dropdown-toggle px-0 d-none d-md-block"
              style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
            >
              Advice & FAQs
            </button>

            <button
              className="btn btn-link text-light dropdown-toggle px-0 d-none d-md-block"
              style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
            >
              About BOXT
            </button>
          </div>

          <button
            className="btn rounded-pill px-3 py-2 help-btn d-flex align-items-center gap-2 bg-white d-none d-md-flex"
            style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
          >
            <span className="text-dark">Help</span>
            <span className="text-dark">❓</span>
          </button>
        </div>

        {/* Video and Boiler Card */}
        <div>
          <div className="col-12 position-relative">
            <video
              className="w-100"
              autoPlay
              muted
              loop
              style={{ height: "800px", objectFit: "cover" }}
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
              }}
            >
              <div
                className="boiler-card p-4 rounded-4 text-white sm:ml-5"
                style={{ maxWidth: "1000px", marginLeft: "25px" }}
              >
                <h2
                  className="fw-bold mb-4 text-start"
                  style={{ fontSize: "2.5rem" }}
                >
                  Fixed-price, next day
                  <br />
                  boiler installation
                </h2>
                <p className="mb-3 text-start" style={{ fontSize: "1.2rem" }}>
                  Use code <strong>FREEHIVEMINI</strong> on any boiler order for
                  a
                  <br />
                  <strong>free Hive Thermostat Mini</strong>. T&Cs apply
                </p>
                <div className="d-flex flex-column flex-md-row gap-3 justify-content-start mt-4">
                  <button
                    className="btn btn-success px-5 py-3 fw-medium"
                    style={{ fontSize: "1.1rem" }}
                  >
                    Finish your quote
                  </button>
                  <button
                    className="btn btn-light px-5 py-3 fw-medium"
                    style={{ fontSize: "1.1rem" }}
                  >
                    Get your fixed price
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        // onClick={handleModalToggle}
        <div className="custom-modal-backdrop" onClick={handleModalToggle}>
          <div
            className="d-flex flex-nowrap  gap-3  align-items-center d-none d-md-flex"
            style={{ width: "93%" }}
          >
            {" "}
            <button
              style={{
                padding: "0px",
                width: "17%",
                height: "60px",
                color: activeButton === "boilers" ? "#606060" : "#fff",
                backgroundColor:
                  activeButton === "boilers" ? "#fff" : "#606060",
                position: "relative",
                fontSize: "1.2rem",
                fontWeight: "200",
                flex: "0 0 auto",
              }}
              className="btn d-flex align-items-center"
              onClick={(e) => {
                e.stopPropagation();
                handleButtonClick("boilers");
              }}
            >
              <div className="d-flex flex-column flex-md-row align-items-center">
                <img
                  src={boilers}
                  alt="Boiler"
                  className="me-md-3"
                  style={{ width: "60px", height: "40px" }}
                />
                <span className="mt-2 mt-md-0" style={{ fontSize: "0.85rem" }}>
                  {" "}
                  Boilers
                </span>
              </div>
              {activeButton === "boilers" && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <IoIosArrowDown size={24} />
                </span>
              )}
            </button>
            <button
              style={{
                padding: "0px",
                width: "17%",
                height: "60px",
                color: activeButton === "heatpumps" ? "#606060" : "#fff",
                backgroundColor:
                  activeButton === "heatpumps" ? "#fff" : "#606060",
                position: "relative",
                fontSize: "1.2rem",
                fontWeight: "200",
                flex: "0 0 auto",
              }}
              className="btn d-flex align-items-center"
              onClick={(e) => {
                e.stopPropagation();
                handleButtonClick("heatpumps");
              }}
            >
              <div className="d-flex flex-column flex-md-row align-items-center">
                <img
                  src={heatPumps}
                  alt="Heat Pump"
                  className="me-md-3"
                  style={{ width: "60px", height: "40px" }}
                />
                <span className="mt-2 mt-md-0" style={{ fontSize: "0.85rem" }}>
                  {" "}
                  Heat pumps
                </span>
              </div>
              {activeButton === "heatpumps" && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <IoIosArrowDown size={24} />
                </span>
              )}
            </button>
            <button
              style={{
                padding: "0px",
                width: "17%",
                height: "60px",
                color: activeButton === "solar" ? "#606060" : "#fff",
                backgroundColor: activeButton === "solar" ? "#fff" : "#606060",
                position: "relative",
                fontSize: "1.2rem",
                fontWeight: "200",
                flex: "0 0 auto",
              }}
              className="btn d-flex align-items-center"
              onClick={(e) => {
                e.stopPropagation();
                handleButtonClick("solar");
              }}
            >
              <div className="d-flex flex-column flex-md-row align-items-center">
                <img
                  src={solar}
                  alt="Solar"
                  className="me-md-3"
                  style={{ width: "60px", height: "40px" }}
                />
                <span className="mt-2 mt-md-0" style={{ fontSize: "0.85rem" }}>
                  {" "}
                  Solar & battery
                </span>
              </div>
              {activeButton === "solar" && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <IoIosArrowDown size={24} />
                </span>
              )}
            </button>
            <button
              style={{
                padding: "0px",
                width: "17%",
                height: "60px",
                color: activeButton === "ac" ? "#606060" : "#fff",
                backgroundColor: activeButton === "ac" ? "#fff" : "#606060",
                position: "relative",
                fontSize: "1.2rem",
                fontWeight: "200",
                flex: "0 0 auto",
              }}
              className="btn d-flex align-items-center"
              onClick={(e) => {
                e.stopPropagation();
                handleButtonClick("ac");
              }}
            >
              <div className="d-flex flex-column flex-md-row align-items-center">
                <img
                  src={ac}
                  alt="AC"
                  className="me-md-3"
                  style={{ width: "60px", height: "40px" }}
                />
                <span className="mt-2 mt-md-0" style={{ fontSize: "0.85rem" }}>
                  {" "}
                  Air conditioning
                </span>
              </div>
              {activeButton === "ac" && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <IoIosArrowDown size={24} />
                </span>
              )}
            </button>
            <button
              style={{
                padding: "0px",
                width: "17%",
                height: "60px",
                color: activeButton === "evcharger" ? "#606060" : "#fff",
                backgroundColor:
                  activeButton === "evcharger" ? "#fff" : "#606060",
                position: "relative",
                fontSize: "1.2rem",
                fontWeight: "200",
                flex: "0 0 auto",
              }}
              className="btn d-flex align-items-center"
              onClick={(e) => {
                e.stopPropagation();
                handleButtonClick("evcharger");
              }}
            >
              <div className="d-flex flex-column flex-md-row align-items-center">
                <img
                  src={evCharger}
                  alt="EV charger"
                  className="me-md-3"
                  style={{ width: "60px", height: "40px" }}
                />
                <span className="mt-2 mt-md-0" style={{ fontSize: "0.85rem" }}>
                  {" "}
                  EV chargers
                </span>
              </div>
              {activeButton === "evcharger" && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <IoIosArrowDown size={24} />
                </span>
              )}
            </button>
          </div>
          <div
            className="d-md-none"
            style={{
              // overflowX: "auto",
              whiteSpace: "nowrap",
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              padding: "10px",
              marginTop: "-28%",
            }}
          >
            <button
              style={{
                padding: "0px",
                maxWidth: "150px",
                height: "60px",
                color: activeButton === "boilers" ? "#606060" : "#fff",
                backgroundColor:
                  activeButton === "boilers" ? "#fff" : "#606060",
                position: "relative",
                fontSize: "1.2rem",
                fontWeight: "200",
                flex: "0 0 auto",
              }}
              className="btn d-flex align-items-center"
              onClick={(e) => {
                e.stopPropagation();
                handleButtonClick("boilers");
              }}
            >
              <div className="d-flex flex-column flex-md-row align-items-center">
                <img
                  src={boilers}
                  alt="Boiler"
                  className="me-md-3"
                  style={{ width: "60px", height: "40px" }}
                />
                <span className="mt-2 mt-md-0" style={{ fontSize: "0.85rem" }}>
                  {" "}
                  Boilers
                </span>
              </div>
              {activeButton === "boilers" && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <IoIosArrowDown size={24} />
                </span>
              )}
            </button>
            <button
              style={{
                padding: "0px",
                maxWidth: "150px",
                height: "60px",
                color: activeButton === "heatpumps" ? "#606060" : "#fff",
                backgroundColor:
                  activeButton === "heatpumps" ? "#fff" : "#606060",
                position: "relative",
                fontSize: "1.2rem",
                fontWeight: "200",
                flex: "0 0 auto",
              }}
              className="btn d-flex align-items-center"
              onClick={(e) => {
                e.stopPropagation();
                handleButtonClick("heatpumps");
              }}
            >
              <div className="d-flex flex-column flex-md-row align-items-center">
                <img
                  src={heatPumps}
                  alt="Heat Pump"
                  className="me-md-3"
                  style={{ width: "60px", height: "40px" }}
                />
                <span className="mt-2 mt-md-0" style={{ fontSize: "0.85rem" }}>
                  {" "}
                  Heat pumps
                </span>
              </div>
              {activeButton === "heatpumps" && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <IoIosArrowDown size={24} />
                </span>
              )}
            </button>
            <button
              style={{
                padding: "0px",
                maxWidth: "150px",
                height: "60px",
                color: activeButton === "solar" ? "#606060" : "#fff",
                backgroundColor: activeButton === "solar" ? "#fff" : "#606060",
                position: "relative",
                fontSize: "1.2rem",
                fontWeight: "200",
                flex: "0 0 auto",
              }}
              className="btn d-flex align-items-center"
              onClick={(e) => {
                e.stopPropagation();
                handleButtonClick("solar");
              }}
            >
              <div className="d-flex flex-column flex-md-row align-items-center">
                <img
                  src={solar}
                  alt="Solar"
                  className="me-md-3"
                  style={{ width: "60px", height: "40px" }}
                />
                <span className="mt-2 mt-md-0" style={{ fontSize: "0.85rem" }}>
                  {" "}
                  Solar & battery
                </span>
              </div>
              {activeButton === "solar" && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <IoIosArrowDown size={24} />
                </span>
              )}
            </button>
            <button
              style={{
                padding: "0px",
                maxWidth: "150px",
                height: "60px",
                color: activeButton === "ac" ? "#606060" : "#fff",
                backgroundColor: activeButton === "ac" ? "#fff" : "#606060",
                position: "relative",
                fontSize: "1.2rem",
                fontWeight: "200",
                flex: "0 0 auto",
              }}
              className="btn d-flex align-items-center"
              onClick={(e) => {
                e.stopPropagation();
                handleButtonClick("ac");
              }}
            >
              <div className="d-flex flex-column flex-md-row align-items-center">
                <img
                  src={ac}
                  alt="AC"
                  className="me-md-3"
                  style={{ width: "60px", height: "40px" }}
                />
                <span className="mt-2 mt-md-0" style={{ fontSize: "0.85rem" }}>
                  {" "}
                  Air conditioning
                </span>
              </div>
              {activeButton === "ac" && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <IoIosArrowDown size={24} />
                </span>
              )}
            </button>
            <button
              style={{
                padding: "0px",
                maxWidth: "150px",
                height: "60px",
                color: activeButton === "evcharger" ? "#606060" : "#fff",
                backgroundColor:
                  activeButton === "evcharger" ? "#fff" : "#606060",
                position: "relative",
                fontSize: "1.2rem",
                fontWeight: "200",
                flex: "0 0 auto",
              }}
              className="btn d-flex align-items-center"
              onClick={(e) => {
                e.stopPropagation();
                handleButtonClick("evcharger");
              }}
            >
              <div className="d-flex flex-column flex-md-row align-items-center">
                <img
                  src={evCharger}
                  alt="EV charger"
                  className="me-md-3"
                  style={{ width: "60px", height: "40px" }}
                />
                <span className="mt-2 mt-md-0" style={{ fontSize: "0.85rem" }}>
                  {" "}
                  EV chargers
                </span>
              </div>
              {activeButton === "evcharger" && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <IoIosArrowDown size={24} />
                </span>
              )}
            </button>
          </div>
          <div
            className="p-4 rounded-4 mt-3 mx-5"
            style={{
              backgroundColor: "rgba(128, 128, 128, 0.7)",
              backdropFilter: "blur(8px)",
              width: "93%",
            }}
          >
            <div style={{ width: "100%" }}>
              {activeButton === "boilers" && (
                <Slider {...settings}>
                  <div>
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
                    <ModalImageCard
                      backgroundColor="#fcf5f5"
                      textColor="#fff"
                      iconColor="white"
                      buttonText="Find out more"
                      minHeight="194px"
                      maxWidth="285px"
                      marginTop="18px"
                      smallCard
                      backgroundImage
                      image={serviceImage}
                      title="Gas boiler service"
                      subtitle="Protect warrantly boiler servicing"
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
                    <ModalImageCard
                      // backgroundColor="#fcf5f5"
                      textColor="#fff"
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
                </Slider>
              )}

              {(activeButton === "heatpumps" || activeButton === "solar") && (
                <>
                  {/* Desktop View */}
                  <div
                    className="d-none d-md-flex"
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ width: "50%" }}>
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
                        maxWidth="100%"
                        imageWidth="50%"
                        fllWidth
                      />
                    </div>
                    <div style={{ width: "25%" }}>
                      <ModalCardStanderd
                        backgroundColor="#E7F7F2"
                        textColor="#000"
                        iconColor="#fff"
                        title="Hybrid heat pumps"
                        subtitle="Installed from only 5,595"
                        buttonText="Get your fixed price"
                        image={battrystorage}
                        maxWidth="100%"
                      />
                    </div>
                    <div style={{ width: "23%" }}>
                      <div style={{ marginBottom: "10px" }}>
                        <ModalCardStanderd
                          image={financeOption}
                          backgroundColor="#fcf5f5"
                          textColor="#000"
                          iconColor="green"
                          title="How the grant works"
                          subtitle="Get 7,500 towards your heat pump"
                          buttonText="Find out more"
                          minHeight="193px"
                          maxWidth="100%"
                          smallCard
                          imageWidth="100%"
                        />
                      </div>
                      <ModalImageCard
                        backgroundColor="#fcf5f5"
                        textColor="#fff"
                        iconColor="#fff"
                        title="Talk to a heating expert"
                        subtitle="Help when you need it most"
                        buttonText="Find out more"
                        minHeight="200px"
                        maxWidth="100%"
                        image={serviceImage}
                        smallCard
                        backgroundImage
                      />
                    </div>
                  </div>

                  {/* Mobile/Tablet View */}
                  <div className="d-md-none">
                    <Slider {...settings}>
                      <div>
                        <ModalCardStanderd
                          image={
                            activeButton === "solar" ? solarBattry : modalAc
                          }
                          backgroundColor={
                            activeButton === "solar" ? "#aae1ff" : "#00A56F"
                          }
                          textColor={
                            activeButton === "solar" ? "#000" : "white"
                          }
                          iconColor={
                            activeButton === "solar" ? "white" : "#000"
                          }
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
                          maxWidth="100%"
                          imageWidth="73%"
                          responsive
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
                          maxWidth="100%"
                          imageWidth="65%"
                        />
                      </div>
                      <ModalCardStanderd
                        image={financeOption}
                        backgroundColor="#fcf5f5"
                        textColor="#000"
                        iconColor="green"
                        title="How the grant works"
                        subtitle="Get 7,500 towards your heat pump"
                        buttonText="Find out more"
                        maxWidth="100%"
                        imageWidth="100%"
                      />

                      <ModalImageCard
                        backgroundColor="#fcf5f5"
                        textColor="#fff"
                        iconColor="#fff"
                        title="Talk to a heating expert"
                        subtitle="Help when you need it most"
                        buttonText="Find out more"
                        maxWidth="100%"
                        image={serviceImage}
                        backgroundImage
                      />
                    </Slider>
                  </div>
                </>
              )}
              {(activeButton === "ac" || activeButton === "evcharger") && (
                <>
                  <div
                    className="d-none d-md-flex"
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ width: "50%" }}>
                      <ModalImageCard
                        image={serviceImage}
                        backgroundImage
                        textColor={"#fff"}
                        iconColor={"#fff"}
                        title={"Heat pumps"}
                        subtitle={"Installed from only 5,595"}
                        maxWidth="100%"
                        fllWidth
                      />
                    </div>
                    <div style={{ width: "25%" }}>
                      <ModalCardStanderd
                        backgroundColor="#E7F7F2"
                        textColor="#000"
                        iconColor="#fff"
                        title="Hybrid heat pumps"
                        subtitle="Installed from only 5,595"
                        buttonText="Get your fixed price"
                        image={
                          activeButton === "evcharger" ? thunder : howitwork
                        }
                        imageWidth={
                          activeButton === "evcharger" ? "50%" : "70%"
                        }
                      />
                    </div>
                    <div style={{ width: "25%" }}>
                      <ModalImageCard
                        // backgroundColor="#E7F7F2"
                        textColor="#fff"
                        iconColor="#fff"
                        title="Hybrid heat pumps"
                        subtitle="Installed from only 5,595"
                        buttonText="Get your fixed price"
                        image={serviceImage}
                        backgroundImage
                      />
                    </div>
                  </div>
                  {/* Mobile/Tablet View */}
                  <div className="d-md-none">
                    <Slider {...settings}>
                      <div>
                        <ModalImageCard
                          image={serviceImage}
                          backgroundImage
                          textColor={"#fff"}
                          iconColor={"#fff"}
                          title={"Heat pumps"}
                          subtitle={"Installed from only 5,595"}
                          maxWidth="100%"
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
                          image={
                            activeButton === "evcharger" ? thunder : howitwork
                          }
                          imageWidth={
                            activeButton === "evcharger" ? "40%" : "65%"
                          }
                          maxWidth="100%"
                        />
                      </div>
                      <div>
                        <ModalImageCard
                          // backgroundColor="#E7F7F2"
                          textColor="#fff"
                          iconColor="#fff"
                          title="Hybrid heat pumps"
                          subtitle="Installed from only 5,595"
                          buttonText="Get your fixed price"
                          image={serviceImage}
                          backgroundImage
                          maxWidth="100%"
                        />
                      </div>
                    </Slider>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopbarNav;
