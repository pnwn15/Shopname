import React from 'react'

function Blog() {
  return (
    <section className="w-screen py-20">
  <h1 className="mb-12 text-center font-sans text-5xl font-bold">Our Blog</h1>
  <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
    {/* ข้อมูลบทความ */}
    {[
      {
        img: "/picture/it1.jpg",
        category: "Jul 03, 2019| 0 comments byMickey Mouse",
        description:
          "Retina. Now in colossal and ginormous.",
        views: "Readmore"
      },
      {
        img: "/picture/it2.jpg",
        category: "Jul 03, 2019| 2 comments byMickey Mouse",
        description:
        "Retina. Now in colossal and ginormous.",
      views: "Readmore"
      },
      {
        img: "/picture/it3.jpg",
        category: "Jul 03, 2019| 4 comments byMickey Mouse",
        description:
          "Retina. Now in colossal and ginormous.",
        views: "Readmore"
      },
    ].map((post, index) => (
      <article
        key={index}
        className="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg"
      >
        <img
          className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48"
          src={post.img}
          alt={post.title}
        />
        <h2 className="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">
          {post.category}
        </h2>
        <div className="py-1 px-6">
          <p className="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">
            {post.description}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-between px-6 pt-1 pb-4">
          <div className="mt-1">
            <span className="mr-3 ml-auto inline-flex items-center py-1 pr-3 text-sm leading-none text-black  md:ml-0 lg:ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              {post.views}
            </span>
          </div>
        </div>
      </article>
    ))}
  </div>
</section>

  )
}

export default Blog
