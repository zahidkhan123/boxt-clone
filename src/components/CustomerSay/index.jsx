import React from "react";
import Slider from "react-slick";

const reviews = [
  {
    rating: 5,
    title: "Wing Lee arrived this morning …",
    body: `Wing Lee arrived this morning at 8am. Our system was fixed by 8:30am. Really nice man! They were professional and efficient, and handled all issues promptly. Would highly recommend!`,
    author: "Chloe Wilson",
    time: "4 hours ago",
  },
  {
    rating: 4,
    title: "Great Service!",
    body: "Had a quick response, and the system was back online in no time. Staff were friendly and very helpful, happy with the overall experience.",
    author: "John Doe",
    time: "2 days ago",
  },
  {
    rating: 3,
    title: "Decent but could be better",
    body: "The technician arrived on time and fixed the system, but the communication was a bit lacking. I expected more clarity about the issue and resolution.",
    author: "Emma Stone",
    time: "1 week ago",
  },
  {
    rating: 5,
    title: "Above and Beyond!",
    body: "They not only fixed the system, but also went out of their way to offer advice and make sure everything was running smoothly. Top-notch service.",
    author: "Michael Scott",
    time: "5 days ago",
  },
];

const truncateText = (text, limit) => {
  return text.length > limit ? text.substring(0, limit) + "..." : text;
};

const StarRating = ({ rating }) => {
  return (
    <div className="mb-2">
      {[...Array(rating)].map((_, index) => (
        <i key={index} className="bi bi-star-fill text-success me-1"></i>
      ))}
    </div>
  );
};

const ReviewCard = ({ review }) => {
  const bodyText = truncateText(review.body, 150);

  return (
    <div
      className="card mx-2"
      style={{ maxWidth: "300px", minHeight: "250px" }}
    >
      <div className="card-body">
        <StarRating rating={review.rating} />
        <h6 className="card-title fw-bold">{review.title}</h6>
        <p className="card-text mb-2">{bodyText}</p>
        <small className="text-muted">
          <strong>{review.author}</strong>, {review.time}
        </small>
      </div>
    </div>
  );
};

const ReviewList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjust based on screen size
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="container my-5">
      <h2 className="fw-bold text-center mb-4" style={{ color: "#121212" }}>
        What our customers say
      </h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </Slider>
    </div>
  );
};

export default ReviewList;
