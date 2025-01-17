import React, { useState } from 'react';

const SlickBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // มี 3 ภาพ
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  return (
    <div className="relative w-full lg:h-[80vh] md:h-[70vh] h-[50vh] max-w-full">
    <div className="overflow-hidden w-full">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {/* Slide 1 */}
        <div className="relative flex-shrink-0 w-full">
          <img
            src="/picture/side1.png"
            alt="Slide 1"
            className="w-full lg:h-[80vh] md:h-[70vh] h-[50vh] object-cover"
          />
          <div className="absolute inset-0 gap-5 flex flex-col items-start lg:top-28 md:top-20 top-10 justify-start lg:left-40 md:left-32 left-14">
            <div className="text-black border bg-white text-sm lg:text-sm md:text-xs sm:text-xs font-bold px-4">
              BEST DEALS
            </div>
            <div className="text-white text-sm lg:text-5xl md:text-3xl sm:text-xl font-bold">
              MacBook Air. <br /> Power. It’s in the Air.
            </div>
            <div className="text-white text-sm lg:text-xl md:text-base sm:text-sm font-normal">
              MacBook Air with M1 is an incredibly <br /> portable laptop. From $999.
            </div>
            <div className="text-black border hover:bg-blue-500 hover:text-white bg-white text-sm lg:text-sm md:text-xs sm:text-xs font-semibold px-4 py-1">
              SHOP NOW
            </div>
          </div>
        </div>
  
        {/* Slide 2 */}
        <div className="relative flex-shrink-0 w-full">
          <img
            src="/picture/side2.png"
            alt="Slide 2"
            className="w-full lg:h-[80vh] md:h-[70vh] h-[50vh] object-cover"
          />
          <div className="absolute inset-0 gap-5 flex flex-col items-start top-28 justify-start lg:left-40 md:left-32 left-14">
            <div className="text-white border bg-black text-sm lg:text-sm md:text-xs sm:text-xs font-bold px-4">
              BEST DEALS
            </div>
            <div className="text-black text-sm lg:text-5xl md:text-3xl sm:text-xl font-bold">
              Apple Pencil <br /> (2nd generation)
            </div>
            <div className="text-black text-sm lg:text-xl md:text-base sm:text-sm font-normal">
              It’s as easy and natural to use as a pencil.
            </div>
            <div className="text-white border hover:text-black hover:bg-red-600 bg-black text-sm lg:text-sm md:text-xs sm:text-xs font-semibold px-4 py-1">
              SHOP NOW
            </div>
          </div>
        </div>
  
        {/* Slide 3 */}
        <div className="relative flex-shrink-0 w-full">
          <img
            src="/picture/side3.png"
            alt="Slide 3"
            className="w-full lg:h-[80vh] md:h-[70vh] h-[50vh] object-cover"
          />
          <div className="absolute inset-0 gap-5 flex flex-col items-start top-28 justify-start lg:left-40 md:left-32 left-14">
            <div className="text-white border bg-black text-sm lg:text-sm md:text-xs sm:text-xs font-bold px-4">
              BEST DEALS
            </div>
            <div className="text-black text-sm lg:text-5xl md:text-3xl sm:text-xl font-bold">
              Beats Studio Buds. <br /> Premium Sound.
            </div>
            <div className="text-black text-sm lg:text-xl md:text-base sm:text-sm font-normal">
              True Wireless Noise Cancelling Earphones
            </div>
            <div className="text-white border hover:text-black hover:bg-red-600 bg-black text-sm lg:text-sm md:text-xs sm:text-xs font-semibold px-4 py-1">
              SHOP NOW
            </div>
          </div>
        </div>
      </div>
    </div>
  
    {/* Dots for navigation */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <div
        onClick={() => setCurrentIndex(0)}
        className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
          currentIndex === 0 ? 'bg-gray-800' : 'bg-gray-300'
        }`}
      ></div>
      <div
        onClick={() => setCurrentIndex(1)}
        className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
          currentIndex === 1 ? 'bg-gray-800' : 'bg-gray-300'
        }`}
      ></div>
      <div
        onClick={() => setCurrentIndex(2)}
        className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
          currentIndex === 2 ? 'bg-gray-800' : 'bg-gray-300'
        }`}
      ></div>
    </div>
  </div>
  
  );
};

export default SlickBar;
