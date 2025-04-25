import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brandimage1 from "../../assets/brandimage1.svg";
import brandimage2 from "../../assets/brandimage2.svg";
import brandimage3 from "../../assets/brandimage3.svg";
import brandimage4 from "../../assets/brandimage4.svg";
import brandimage5 from "../../assets/brandimage5.svg";
import brandimage6 from "../../assets/brandimage6.svg";
import brandimage7 from "../../assets/brandimage7.svg";
import brandimage8 from "../../assets/brandimage8.svg";
import brandimage9 from "../../assets/brandimage9.svg";
import brandimage10 from "../../assets/brandimage10.svg";
import brandimage11 from "../../assets/brandimage11.svg";

export const CarouselSlider = () => {
  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        },
      },
    ],
  };

  const brandLogos = [
    {
      id: 1,
      image: brandimage1,
      alt: "Google",
    },
    {
      id: 2,
      image: brandimage2,
      alt: "IBM",
    },
    {
      id: 3,
      image: brandimage3,
      alt: "Microsoft",
    },
    {
      id: 4,
      image: brandimage4,
      alt: "Apple",
    },
    {
      id: 5,
      image: brandimage5,
      alt: "AWS",
    },
    {
      id: 6,
      image: brandimage6,
      alt: "Intel",
    },
    {
      id: 7,
      image: brandimage7,
      alt: "Intel",
    },
    {
      id: 8,
      image: brandimage8,
      alt: "Intel",
    },
    {
      id: 9,
      image: brandimage9,
      alt: "Intel",
    },
    {
      id: 10,
      image: brandimage10,
      alt: "Intel",
    },
    {
      id: 11,
      image: brandimage11,
      alt: "Intel",
    },
  ];

  return (
    <div className="brand-carousel mt-3">
      <Slider {...settings}>
        {brandLogos.map((brand) => (
          <div key={brand.id} className="brand-slide">
            <img
              src={brand.image}
              alt={brand.alt}
              className="brand-logo"
              style={{
                width: "150px",
                height: "auto",
                margin: "0 auto",
                padding: "10px",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
