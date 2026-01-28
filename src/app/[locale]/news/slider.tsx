"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";

type Slide = {
  src: string;
  date: Date;
  title: string;
};

export const Slider = () => {
  const items: Slide[] = [
    {
      src: "/images/slider/car.png",
      date: new Date(),
      title: "Workers' Appreciation Ceremony",
    },
    {
      src: "/images/slider/workers.png",
      date: new Date(),
      title: "Workers' Appreciation Ceremony",
    },
    {
      src: "/images/slider/car.png",
      date: new Date(),
      title: "Workers' Appreciation Ceremony",
    },
  ];

  return (
    <div className="w-[300px] mx-auto">
      <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]}>
        {items.map((item, i) => (
          <SwiperSlide key={i} className="relative">
            <Image src={item.src} alt="workers" width={300} height={600} />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-16 font-title w-full px-10">
              {item.title}
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 bg-[url('/images/slider/shape.svg')] h-[23px] w-[117px] bg-cover flex justify-center items-center text-primary font-title">
              {new Intl.DateTimeFormat("en-US").format(item.date)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
