"use client";
import React from 'react'
import Image from "next/image";
import containerImage from "@public/pc-image.webp";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <>
      <div className="grid grid-cols-6 sm:grid-rows-[2fr_1fr] gap-5 sm:h-[80vh] h-auto ">
        {/* Row 1: Two large containers */}
        <div className="page-container sm:col-span-3 col-span-6 p-8"><h1 className="text-xl font-medium mb-2">{t('title')}</h1>
        <div className='space-y-4'>
          <p>{t('message1')}</p>
          <p>{t('message2')}</p>
          <p>{t('message3')}
            <br />
            <a className='text-blue-500 hover:text-blue-700 transition-colors duration-300' href="https://www.linkedin.com/in/nicolai-hogsbjerg">www.linkedin.com/in/nicolai-hogsbjerg</a>
          </p>
        </div>
        </div>
        <div className="page-container sm:col-span-3 col-span-6"><Image src={containerImage} priority sizes="(max-width: 640px) 80vw, 600vw" className="container-image" alt=''></Image></div>

        {/* Row 2: Three smaller containers */}
        <div className="page-container sm:col-span-2 col-span-6 p-8">Small Container 1</div>
        <div className="page-container sm:col-span-2 col-span-6 p-8">Small Container 2</div>
        <div className="page-container sm:col-span-2 col-span-6 p-8">Small Container 3</div>
      </div>
    </>
  );
}
