import React from "react";

const GridComponent = () => {
  // ข้อมูลสำหรับแต่ละไอเท็ม
  const items = [
    {
        id: 1,
        title: "Audio",
        description: "Get 20% off",
        description1: "Shop now",
        image: "/picture/micro.png",
        textColor: "text-black", // สีฟอนต์ที่แตกต่างกัน
      },
      {
        id: 2,
        title: "Laptops",
        description: "Get 20% off",
        description1: "Shop now",
        image: "/picture/labtops.jpg",
        textColor: "text-white",
      },
      {
        id: 3,
        title: "Tablets",
        description: "Get 20% off",
        description1: "Shop now",
        image: "/picture/tablet.jpg",
        textColor: "text-black",
      },
      {
        id: 4,
        title: "Smarthome",
        description: "Get 20% off",
        description1: "Shop now",
        image: "/picture/smart.jpg",
        textColor: "text-white",
      },  
  ];

  const items1 = [
    { id: 1, title: "Notebooks, Tablets", icon: "/picture/notebook.png" },
    { id: 2, title: "Software", icon: "/picture/software.png" },
    { id: 3, title: "Smartphones, GPS", icon: "/picture/smartphone.png" },
    { id: 4, title: "TV / Games", icon: "/picture/tv.png" },
    { id: 5, title: "Hardware", icon: "/picture/hardware.png" },
    { id: 6, title: "Foto / Video", icon: "/picture/camera.png" },
  ];
  return (
    <div className="p-4">
      {/* กรอบสี่เหลี่ยม */}
      <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
  {items.map((item, index) => (
    <div
      key={item.id}
      className={`relative flex flex-col justify-end bg-white shadow-md overflow-hidden h-48 transform transition-transform duration-500 ease-out opacity-0 animate-slide-up`}
      style={{ animationDelay: `${index * 200}ms` }} // เพิ่มดีเลย์ให้แต่ละคอมโพเนนต์
    >
      {/* รูปภาพ */}
      <img
        src={item.image}
        alt={item.title}
        className="absolute opacity-90 inset-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"
      />
      {/* เลเยอร์ข้อความ */}
      <div className="relative z-10 p-4 mb-12 space-y-6 ">
        <h2 className={`text-base font-bold ${item.textColor}`}>{item.title}</h2>
        <p className={`text-2xl font-extrabold ${item.textColor}`}>{item.description}</p>
        <a href="#" className={`text-sm font-extrabold ${item.textColor} hover:underline`}>
          {item.description1}
        </a>
      </div>
    </div>
  ))}
</div>

    </div>
    <div className="p-6 flex justify-center flex-wrap gap-6">
      {/* กรอบสินค้า */}
      <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {items1.map((item, index) => (
    <div
      key={item.id}
      className={`flex items-center justify-center border gap-5 border-gray-300 p-6 shadow-sm transform transition-transform duration-500 ease-out opacity-0 animate-slide-up hover:bg-orange-600 hover:text-white`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* ไอคอน */}
      <img
        src={item.icon}
        alt={item.title}
        className="w-16 h-16 mb-4 object-contain transition-all duration-300 hover:filter hover:brightness-0 hover:invert"
      />
      {/* ชื่อสินค้า */}
      <h2 className="text-sm font-semibold text-center">
        {item.title}
      </h2>
    </div>
  ))}
</div>

     {/* โฆษณาด้านข้าง */}
<div className="relative border lg:w-80 md:w-full w-full border-gray-300 overflow-hidden h-[70vh] sm:h-[70vh] lg:h-[70vh]">
  {/* รูปภาพ */}
  <img
    src="/picture/iphone1.jpg"
    alt="Phone 14 Pro"
    className="absolute inset-0 w-full h-full object-cover"
  />
  {/* ข้อความ */}
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white text-center p-4 sm:p-6">
    <h3 className="text-xs sm:text-sm font-semibold uppercase">
      Designed for Durability
    </h3>
    <h2 className="text-lg sm:text-xl font-bold mt-2 mb-4">
      Phone 14 Pro
    </h2>
    <a
      href="#"
      className="text-xs sm:text-sm font-semibold text-white hover:underline"
    >
      Shop Now
    </a>
  </div>
</div>
    </div>
    </div>
  );
};

export default GridComponent;
