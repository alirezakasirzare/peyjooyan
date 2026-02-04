"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import { Link } from "~/i18n/navigation";
import pureData from "~/data/news.json";
import { formatDate } from "~/lib/utils";
import { useLocale } from "next-intl";
import { useState } from "react";

type Slide = {
  id: number;
  src: string;
  date: Date;
  title: string;
};

const data = {
  en: pureData.enNews,
  fa: pureData.faNews,
};

export const Slider = () => {
  const locale = useLocale();
  const [activeIndex, setActiveIndex] = useState(0);
  const slidersData = data[locale];
  const items: Slide[] = slidersData.map((item) => ({
    id: item.id,
    src: item.src,
    date: new Date(item.date),
    title: item.title,
  }));

  return (
    <div className="max-w-[300px] mx-auto">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        onSlideChange={(e) => {
          setActiveIndex(e.activeIndex);
        }}
      >
        {items.map((item, i) => (
          <SwiperSlide key={i} className="relative">
            <Link href={`/news/${item.id}`}>
              {activeIndex !== i && (
                <div className="absolute inset-0 bg-background/50"></div>
              )}
              <Image src={item.src} alt="workers" width={300} height={600} />
              <div className="absolute left-1/2 -translate-x-1/2 bottom-12 font-title w-full px-10 text-xl">
                {item.title}
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 bg-[url('/images/slider/shape.svg')] h-[23px] w-[117px] bg-cover flex justify-center items-center text-primary font-title">
                {formatDate(item.date)}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
