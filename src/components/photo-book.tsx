"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Photo {
  src: string;
  alt?: string;
}

interface PhotoBookProps {
  photos: Photo[];
}

interface PhotoWithLayout extends Photo {
  gridColumn: string;
  gridRow: string;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function generateRandomLayout(photos: Photo[]): PhotoWithLayout[] {
  const selected = shuffleArray(photos).slice(0, 6);

  const perfectLayouts = [
    [
      { cols: 2, rows: 2 },
      { cols: 2, rows: 1 },
      { cols: 2, rows: 1 },
      { cols: 1, rows: 1 },
      { cols: 1, rows: 1 },
      { cols: 2, rows: 1 },
    ],
    [
      { cols: 2, rows: 2 },
      { cols: 2, rows: 2 },
      { cols: 1, rows: 1 },
      { cols: 1, rows: 1 },
      { cols: 1, rows: 1 },
      { cols: 1, rows: 1 },
    ],
    [
      { cols: 2, rows: 1 },
      { cols: 2, rows: 1 },
      { cols: 2, rows: 1 },
      { cols: 2, rows: 1 },
      { cols: 2, rows: 1 },
      { cols: 2, rows: 1 },
    ],
    [
      { cols: 2, rows: 2 },
      { cols: 1, rows: 2 },
      { cols: 1, rows: 2 },
      { cols: 1, rows: 1 },
      { cols: 1, rows: 1 },
      { cols: 2, rows: 1 },
    ],
    [
      { cols: 1, rows: 3 },
      { cols: 1, rows: 3 },
      { cols: 1, rows: 3 },
      { cols: 1, rows: 3 },
      { cols: 0, rows: 0 },
      { cols: 0, rows: 0 },
    ],
  ];

  const chosenLayout =
    perfectLayouts[Math.floor(Math.random() * perfectLayouts.length)];

  return selected
    .map((photo, idx) => ({
      ...photo,
      gridColumn:
        chosenLayout[idx].cols > 0
          ? `span ${chosenLayout[idx].cols}`
          : "span 1",
      gridRow:
        chosenLayout[idx].rows > 0
          ? `span ${chosenLayout[idx].rows}`
          : "span 1",
    }))
    .filter((_, idx) => chosenLayout[idx].cols > 0);
}

export function PhotoBook({ photos }: PhotoBookProps) {
  const [displayPhotos, setDisplayPhotos] = useState<PhotoWithLayout[]>([]);

  useEffect(() => {
    setDisplayPhotos(generateRandomLayout(photos));
  }, [photos]);

  return (
    <div className="w-full bg-white">
      <div
        className="max-w-6xl mx-auto"
        style={{ maxHeight: "600px", height: "600px" }}
      >
        <div className="grid grid-cols-4 auto-rows-[200px] gap-4 h-full">
          {displayPhotos.map((photo, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden"
              style={{
                gridColumn: photo.gridColumn,
                gridRow: photo.gridRow,
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt || "Photo"}
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 50vw, 33vw"
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
