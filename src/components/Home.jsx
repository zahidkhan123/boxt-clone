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
        <BottomNav />
      </div>
      {/* <CarouselSlider />
      <div className="col-12">
        <div className="row">
          <div className="col-md-6">
            <ServiceCard
              title="Buy a boiler"
              description="A-rated boilers installed from £1,795, including up to 10 year manufacturer backed warranties"
              image={boilerImage}
              button1Text="Get a fixed price"
              button2Text="Find out more"
              showButtons={true}
            />
          </div>
          <div className="col-md-6">
            <ServiceCard
              title="Buy a boiler"
              description="A-rated boilers installed from £1,795, including up to 10 year manufacturer backed warranties"
              image={boilerImage2}
              button1Text="Get a fixed price"
              button2Text="Find out more"
              showButtons={false}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <ItemCard
              category="Boiler Servicing"
              title="Protect your boiler warranty"
              description="Protect your boiler warranty with a boiler service from HomeServe"
              price={10}
              buttonText="Find out more"
              onClick={() => alert("More info clicked!")}
            />
          </div>
          <div className="col-md-6 mb-4">
            <ItemCard
              category="Heating Cover"
              title="Keep your home warm all year"
              description="Get comprehensive heating cover from HomeServe"
              price={12}
              buttonText="Learn more"
              onClick={() => alert("Heating info clicked!")}
            />
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-md-6">
            <ItemCard
              category="Battery Storage"
              title="Store & save with a home battery"
              description="Add a battery to your existing solar panels or get a standalone battery to power your home & car with low cost electricity"
              buttonText="Get a fixed price"
              image={
                "https://boxt-bcms.imgix.net/B0Feps0Qga9RUYnivE8A?auto=format&q=80&w=384"
              }
            />
          </div>
          <div className="col-md-6">
            <ItemCard
              category="Air Conditioning"
              title="Keep cool with home air conditioning"
              description="Get air conditioning installed in your home as soon as tomorrow"
              buttonText="Get a fixed price"
              image={
                "https://boxt-bcms.imgix.net/B0Feps0Qga9RUYnivE8A?auto=format&q=80&w=384"
              }
            />
          </div>
          <div className="col-md-6">
            <ItemCard
              category="Boiler Servicing"
              title="Protect your boiler warranty"
              description="Protect your boiler warranty with a boiler service from HomeServe for £10 a month"
              buttonText="Find out more"
              image={
                "https://boxt-bcms.imgix.net/B0Feps0Qga9RUYnivE8A?auto=format&q=80&w=384"
              }
              buttonVariant="success"
            />
          </div>
          <div className="col-md-6">
            <ItemCard
              category="Boiler Repair"
              title="Get a boiler repair visit for just £89"
              description="Enjoy a one-year workmanship guarantee and no upfront payment"
              buttonText="Book a repair"
              image={
                "https://boxt-bcms.imgix.net/B0Feps0Qga9RUYnivE8A?auto=format&q=80&w=384"
              }
              buttonVariant="success"
            />
          </div>
        </div>
      </div>
      <BoxSteps />
      <PriceMatchSection />
      <Footer /> */}
    </>
  );
}

export default Home;
