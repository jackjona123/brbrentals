import React from "react";
import style from "../style/heroSection.module.css";

export default function HeroSection() {
  return (
    <div
      className={style.HeroSection}
      style={{ backgroundImage: "url('/images/heroSectionBg.webp')" }}
    >
      <h1>Go Far Away</h1>
      <a href="https://brbrentals.jackjona.live"><button>Explore nearby stays</button></a>
    </div>
  );
}
