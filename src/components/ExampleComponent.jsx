import React, { useState } from "react";

const ExampleComponent = () => {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <>
      <div className="border border-[#1F1D2B]">
        <h3 className="text-[20px] text-white font-semibold">Orders #34562</h3>
        <ul className="mt-[24px] flex items-center gap-[8px]">
          <li
            className={`${
              activeItem === 1
                ? "text-white bg-[#EA7C69] rounded-[8px] font-[sans-serif] w-[66px] h-[34px] text-[14px] font-semibold flex items-center justify-center border border-[#EA7C69]"
                : "text-[#EA7C69] rounded-[8px] font-[sans-serif] w-[66px] h-[34px] text-[14px] font-semibold flex items-center justify-center border border-[#393C49]"
            }`}
            onClick={() => setActiveItem(1)}
          >
            Dine In
          </li>
          <li
            className={`${
              activeItem === 2
                ? "text-white bg-[#EA7C69] rounded-[8px] font-[sans-serif] w-[58px] h-[34px] text-[14px] font-semibold flex items-center justify-center border border-[#EA7C69]"
                : "text-[#EA7C69] rounded-[8px] font-[sans-serif] w-[58px] h-[34px] text-[14px] font-semibold flex items-center justify-center border border-[#393C49]"
            }`}
            onClick={() => setActiveItem(2)}
          >
            To Go
          </li>
          <li
            className={`${
              activeItem === 3
                ? "text-white bg-[#EA7C69] rounded-[8px] font-[sans-serif] w-[74px] h-[34px] text-[14px] font-semibold flex items-center justify-center border border-[#EA7C69]"
                : "text-[#EA7C69] rounded-[8px] font-[sans-serif] w-[74px] h-[34px] text-[14px] font-semibold flex items-center justify-center border border-[#393C49]"
            }`}
            onClick={() => setActiveItem(3)}
          >
            Delivery
          </li>
        </ul>
        <div className=" mt-[24px] flex items-center justify-between">
          <p className="text-[16px] text-white font-semibold">Item</p>
          <div className="flex items-center gap-[43px]">
            <p className="text-[16px] text-white font-semibold">Qty</p>
            <p className="text-[16px] text-white font-semibold">Price</p>
          </div>
        </div>
        <hr className="w-full mt-[24px] border border-[#393C49]" />
      </div>
    </>
  );
};

export default ExampleComponent;
