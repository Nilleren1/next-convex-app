"use client";

export default function Home() {

  return (
    <div>
      <div className="grid grid-cols-6 sm:grid-rows-[2fr_1fr] gap-4 p-8 sm:h-[90vh] h-auto sm:mx-15 mx-5">
        {/* Row 1: Two large containers */}
        <div className="page-container sm:col-span-3 col-span-6">Hello dear user</div>
        <div className="page-container sm:col-span-3 col-span-6">Large Container 2</div>

        {/* Row 2: Three smaller containers */}
        <div className="page-container sm:col-span-2 col-span-6">Small Container 1</div>
        <div className="page-container sm:col-span-2 col-span-6">Small Container 2</div>
        <div className="page-container sm:col-span-2 col-span-6">Small Container 3</div>
      </div>
    </div>
  );
}
