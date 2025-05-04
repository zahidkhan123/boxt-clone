import React from "react";
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";

const reviews = [
  {
    rating: 5,
    title: "Conventional to combi",
    body: `i had my old, conventional bolier changed to a combi/ it was uch more affordable thr...`,
    author: "Molly",
    time: "8 minutes ago",
  },
  {
    rating: 4,
    title: "Excellent service.",
    body: "Excellent service.",
    author: "customernewman",
    time: "10 minutes ago",
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
        <AiFillStar key={index} className="text-success me-1" />
      ))}
    </div>
  );
};

const ReviewCard = ({ review }) => {
  const bodyText = truncateText(review.body, 150);

  return (
    <div
      className="card mx-2 border-0"
      style={{
        maxWidth: "300px",
        minHeight: "200px",
        backgroundColor: "#F8F9FA",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="card-body d-flex flex-column">
        <StarRating rating={review.rating} />
        <p className="card-title fw-bold" style={{ fontSize: "0.9rem" }}>
          {review.title}
        </p>
        <p className="card-text" style={{ fontSize: "0.85rem" }}>
          {bodyText}
        </p>
        <small className="text-muted mt-auto">
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
