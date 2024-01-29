import React from "react";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

const HeroBanner = ({ bannerData }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{bannerData.smallText}</p>
        <h3 className="font-bold">{bannerData.midText}</h3>
        <h1 className="font-bold">{bannerData.largeText1}</h1>
        <img
          src={urlForImage(bannerData.image)}
          className="hero-banner-image"
          alt="hero-banner"
        />
        <div>
          <Link href={`/product/${bannerData.product}`}>
            <button type="button">{bannerData.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>DESCRIPTION</h5>
            <p>{bannerData.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
