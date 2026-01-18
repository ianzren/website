"use client";

import { useRef, useState } from "react";

type AlbumSectionProps = {
  title: string;
  description?: string | string[];
  images: { src: string; alt?: string }[];
};

export function AlbumSection({
  title,
  description,
  images,
}: AlbumSectionProps) {
  const descriptions = description
    ? Array.isArray(description)
      ? description
      : [description]
    : [];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const scrollAmount = 400;
    const newScrollLeft =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({ left: newScrollLeft, behavior: "smooth" });

    const imageWidth = 400;
    const newIndex = Math.round(newScrollLeft / imageWidth);
    setCurrentIndex(Math.max(0, Math.min(newIndex, images.length - 1)));
  };

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold mb-6">{title}</h2>
        {descriptions.length > 0 && (
          <div className="space-y-4 max-w-2xl">
            {descriptions.map((paragraph, index) => (
              <p key={index} className="text-base">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="relative max-w-3xl">
        <div ref={scrollRef} className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-2">
            {images.map((image, index) => (
              <div key={index} className="shrink-0 h-80">
                <img
                  src={image.src}
                  alt={image.alt || `${title} image ${index + 1}`}
                  className="h-full w-auto object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/5 transition-colors"
              aria-label="Scroll left"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/5 transition-colors"
              aria-label="Scroll right"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="text-sm text-black/50">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </section>
  );
}
