import React from 'react'

export default function Reviews() {
    return (
        <>
               <div className="bg-white py-6 sm:py-8 lg:py-12 mb-10">
  <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12">What others say about us</h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-12 lg:divide-x">
     {/*  <!-- quote - start --> */}
      <div className="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
        <div className="text-gray-600 text-center">
          “This is a section of some simple filler text, also known as placeholder text.”
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
          <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112" loading="lazy" alt="Radu Florin" className="w-full h-full object-cover object-center" />
          </div>

          <div>
            <div className="text-indigo-500 text-sm md:text-base font-bold text-center sm:text-left">John McCulling</div>
            <p className="text-gray-500 text-sm md:text-sm text-center sm:text-left">CEO / Datadrift</p>
          </div>
        </div>
      </div>
    {/*   <!-- quote - end -->

      <!-- quote - start --> */}
      <div className="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
        <div className="text-gray-600 text-center">
          “This is a section of some simple filler text, also known as placeholder text.”
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
          <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112" loading="lazy" alt=" christian ferrer" className="w-full h-full object-cover object-center" />
          </div>

          <div>
            <div className="text-indigo-500 text-sm md:text-base font-bold text-center sm:text-left">Kate Berg</div>
            <p className="text-gray-500 text-sm md:text-sm text-center sm:text-left">CFO / Dashdash</p>
          </div>
        </div>
      </div>
    {/*   <!-- quote - end --> */}

      {/* <!-- quote - start --> */}
      <div className="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
        <div className="text-gray-600 text-center">
          “This is a section of some simple filler text, also known as placeholder text.”
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
          <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=500" loading="lazy" alt="" className="w-full h-full object-cover object-center" />
          </div>

          <div>
            <div className="text-indigo-500 text-sm md:text-base font-bold text-center sm:text-left">Greg Jackson</div>
            <p className="text-gray-500 text-sm md:text-sm text-center sm:text-left">CTO / Uptime</p>
          </div>
        </div>
      </div>
      {/* <!-- quote - end --> */}
    </div>
  </div>
</div>
        </>
    )
}
