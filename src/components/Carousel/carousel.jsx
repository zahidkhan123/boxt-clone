import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      image:
        "https://boxt-bcms.imgix.net/B0Feps0Qga9RUYnivE8A?auto=format&q=80&w=384",
      alt: "Google",
    },
    {
      id: 2,
      image:
        "https://boxt-bcms.imgix.net/B0Feps0Qga9RUYnivE8A?auto=format&q=80&w=384",
      alt: "IBM",
    },
    {
      id: 3,
      image:
        "https://boxt-bcms.imgix.net/B0Feps0Qga9RUYnivE8A?auto=format&q=80&w=384",
      alt: "Microsoft",
    },
    {
      id: 4,
      image:
        "https://boxt-bcms.imgix.net/B0Feps0Qga9RUYnivE8A?auto=format&q=80&w=384",
      alt: "Apple",
    },
    {
      id: 5,
      image:
        "https://boxt-bcms.imgix.net/B0Feps0Qga9RUYnivE8A?auto=format&q=80&w=384",
      alt: "AWS",
    },
    {
      id: 6,
      image:
        "https://boxt-bcms.imgix.net/B0Feps0Qga9RUYnivE8A?auto=format&q=80&w=384",
      alt: "Intel",
    },
  ];

  return (
    <div className="brand-carousel">
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
