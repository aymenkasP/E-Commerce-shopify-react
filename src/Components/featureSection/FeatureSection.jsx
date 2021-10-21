import React from 'react'
import { FaShippingFast } from 'react-icons/fa';
import { GiReturnArrow } from 'react-icons/gi';
import { MdSupportAgent } from 'react-icons/md';

export default function FeatureSection() {
    return (
        <>
            <div className="bg-white py-6 sm:py-8 lg:py-12 text-left">
  <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
   {/*  <!-- text - start --> */}
    <div className="mb-10 md:mb-16">
      <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Our competitive advantage</h2>
    </div>
   {/*  <!-- text - end --> */}

    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-16 capitalize">
      {/* <!-- feature - start --> */}
      <div className="flex gap-4 md:gap-6">
        <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center flex-shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg text-2xl">
         <FaShippingFast />
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-2">free and fast Shipping</h3>
          <p className="text-gray-500 mb-2">free and fast shipping world wide</p>
        </div>
      </div>
      {/* <!-- feature - end -->

      <!-- feature - start --> */}
      <div className="flex gap-4 md:gap-6">
        <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center flex-shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg text-2xl">
          <GiReturnArrow />
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-2">free return</h3>
          <p className="text-gray-500 mb-2">you can return the product if you dont like it in 30 days</p>
        </div>
      </div>
      {/* <!-- feature - end -->

      <!-- feature - start --> */}
      <div className="flex gap-4 md:gap-6">
        <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center flex-shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg text-2xl">
          <MdSupportAgent />
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-2">7/24 support</h3>
          <p className="text-gray-500 mb-2">you can contact us in any time</p>
          
        </div>
      </div>
      {/* <!-- feature - end -->*/}
    </div>
  </div>
</div>
        </>
    )
}
