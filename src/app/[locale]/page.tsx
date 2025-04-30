"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

export default function Home() {
  const t = useTranslations("HomePage");
  const [api, setApi] = React.useState<CarouselApi>();
  const [autoPlay] = React.useState(true);
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
      <div className="grid grid-cols-1 sm:grid-cols-6 grid-rows-[auto_auto] gap-5 h-auto">
        {/* Row 1: Two large containers */}
        <div className="page-container sm:col-span-3 p-8">
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
          className="page-container sm:col-span-3"
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent>
            <CarouselItem className="relative h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden rounded-md">
              <Image
                src="/pc-image.webp"
                alt="PC Image"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </CarouselItem>
            <CarouselItem className="relative h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden rounded-md">
              <Image
                src="/modern-development.webp"
                alt="Globe Image"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </CarouselItem>
            <CarouselItem className="relative h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden rounded-md">
              <Image
                src="/innovation.webp"
                alt="Window Image"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        {/* Row 2: Three smaller containers */}
        <div className="page-container sm:col-span-2 p-8">Small Container 1</div>
        <div className="page-container sm:col-span-2 p-8">Small Container 2</div>
        <div className="page-container sm:col-span-2 p-8">Small Container 3</div>
      </div>
    </>
  );
}