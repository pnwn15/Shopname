import React from 'react'

function Promote() {
    const products = [
        { id: 1, name: 'Headphones', price: '200$', imageSrc: '/picture/airpod.jpg' },
        { id: 2, name: 'Iphone16 128Gb', price: '220$', imageSrc: '/picture/iphone2.jpg' },
        { id: 3, name: 'Wireless Headphones', price: '200$', imageSrc: '/picture/headphone1.jpg' },
    ];
    const products1 = [
        { id: 1, name: 'Samsung s2', price: '200$', imageSrc: '/picture/apple.jpg' },
        { id: 2, name: 'apple watch series9', price: '200$', imageSrc: '/picture/apple.jpg' },
        { id: 3, name: 'Samsung 2.4g wireless', price: '200$', imageSrc: '/picture/samsung.jpg' },
    ];
    return (

        <div className="flex flex-col gap-20 justify-center lg:mx-28 md:mx-10 mx-0">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 w-full">
                {/* กรอบแรก */}
                <div className="relative border-2 w-full l border-gray-300 overflow-hidden">
                    <img
                        alt="image 1"
                        src="/picture/xbox.jpg"
                        className="w-full h-80 object-cover"
                    />
                    <div className="absolute top-0 left-3  p-4">
                        <div className="text-start flex flex-col space-y-4 text-white">
                            <h3 className="text-4xl font-semibold">XBOX <br />SERIES X</h3>
                            <a href="#" className="text-sm">SHOP NOW</a>
                        </div>
                    </div>
                </div>
                <div className="relative border-2 border-gray-300 bg-gray-600 overflow-hidden">
                    <img
                        alt="image 1"
                        src="/picture/notebookgame1.jpg"
                        className="w-full h-80 object-cover"
                    />
                    <div className="absolute top-0 left-3  p-4">
                        <div className="text-start flex flex-col space-y-4 text-black">
                            <h3 className="text-4xl font-semibold">XBOX <br />SERIES X</h3>
                            <a href="#" className="text-sm">SHOP NOW</a>
                        </div>
                    </div>
                </div>


            </div>

            <div className='grid space-x-7 space-y-5 lg:grid-cols-3 md:grid-cols-1 grid-cols-1  '>
                <div className="relative h-auto overflow-hidden ">
                    <img
                        alt="image"
                        src="/picture/newipad.jpg"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
                        <div className="text-center text-white">
                            <h3 className="text-base font-normal">FROM $449 <br /><span className='text-2xl font-semibold '>New iPad</span></h3>
                            <a href="#" className="text-xs mt-2 hover:text-indigo-600">SHOP NOW</a>
                        </div>
                    </div>
                </div>

               {/* การ์ด1 */}
<div className="flex flex-col gap-3">
  <h1 className="text-black font-bold text-lg tracking-wider">
    BEST SELLER
  </h1>
  {products.map((product, index) => (
    <div
      key={product.id}
      className={`w-28 h-28 border border-gray-300 rounded-lg shadow-lg gap-3 flex transform transition-all duration-500 opacity-0 animate-slide-up hover:scale-105 hover:shadow-xl`}
      style={{ animationDelay: `${index * 100}ms` }} // เพิ่ม delay ระหว่างแต่ละการ์ด
    >
      <img
        alt={product.name}
        src={product.imageSrc}
        className="w-28 h-28 object-cover transition-transform duration-300 hover:scale-110"
      />
      <div className="p-2">
        {product.name} <br /> {product.price}
      </div>
    </div>
  ))}
</div>

{/* การ์ด2 */}
<div className="flex flex-col gap-3">
  <h1 className="text-black font-bold text-lg tracking-wider">
    ON SALE
  </h1>
  {products1.map((product, index) => (
    <div
      key={product.id}
      className={`w-28 h-28 border border-gray-300 rounded-lg shadow-lg gap-3 flex transform transition-all duration-500 opacity-0 animate-slide-up hover:scale-105 hover:shadow-xl`}
      style={{ animationDelay: `${index * 100}ms` }} // เพิ่ม delay ระหว่างแต่ละการ์ด
    >
      <img
        alt={product.name}
        src={product.imageSrc}
        className="w-28 h-28 object-cover transition-transform duration-300 hover:scale-110"
      />
      <div className="p-2">
        {product.name} <br /> {product.price}
      </div>
    </div>
  ))}
</div>

            </div>
        </div>

    )
}

export default Promote
