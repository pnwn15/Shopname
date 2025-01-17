import React from 'react'

function Card() {
  return (
    <div className="flex justify-center mt-20 flex-wrap mx-16 gap-6 p-8">
  {[
    {
      id: 1,
      imageSrc: "/picture/notebookgame.jpg",
      title: "Everything You Need to Work From Home...",
      description: "Many of our clients were surprised by the incredible assortment of products in our store. You...",
    },
    {
      id: 2,
      imageSrc: "/picture/notebookgame.jpg",
      title: "The Best Wireless Earbuds",
      description: "Home electronics satisfy our wishes and make our life more pleasant. We must admit that our...",
    },
    {
      id: 3,
      imageSrc: "/picture/notebookgame.jpg",
      title: "The Best Mechanical Keyboards for Wor...",
      description: "Comfort is a very important thing nowadays because it is a condition of satisfaction and calmness....",
    },
  ].map((card) => (
    <div
      key={card.id}
      className="w-80 h-80 bg-white border border-gray-300 shadow-lg flex flex-col overflow-hidden"
    >
      <img
        src={card.imageSrc}
        alt={card.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex-1 flex flex-col  text-center">
        <h3 className="text-base font-semibold text-gray-800">{card.title}</h3>
        <p className="text-xs text-gray-600 mt-2">{card.description}</p>
      </div>
    </div>
  ))}
</div>

  )
}

export default Card
