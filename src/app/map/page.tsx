"use client";

import { useEffect, useRef } from "react";
import maplibregl, { LngLat, LngLatBounds } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Protocol } from "pmtiles";
import { layers, namedFlavor } from "@protomaps/basemaps";

const MAX_BOUNDS: LngLatBounds = new LngLatBounds(
  new LngLat(-0.581752, 51.242783),
  new LngLat(0.316165, 51.734622),
);

export default function MapPage() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (map.current) return;

    const protocol = new Protocol();
    maplibregl.addProtocol("pmtiles", protocol.tile);

    map.current = new maplibregl.Map({
      container: mapContainer.current!,
      style: {
        version: 8,
        glyphs:
          "https://protomaps.github.io/basemaps-assets/fonts/{fontstack}/{range}.pbf",
        sprite: "https://protomaps.github.io/basemaps-assets/sprites/v4/light",
        sources: {
          protomaps: {
            type: "vector",
            url: "pmtiles://https://ianzren.github.io/london-tiles/london.pmtiles",
            attribution:
              '<a href="https://protomaps.com">Protomaps</a> © <a href="https://openstreetmap.org">OpenStreetMap</a>',
          },
        },
        layers: layers("protomaps", namedFlavor("white"), { lang: "en" }),
      },
      center: [-0.1276, 51.5074],
      zoom: 9,
      maxBounds: MAX_BOUNDS,
    });

    setTimeout(() => {
      map.current?.resize();
    }, 100);

    return () => {
      map.current?.remove();
      maplibregl.removeProtocol("pmtiles");
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{ width: "100%", height: "100vh", maxHeight: "600px" }}
    />
  );
}
