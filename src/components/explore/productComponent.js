import React from "react";
import { productGrid } from "./productsdata";
import { FaAngleRight } from "react-icons/fa6";
function ProductsComponent() {
  return (
    <section className="w-full">
      <div className="text-center font-normal track-[-0.025rem] ">
        <h1 className="text-[2.375rem] text-main_heading">
          Explore Homes On ThePropertyIntels
        </h1>
        <p className="text-[1.25rem] text-sub_heading">
          Elit nulla vel tempus congue ac ultricies sed in ornare
        </p>

        {/* <div className="flex justify-center"> */}
        <div className="productContainer mt-[3.94rem] w-full">
          {productGrid.map(([name]) => (
            <div key={name} className={`relative ${name} bg-red-500 `}>
              <h3 className="text-[1.25rem] text-white font-medium tracking-[-0.05rem] absolute top-[1.87rem] left-[2.13rem]">
                Homes in Ikoyi
              </h3>
              <button className="flex items-center shadow-[0px_0px_10px_0px_rgba(163,163,163,0.25)] border-[1px_solid_rgba(255,255,255,0.11)] text-[0.875rem] tracking-[-0.0175rem] font-bold gap-[0.25rem] text-primary rounded-[6.25rem] bg-[rgba(255,255,255,0.55)] absolute left-[2.13rem] bottom-[1.88rem] p-[0.625rem_0.3125rem_0.625rem_0.875rem]">
                View homes <FaAngleRight className="inline-block" />
              </button>
            </div>
          ))}

          {/* <div className="first bg-red-500"></div>
          <div className="second bg-black"></div>
          <div className="third bg-purple-700"></div>
          <div className="forth bg-orange-500"></div>
          <div className="fifth bg-slate-900"></div>
          <div className="sixth bg-green-500"></div> */}
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}

export default ProductsComponent;
