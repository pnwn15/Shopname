import React from 'react'
import Slider from 'react-slick';
import SlickBar from './SlickBar';
function Product() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    const products = [
        {
          id: 1,
          name: 'Boost Up Special Edition Wireles...',
          href: '#',
          imageSrc: '/picture/bootup.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },
        {
          id: 2,
          name: 'Noise Cancelling Headphones',
          href: '#',
          imageSrc: '/picture/headphone.jpeg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },
        {
          id: 3,
          name: 'Wireless Bluetooth Speaker',
          href: '#',
          imageSrc: '/picture/wireless.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },
        {
          id: 4,
          name: 'Boost Up Wireless Charging Dock',
          href: '#',
          imageSrc: '/picture/bootup1.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },
        {
          id: 5,
          name: 'Apple Ipad Air 2 Mh0w2lla 16gb W...',
          href: '#',
          imageSrc: '/picture/ipad.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },
        {
          id: 6,
          name: 'Huawei 12 Matebook 128gb Tablet',
          href: '#',
          imageSrc: '/picture/hua.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },
        {
          id: 7,
          name: 'Lenovo 14 Flex 4 Series Multitou...',
          href: '#',
          imageSrc: '/picture/lenovo.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },
        {
          id: 8,
          name: 'Apple 9.7 Ipad Pro With Apple Sm...',
          href: '#',
          imageSrc: '/picture/ipad1.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },
        // More products...
      ]
  return (
    <div className="bg-white">
        <div className='flex flex-col justify-center'>
   <div className="lg:mx-20  md:mx-20 px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  <div className="flex items-center justify-between flex-wrap">
    <h2 className="text-xl font-medium tracking-tight text-gray-900">Our Product</h2>
    <div className="flex gap-5 flex-wrap">
      <button className="text-sm font-semibold text-gray-900 hover:text-indigo-600">Accessories</button>
      <button className="text-sm font-semibold text-gray-900 hover:text-indigo-600">Bestseller's</button>
      <button className="text-sm font-semibold text-gray-900 hover:text-indigo-600">Sales</button>
    </div>
  </div>

  <div className="mt-6 w-full lg:grid-cols-4 md:grid-cols-4 grid-cols-2">
  <Slider {...settings}>
    {products.map((product) => (
    <div key={product.id} className="group relative ">
    <img
      alt={product.imageAlt}
      src={product.imageSrc}
      className="w-full h-56 object-cover rounded-md bg-gray-200 group-hover:opacity-75 lg:h-56"
    />
    <div className="absolute top-2 right-2 border-2 hover:text-red-500 border-black p-1">
      <button className="text-gray-700 hover:text-red-500">
        <i className="fas fa-heart"></i>
      </button>
    </div>
    <div className="mt-4 flex flex-col justify-center text-center">
      <div className="flex-wrap">
        <h3 className="text-sm text-gray-700">
          <a href={product.href}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </a>
        </h3>
      </div>
      <p className="text-sm font-medium text-gray-900">{product.price}</p>
    </div>
  </div>
  
   
    ))}
  </Slider>
</div>

</div>
</div>
</div>

  )
}

export default Product
