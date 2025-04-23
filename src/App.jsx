
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CarouselSlider } from "./components/Carousel/carousel";
import { ItemCard } from "./components/ItemCard";
import { ServiceCard } from "./components/ServiceCard";
import boilerImage from "./assets/boxtlife.avif";
import boilerImage2 from "./assets/freeHive.avif";
import Footer from "./components/footer";
import PriceMatchSection from "./components/PriceMatchSection";
import BoxSteps from "./components/Boxstep";
  function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <CarouselSlider />
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
      <Footer />
    
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
