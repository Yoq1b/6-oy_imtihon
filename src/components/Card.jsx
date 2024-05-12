import React from "react";
import data1 from "../db/data.json";

const Card = () => {
  const { data } = data1;
  return (
    <>
      <div>
        <div className="ml-[10px] w-[632px] h-[48px] flex items-center justify-between">
          <h3 className="text-white text-[20px] font-semibold">
            Choose Dishes
          </h3>
          <select
            className="w-[100px] h-[48px] rounded-[8px] text-white outline-none border border-slate-600 bg-[#1F1D2B]"
            name="select"
            id=""
          >
            <option className="p-[50px] text-white" value="">
              <div>
                <p className="text-white">Dine in</p>
              </div>
            </option>
          </select>
        </div>

        <div className="w-[632px] h-[616px] mt-[24px] pt-[34px] pb-[30px]  ml-[10px] grid grid-cols-3 overflow-x-scroll gap-y-[58px] gap-x-[25px]">
          {data.map((product, index) => (
            <div
              key={index}
              className="w-[192px] h-[226px] rounded-[20px] flex flex-col items-center relative bg-[#1F1D2B] hover:cursor-pointer hover:[box-shadow:rgba(0,_0,_0,_0.07)_0px_1px_2px,_rgba(0,_0,_0,_0.07)_0px_2px_4px,_rgba(0,_0,_0,_0.07)_0px_4px_8px,_rgba(0,_0,_0,_0.07)_0px_8px_16px,_rgba(0,_0,_0,_0.07)_0px_16px_32px,_rgba(0,_0,_0,_0.07)_0px_32px_64px] hover:transition-[1s]

"
            >
              <img
                src={product.image} // Ma'lumotlar bazasidan rasm manzilini olib kelayapmiz
                alt="rasm"
                className="w-[132px] h-[132px] absolute top-[-34px]  rounded-[50%]"
              />
              <p className="w-[150px] text-white text-[14px] text-center mt-[110px]">
                {product.name}
              </p>
              <p className="text-[white] text-[14px] my-[5px]">
                $ {product.price}
              </p>
              <p className="text-[#ABBBC2] text-[14px]">
                {product.sale} Bowls available
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
