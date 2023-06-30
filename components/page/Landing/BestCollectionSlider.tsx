"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./carousel.css";
export default function BestCollectionSlider() {
  const handleDirection = () => {
    if (typeof window !== "undefined") {
      const windowWidth = window.innerWidth;
      const direction = windowWidth <= 768 ? "horizontal" : "vertical";
      return direction;
    }
    return;
  };
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      direction={handleDirection()}
      autoplay={{ delay: 1500 }}
      rewind={true}
      loop
      onResize={(swiper) => {
        swiper.changeDirection(handleDirection());
      }}
      breakpoints={{
        375: {
          spaceBetween: 30,
          slidesPerView: 2,
        },
        767: {
          spaceBetween: 20,
          slidesPerView: 4,
        },
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
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="absolute object-cover w-full h-full rounded-xl"
              />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}
