import React from 'react'
import Card from '../Component/Card'

function About() {
  return (
    <section className="bg-gray-50 py-12">
    {/* Section 1 */}
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
      {/* รูปภาพ */}
      <div className="lg:w-full md:w-1/3 w-auto">
        <img
          src="/picture/xbox.jpg"
          alt="About Us"
          className="shadow-md max-w-full h-auto"
        />
      </div>
  
      {/* ข้อความ */}
      <div className="lg:w-full md:w-1/3 w-auto">
        <h2 className="text-4xl font-medium text-black mb-4">Our Story</h2>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
        Our store is more than just another average online retailer. We sell not only top quality products, but give our customers a positive online shopping experience. <br />
          Since our establishment in 2010, Fashion's activity has extended from
          developing designer <br />
          clothes to training new designers and stylists at our school.
        </p>
      </div>
    </div>
  
    {/* Section 2 */}
    <div className="container mx-auto px-4 mt-10 flex flex-col md:flex-row items-center gap-8">
      {/* ข้อความ */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-medium text-black mb-4">About Us</h2>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          Our company is dedicated to creating unique and comfortable clothing
          for men and women. <br />
          Since our establishment in 2010, Fashion's activity has extended from
          developing designer <br />
          clothes to training new designers and stylists at our school.
        </p>
      </div>
  
      {/* รูปภาพ */}
      <div className="w-full md:w-1/2">
        <img
          src="/picture/xbox.jpg"
          alt="About Us"
          className="shadow-md max-w-full h-auto"
        />
      </div>
    </div>

    <Card />
  </section>
  
  )
}

export default About
