"use client";
import React from 'react'
import Image from "next/image";
import containerImage from "../../public/pc-image.webp";

export default function Home() {

  return (
    <div>
      <div className="grid grid-cols-6 sm:grid-rows-[2fr_1fr] gap-4 p-8 sm:h-[90vh] h-auto sm:mx-15 mx-5">
        {/* Row 1: Two large containers */}
        <div className="page-container sm:col-span-3 col-span-6 p-8">Hello dear user</div>
        <div className="page-container sm:col-span-3 col-span-6"><Image src={containerImage} priority sizes="(max-width: 640px) 80vw, 600vw" className="container-image" alt=''></Image></div>

        {/* Row 2: Three smaller containers */}
        <div className="page-container sm:col-span-2 col-span-6 p-8">Small Container 1</div>
        <div className="page-container sm:col-span-2 col-span-6 p-8">Small Container 2</div>
        <div className="page-container sm:col-span-2 col-span-6 p-8">Small Container 3</div>
      </div>
    </div>
  );
}
