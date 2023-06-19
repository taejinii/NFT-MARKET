"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay } from "swiper";
import "./carousel.css";
import "swiper/css";
import "swiper/css/navigation";
export default function BestCollectionSlider() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={4}
      direction="vertical"
      autoplay={{ delay: 1500 }}
      rewind={true}
      loop
      modules={[Autoplay]}
      className="h-full"
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
                className="rounded-xl"
              />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}
