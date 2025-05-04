import React from "react";
import Boiler from "../../assets/boiler_nav.avif";
import BoxtLife from "../../assets/boxt_nav.avif";
import HeatPumps from "../../assets/heat_nav.avif";
import Solar from "../../assets/solar_nav.avif";
import AirConditioning from "../../assets/air_nav.avif";
import BatteryStorage from "../../assets/battery_nav.avif";
const navItems = [
  {
    name: "Boilers",
    href: "https://app.boxt.co.uk/boilers/your-home",
    image: Boiler,
  },
  {
    name: "BOXT Life",
    href: "https://app.boxt.co.uk/boilers/subscription/your-home",
    image: BoxtLife,
  },
  {
    name: "Heat Pumps",
    href: "https://app.boxt.co.uk/heat-pumps/your-home",
    image: HeatPumps,
  },
  {
    name: "Solar & Battery",
    href: "https://app.boxt.co.uk/solar/your-home",
    image: Solar,
  },
  {
    name: "Batter Storage",
    href: "https://app.boxt.co.uk/battery-storage/your-home",
    image: BatteryStorage,
  },
  {
    name: "Air Conditioning ",
    href: "https://app.boxt.co.uk/air-conditioning/your-home",
    image: AirConditioning,
  },
];

const BottomNav = () => {
  return (
    <div
      className="navbar fixed-bottom border-top"
      style={{ backgroundColor: "#e9ede4", height: "150px" }}
    >
      <div className="container d-flex justify-content-around px-6 h-100">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-center text-decoration-none text-dark small d-flex flex-column align-items-center justify-content-center"
            style={{ width: "100px" }}
          >
            <img
              src={item.image}
              alt={item.name}
              width="90"
              height="90"
              style={{ objectFit: "contain" }}
            />
            <span style={{ fontSize: "0.90rem" }}>{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
