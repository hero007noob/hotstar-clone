import React from "react";
import TopCarousel from "../Carousel/TopCarousel";

export default function Home() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #141b29, #0c111b 300px)",
        width: "100%",
        height: "100vh",
        display: "flex",
      }}>
      <TopCarousel />
    </div>
  );
}
