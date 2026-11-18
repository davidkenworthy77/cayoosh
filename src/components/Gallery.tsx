"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { images, type ImageName } from "@/data/images";

type Props = {
  items: ImageName[];
  layout: "masonry" | "grid";
};

/** Split items into two columns, always adding to the shorter one (masonry). */
function toColumns(items: ImageName[]) {
  const columns: { name: ImageName; index: number }[][] = [[], []];
  const heights = [0, 0];
  items.forEach((name, index) => {
    const { width, height } = images[name];
    const target = heights[0] <= heights[1] ? 0 : 1;
    columns[target].push({ name, index });
    heights[target] += height / width + 0.105; // + gap, relative to column width
  });
  return columns;
}

export function Gallery({ items, layout }: Props) {
  const [current, setCurrent] = useState<number | null>(null);

  const close = useCallback(() => setCurrent(null), []);
  const step = useCallback(
    (delta: number) =>
      setCurrent((value) =>
        value === null ? value : (value + delta + items.length) % items.length,
      ),
    [items.length],
  );

  useEffect(() => {
    if (current === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.add("menu-open");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("menu-open");
    };
  }, [current, close, step]);

  const thumb = (name: ImageName, index: number) => {
    const image = images[name];
    return (
      <button
        key={name}
        type="button"
        className="gallery-item"
        onClick={() => setCurrent(index)}
      >
        <Image
          src={image.src}
          alt=""
          width={image.width}
          height={image.height}
          sizes="(max-width: 767px) 100vw, 46vw"
        />
        <span className="visually-hidden">View fullsize</span>
      </button>
    );
  };

  return (
    <section className={`gallery gallery--${layout}`}>
      {layout === "masonry" ? (
        toColumns(items).map((column, i) => (
          <div key={i} className="gallery-column">
            {column.map(({ name, index }) => thumb(name, index))}
          </div>
        ))
      ) : (
        items.map((name, index) => thumb(name, index))
      )}

      {current !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer">
          <button type="button" className="lightbox-close" onClick={close} aria-label="Close">
            <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
              <path d="M10 10l20 20M30 10L10 30" stroke="currentColor" fill="none" />
            </svg>
          </button>
          <button
            type="button"
            className="lightbox-arrow lightbox-arrow--prev"
            onClick={() => step(-1)}
            aria-label="Previous"
          >
            <svg viewBox="0 0 44 18" width="44" height="18" aria-hidden="true">
              <path d="M9 1L1 9l8 8M2 9h42" stroke="currentColor" fill="none" />
            </svg>
          </button>
          <div className="lightbox-stage" onClick={close}>
            <Image
              key={items[current]}
              src={images[items[current]].src}
              alt=""
              fill
              sizes="100vw"
            />
          </div>
          <button
            type="button"
            className="lightbox-arrow lightbox-arrow--next"
            onClick={() => step(1)}
            aria-label="Next"
          >
            <svg viewBox="0 0 44 18" width="44" height="18" aria-hidden="true">
              <path d="M35 1l8 8-8 8M42 9H0" stroke="currentColor" fill="none" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
