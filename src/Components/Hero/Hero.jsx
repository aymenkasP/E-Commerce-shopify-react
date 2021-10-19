import React from 'react'

export default function Hero() {
    return (
        <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16 container-sm mx-auto max-w-screen-2xl px-4 md:px-8 mt-5">
      <div className="xl:w-5/12 flex flex-col justify-center items-center lg:items-start sm:text-center lg:text-left lg:py-12 xl:py-24">
        <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12 capitalize">
            Amazing UI design for your next project
        </h1>

        <p className="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12 capitalize">
        Amazing templates for  e-commerce marketing sass agency and more...
        </p>

        <form className="w-full md:max-w-md flex gap-2">
          <input placeholder="Email" className="w-full flex-1 bg-gray-50 text-gray-800 placeholder-gray-500 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"/>

          <button className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">Sign up</button>
        </form>
      </div>
      
      <div className="xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg">
        <img src="https://designmodo.com/wp-content/uploads/2021/01/2021-web-design-trends-1.jpg" alt="" className="w-full h-full object-cover object-center" />
      </div>
     
    </section>
    )
}
