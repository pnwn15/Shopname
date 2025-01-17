import React from 'react'
import SlickBar from '../Component/SlickBar'

function Shop() {
    const products = [
        {
          id: 1,
          name: 'Razer',
          href: '#',
          imageSrc: '/picture/notebookgame.jpg',
          price: '$18000',
          color: 'grey',
        },
        {
          id: 2,
          name: 'lenovo',
          href: '#',
          imageSrc: '/picture/lenovo.jpg',
          price: '$15000',
          color: 'grey',
        },
        {
          id: 3,
          name: 'Razer',
          href: '#',
          imageSrc: '/picture/notebookgame1.jpg',
          price: '$18000',
          color: 'black',
        },
        {
          id: 4,
          name: 'ipad',
          href: '#',
          imageSrc: '/picture/ipad.jpg',
          price: '$18000',
          color: 'grey',
        },
        {
          id: 5,
          name: 'ipad',
          href: '#',
          imageSrc: '/picture/ipad1.jpg',
          price: '$18000',
          color: 'pink',
        },
        {
          id: 6,
          name: 'hua',
          href: '#',
          imageSrc: '/picture/hua.jpg',
          price: '$20000',
          color: 'grey',
        },
        {
          id: 6,
          name: 'headphone',
          href: '#',
          imageSrc: '/picture/headphone.jpeg',
          price: '$18000',
          color: 'grey',
        },
        {
          id: 6,
          name: 'headphone',
          href: '#',
          imageSrc: '/picture/headphone1.jpg',
          price: '$18000',
          color: 'grey',
        },
        {
          id: 6,
          name: 'bootup',
          href: '#',
          imageSrc: '/picture/bootup.jpg',
          price: '$18000',
          color: 'grey',
        },
        
        // More products...
      ]
      
  return (
    
          <div className="bg-white ">
            <SlickBar />
            <div className='bg-gray-500 text-white p-4'>
            Home -- Products
            </div>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  <h2 className="text-4xl font-bold tracking-tight flex justify-center text-gray-900">Products</h2>

  {/* ช่องค้นหาและตัวกรอง */}
<div className="mt-6 flex justify-center items-center ">
  <div className="flex flex-wrap ">
    {/* ค้นหาสินค้า */}
    <input
      type="text"
      placeholder="Search products"
      className="w-72 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
    
    {/* ตัวกรองประเภทสินค้า */}
    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
      <option value="">Select category</option>
      <option value="clothing">Clothing</option>
      <option value="electronics">Electronics</option>
      <option value="accessories">Accessories</option>
      {/* เพิ่มหมวดหมู่สินค้าอื่น ๆ ได้ */}
    </select>
  </div>
</div>


  {/* แสดงรายการสินค้า */}
  <div className="mt-6 grid grid-cols-2 gap-10 gap-y-10 lg:mx-36 md:mx-0 mx-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
    {products.map((product) => (
      <div key={product.id} className="group relative max-w-sm mx-auto">
        <img
          alt={product.imageAlt}
          src={product.imageSrc}
          className="aspect-square w-full h-48 rounded-lg bg-gray-200 object-cover transition duration-300 ease-in-out transform group-hover:scale-105 group-hover:opacity-75"
        />
        <div className="mt-4 flex justify-between items-center">
          <div className="flex flex-col">
            {/* แสดงดาวคะแนน */}
            <div className="mt-2 flex">
              {Array.from({ length: 5 }, (_, index) => (
                <svg
                  key={index}
                  className={`w-4 h-4 ${index < product.rating ? 'text-yellow-400' : 'text-yellow-400'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15.27l5.18 3.73-1.64-6.91L19 7.24l-7.19-.61L10 0 8.19 6.63 1 7.24l4.46 5.85-1.64 6.91L10 15.27z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <h3 className="text-sm font-medium text-gray-700 truncate">
              <a href={product.href} className="hover:text-indigo-600">
                {product.name}
              </a>
            </h3>
            <p className="mt-1 text-xs text-gray-500">{product.color}</p>
          </div>
          <p className="text-sm font-semibold text-gray-900">{product.price}</p>
        </div>
      </div>
    ))}
  </div>
</div>

          </div>
        )
      }
    
export default Shop
