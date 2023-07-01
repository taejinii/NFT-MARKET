"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { NFTCollectionList } from "@/types/types";
import { Autoplay } from "swiper";
import Image from "next/image";
import "swiper/css";
import "./carousel.css";
import { Dispatch, SetStateAction } from "react";
export default function BestCollectionSlider({
  data,
  setSelectedImg,
}: {
  data?: NFTCollectionList;
  setSelectedImg: Dispatch<SetStateAction<string>>;
}) {
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
      {data?.nfts.map((nft) => {
        return (
          <SwiperSlide
            key={nft.token_id}
            onClick={() => setSelectedImg(nft.image)}
          >
            <Image
              src={nft.image}
              alt={nft.name}
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
