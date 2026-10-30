
import React, { useEffect, useRef, useState } from "react";

// Default reviews
const defaultReviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    rating: 5,
    review:
      "A great experience overall. The team was professional, supportive, and maintained clear communication throughout the process.",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Priya Patel",
    rating: 5,
    review:
      "The recruitment process was transparent and well organized. I really appreciate the guidance and support provided by the team.",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Amit Verma",
    rating: 5,
    review:
      "A positive work environment with helpful people. The team provides good opportunities to learn and grow professionally.",
    date: "1 month ago",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    rating: 5,
    review:
      "The overall experience was smooth. Communication was clear, and the team was approachable and helpful.",
    date: "2 months ago",
  },
  {
    id: 6,
    name: "Karan Mehta",
    rating: 5,
    review:
      "Good experience with a supportive team and a professional approach. I would recommend them.",
    date: "2 months ago",
  },
  {
    id: 7,
    name: "Karan Mehta",
    rating: 5,
    review:
      "Good experience with a supportive team and a professional approach. I would recommend them.",
    date: "2 months ago",
  },
  {
    id: 8,
    name: "Karan Mehta",
    rating: 5,
    review:
      "Good experience with a supportive team and a professional approach. I would recommend them.",
    date: "2 months ago",
  },
  {
    id: 9,
    name: "Karan Mehta",
    rating: 5,
    review:
      "Good experience with a supportive team and a professional approach. I would recommend them.",
    date: "2 months ago",
  },
  {
    id: 10,
    name: "Karan Mehta",
    rating: 5,
    review:
      "Good experience with a supportive team and a professional approach. I would recommend them.",
    date: "2 months ago",
  },
  {
    id: 11,
    name: "Karan Mehta",
    rating: 5,
    review:
      "Good experience with a supportive team and a professional approach. I would recommend them.",
    date: "2 months ago",
  },
];

// Google logo
const GoogleLogo = () => (
  <svg viewBox="0 0 48 48" className="h-7 w-7" aria-label="Google">
    <path
      fill="#4285F4"
      d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.8 6.1-15z"
    />
    <path
      fill="#34A853"
      d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.1c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20 20 0 0 0 24 44z"
    />
    <path
      fill="#FBBC05"
      d="M12.6 27.6a12 12 0 0 1 0-7.2v-5.3H5.8a20 20 0 0 0 0 17.8z"
    />
    <path
      fill="#EA4335"
      d="M24 12c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 6 29.5 4 24 4A20 20 0 0 0 5.8 15.1l6.8 5.3C14.2 15.6 18.7 12 24 12z"
    />
  </svg>
);

const GoogleReviewsCarousel = ({
  reviews = defaultReviews,
  title = "What People Say on Google Reviews",
  subtitle = "Many job seekers highlight positive work culture, a transparent recruitment process, and real career growth.",
}) => {
  const carouselRef = useRef(null);
  const autoScrollRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const dragData = useRef({
    startX: 0,
    scrollLeft: 0,
    moved: false,
  });

  // Automatic scrolling
  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel || reviews.length <= 1) return;

    autoScrollRef.current = setInterval(() => {
      if (isPaused || isDragging) return;

      const maxScroll = carousel.scrollWidth - carousel.clientWidth;

      if (carousel.scrollLeft >= maxScroll - 2) {
        carousel.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carousel.scrollBy({
          left: 360,
          behavior: "smooth",
        });
      }
    }, 3500);

    return () => clearInterval(autoScrollRef.current);
  }, [isPaused, isDragging, reviews.length]);

  // Start dragging
  const handleMouseDown = (event) => {
    const carousel = carouselRef.current;

    setIsDragging(true);
    setIsPaused(true);

    dragData.current = {
      startX: event.pageX,
      scrollLeft: carousel.scrollLeft,
      moved: false,
    };
  };

  // Move cards while dragging
  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const carousel = carouselRef.current;
    const distance = event.pageX - dragData.current.startX;

    if (Math.abs(distance) > 5) {
      dragData.current.moved = true;
    }

    carousel.scrollLeft = dragData.current.scrollLeft - distance;
  };

  // Stop dragging
  const stopDragging = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  return (
    <section className="overflow-hidden bg-[#e9f8fb] py-16 sm:py-20 lg:py-24">

      {/* Header */}
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">

        <span className="text-xs font-bold uppercase tracking-[0.25em] text-black sm:text-sm">
          Google Reviews
        </span>

        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          {title}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black sm:text-base">
          {subtitle}
        </p>

      </div>

      {/* Carousel */}
      <div className="relative mt-12">

        <div
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onMouseEnter={() => setIsPaused(true)}
          className={`no-scrollbar flex gap-5 overflow-x-auto px-5 pb-5 sm:gap-6 sm:px-8 lg:px-12 snap-x snap-mandatory ${
            isDragging ? "cursor-grabbing select-none" : "cursor-grab"
          }`}
          style={{
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
            scrollBehavior: isDragging ? "auto" : "smooth",
          }}
        >

          {reviews.map((item) => (
            <article
              key={item.id}
              className="flex min-h-[320px] w-[300px] shrink-0 snap-start flex-col rounded-3xl bg-white p-7 shadow-xl sm:min-h-[340px] sm:w-[350px] sm:p-8"
            >

              {/* Stars */}
              <div className="flex gap-1 text-xl text-[#FBBF24]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>
                    {index < item.rating ? "★" : "☆"}
                  </span>
                ))}
              </div>

              {/* Reviewer */}
              <h3 className="mt-5 text-lg font-bold text-gray-900">
                {item.name}
              </h3>

              {item.date && (
                <p className="mt-1 text-xs text-gray-400">
                  {item.date}
                </p>
              )}

              {/* Review */}
              <p className="mt-4 flex-1 text-sm leading-7 text-gray-600">
                {item.review}
              </p>

              {/* Footer */}
              <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                <GoogleLogo />

                <div>
                  <p className="text-sm font-bold text-gray-800">
                    Google
                  </p>
                  <p className="text-xs font-semibold tracking-wide text-gray-500">
                    Reviews ★★★★★
                  </p>
                </div>
              </div>

            </article>
          ))}

        </div>

        {/* Side fade effects */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-12 bg-gradient-to-r from-[#0B1320] to-transparent sm:block" />

        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-12 bg-gradient-to-l from-[#0B1320] to-transparent sm:block" />

      </div>
    </section>
  );
};

export default GoogleReviewsCarousel;
