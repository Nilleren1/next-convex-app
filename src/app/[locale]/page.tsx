"use client";
import React from "react";
import Image from "next/image";
import containerImage from "@public/pc-image.webp";
import { useTranslations } from "next-intl";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

export default function Home() {
  const t = useTranslations("HomePage");
  const [api, setApi] = React.useState<CarouselApi>();
  const [autoPlay, setAutoPlay] = React.useState(true);
  const intervalTime = 4000;

  React.useEffect(() => {
    if (!api || !autoPlay) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, intervalTime);

    return () => clearInterval(interval);
  }, [api, autoPlay]);

  return (
    <>
      <div className="grid grid-cols-6 sm:grid-rows-[2fr_1fr] gap-5 sm:h-[80vh] h-auto">
        {/* Row 1: Two large containers */}
        <div className="page-container sm:col-span-3 col-span-6 p-8">
          <h1 className="text-xl font-medium mb-2">{t("title")}</h1>
          <div className="space-y-4">
            <p>{t("message1")}</p>
            <p>{t("message2")}</p>
            <p>
              {t("message3")}
              <br />
              <a
                className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                href="https://www.linkedin.com/in/nicolai-hogsbjerg"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.linkedin.com/in/nicolai-hogsbjerg
              </a>
            </p>
          </div>
        </div>

        
        <Carousel
          setApi={setApi}
          className="page-container sm:col-span-3 col-span-6"
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                    <span className="text-4xl font-semibold">{index + 1}</span>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        

        {/* Row 2: Three smaller containers */}
        <div className="page-container sm:col-span-2 col-span-6 p-8">Small Container 1</div>
        <div className="page-container sm:col-span-2 col-span-6 p-8">Small Container 2</div>
        <div className="page-container sm:col-span-2 col-span-6 p-8">Small Container 3</div>
      </div>
    </>
  );
}