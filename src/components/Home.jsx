import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CarouselSlider } from "./Carousel/carousel";
import { ItemCard } from "./ItemCard";
import { ServiceCard } from "./ServiceCard";
import boilerImage from "../assets/boxtlife.avif";
import boilerImage2 from "../assets/freeHive.avif";
import Footer from "./footer";
import PriceMatchSection from "./PriceMatchSection";
import BoxSteps from "./Boxstep";
import "../App.css";
import { FaCheckCircle } from "react-icons/fa";
import BottomNav from "./bottomNav/BottomNav";
import Navbar from "./Navbar/Navbar";
import airConditioningImage from "../assets/airConditinoning.avif";
import batteryStorageImage from "../assets/battryStorage.avif";
import boilerServicingImage from "../assets/boilerServer.avif";
import electricVehicleImage from "../assets/electricvehiclecharger.avif";
import serviceImage from "../assets/serviceImage.avif";
import solarbattry from "../assets/solarbattry.avif";
import { HowItWorks } from "./HowItWork";
function Home() {
  return (
    <>
      <div
        className="text-center border-bottom  px-0"
        style={{
          background: "linear-gradient(to bottom, #000000, #434343)",
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
        <Navbar />

        {/* <BottomNav /> */}
      </div>

      <div className="">
        <h2 className="text-center text-dark">Our partners</h2>
        <CarouselSlider />
      </div>
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-md-6">
            <ServiceCard
              title="Buy a boiler"
              description="A-rated boilers installed from £1,795, including up to 10 year manufacturer backed warranties"
              image={boilerImage2}
              button1Text="Get a fixed price"
              button2Text="Find out more"
              buttonTextColor="black"
              buttonColor="white"
              backgroundColor="#Fb6058"
              cardHeadingColor="white"
              cardDesColor="white"
              cardHeading="BOILERS"
            />
          </div>
          <div className="col-md-6">
            <ServiceCard
              title="All-inclusive worry-free boiler plan"
              backgroundColor="#F5F7F9"
              description="New boiler + annual servicing + unlimited repairs or replacement from only £33.35 a month"
              image={boilerImage}
              button1Text="Get a fixed price"
              buttonColor="#00A56F"
              buttonTextColor="white"
              cardHeadingColor="black"
              cardDesColor="black"
              cardHeading="BOXT LIFE"
            />
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="row g-4">
          <div className="col-md-6">
            <ItemCard
              category="SOLAR & BATTERY"
              title="Buy one panel, get one FREE"
              description="Get an instant online quote, plus a free solar design based on 3D mapping technology. Installed from £3,799"
              buttonText="See how much you could save"
              image={solarbattry}
            />
          </div>
          <div className="col-md-6">
            <ItemCard
              category="AIR CONDITIONING"
              title="Keep cool with home air conditioning"
              description="Get air conditioning installed in your home as soon as tomorrow. Save £200 on Daikin models while stock lasts."
              buttonText="Get a fixed price"
              image={airConditioningImage}
            />
          </div>
          <div className="col-md-6">
            <ItemCard
              category="HEAT PUMPS"
              title="Heat your home with fresh air"
              description="Save £7,500 on a new heat pump and get it installed within 4 weeks. Prices from £3,299"
              buttonText="Get a fixed price"
              image={boilerServicingImage}
              buttonVariant="success"
            />
          </div>
          <div className="col-md-6">
            <ItemCard
              category="BATTERY STORAGE"
              title="Store & save with a home battery"
              description="Add a battery to your existing solar panels or get a standalone battery to power your home & car with low cost electricityt"
              buttonText="Get a fixed price"
              image={batteryStorageImage}
              buttonVariant="success"
            />
          </div>
          <div className="col-md-6">
            <ItemCard
              category="BOILER SERVICING"
              title="Protect your boiler warranty"
              description="Protect your boiler warranty with a boiler service from HomeServe for £10 a month"
              buttonText="Find out more"
              image={serviceImage}
              buttonVariant="success"
            />
          </div>
          <div className="col-md-6">
            <ItemCard
              category="BOILER REPAIR"
              title="Get a boiler repair visit for just £89"
              description="Enjoy a one-year workmanship guarantee and no upfront payment"
              buttonText="Book a repair"
              image={electricVehicleImage}
              buttonVariant="success"
            />
          </div>
        </div>
      </div>
      <HowItWorks />
      {/* <BoxSteps />
      <PriceMatchSection />
      <Footer /> */}
    </>
  );
}

export default Home;
