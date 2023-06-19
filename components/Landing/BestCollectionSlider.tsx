"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay } from "swiper";
import "./carousel.css";
import "swiper/css";
import "swiper/css/navigation";
export default function BestCollectionSlider() {
  const handleDirection = () => {
    if (typeof window !== "undefined") {
      const windowWidth = window.innerWidth;
      const direction = windowWidth <= 767 ? "horizontal" : "vertical";
      return direction;
    }
    return;
  };
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={4}
      direction={handleDirection()}
      autoplay={{ delay: 1500 }}
      rewind={true}
      loop
      onResize={(swiper) => {
        swiper.changeDirection(handleDirection());
      }}
      modules={[Autoplay]}
    >
      {Array(10)
        .fill(" ")
        .map((_, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                src={`/images/azuki${index + 1}.avif`}
                alt="Best Collection item"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-xl"
              />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}
