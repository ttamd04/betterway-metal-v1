"use client";

import { useEffect, useRef } from "react";

type Review = {
  name: string;
  rating: number;
  text: string;
  timeAgo: string;
  initials: string;
  bgColor: string;
};

const reviews: Review[] = [
  {
    name: "James Mitchell",
    rating: 5,
    text: "Best scrap metal prices in the area, hands down. Brought in a load of copper pipe and aluminium and got a fair deal without any haggling. The guys were quick to unload and I was in and out in under 10 minutes. Will definitely be back.",
    timeAgo: "2 weeks ago",
    initials: "JM",
    bgColor: "#4285F4",
  },
  {
    name: "Sarah Thompson",
    rating: 5,
    text: "Really impressed with how professional and friendly the team is. I had a bunch of old appliances and cables sitting in my garage for months. Dropped them off here and got paid on the spot. Clean yard, easy process. Highly recommend!",
    timeAgo: "1 month ago",
    initials: "ST",
    bgColor: "#EA4335",
  },
  {
    name: "David Nguyen",
    rating: 5,
    text: "Took in some old car batteries and a few motors from a renovation job. They weighed everything properly and the price was better than two other places I called. Honest business — exactly what you want from a scrap yard.",
    timeAgo: "3 weeks ago",
    initials: "DN",
    bgColor: "#34A853",
  },
  {
    name: "Lisa Crawford",
    rating: 4,
    text: "Great experience overall. Dropped off a trailer load of mixed steel and stainless steel. The staff sorted everything quickly and gave me a fair price. Only reason for 4 stars is the yard can get a bit busy on weekends, so go early.",
    timeAgo: "1 month ago",
    initials: "LC",
    bgColor: "#FBBC05",
  },
  {
    name: "Michael Russo",
    rating: 5,
    text: "Been coming here for years and the service is always top notch. They know their metals and always give you an honest price. I've recommended Betterway to all my mates in the trade. Don't bother going anywhere else in Parramatta.",
    timeAgo: "2 months ago",
    initials: "MR",
    bgColor: "#4285F4",
  },
  {
    name: "Rachel Kim",
    rating: 5,
    text: "First time selling scrap and I had no idea what I was doing. The team here was super patient, explained everything, and gave me a really fair price for my old brass fittings and copper wire. Felt very comfortable — great for beginners!",
    timeAgo: "3 weeks ago",
    initials: "RK",
    bgColor: "#EA4335",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-4 w-4 ${star <= rating ? "text-[#FBBC05]" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="mx-3 w-[340px] flex-shrink-0 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      {/* Header: avatar + name + Google logo */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white"
            style={{ backgroundColor: review.bgColor }}
          >
            {review.initials}
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">{review.name}</p>
            <p className="text-xs text-gray-500">{review.timeAgo}</p>
          </div>
        </div>
        <GoogleLogo />
      </div>

      {/* Star rating */}
      <div className="mt-3">
        <StarRating rating={review.rating} />
      </div>

      {/* Review text */}
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        {review.text}
      </p>
    </div>
  );
}

export default function ReviewCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollPos = 0;
    const speed = 0.5; // pixels per frame

    function animate() {
      if (!isPausedRef.current && container) {
        scrollPos += speed;
        // Reset when we've scrolled through the first set of reviews
        const halfWidth = container.scrollWidth / 2;
        if (scrollPos >= halfWidth) {
          scrollPos = 0;
        }
        container.scrollLeft = scrollPos;
      }
      animationRef.current = requestAnimationFrame(animate);
    }

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  // Duplicate reviews for seamless infinite scroll
  const allReviews = [...reviews, ...reviews];

  return (
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-bg to-transparent" />

      {/* Scrolling container */}
      <div
        ref={scrollRef}
        className="flex overflow-hidden py-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {allReviews.map((review, index) => (
          <ReviewCard key={`${review.name}-${index}`} review={review} />
        ))}
      </div>
    </div>
  );
}
