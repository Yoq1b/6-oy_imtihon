import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import data1 from "../db/data.json";

const Navbar = ({ setClick, click }) => {
  const [count, setCount] = useState(1);
  const { data } = data1;
  const [sicil, setSicil] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleClick = (id) => {
    setClick((prevSicil) => {
      if (!prevSicil.includes(id)) {
        return [...prevSicil, id];
      }
      return [...prevSicil, id];
    });
  };
  const filteredData = data.filter((product) =>
    product.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col items-start">
        <div className="w-[1000px]  pt-[24px] pl-[10px] pr-[38px] ">
          <div className="flex  justify-between">
            <div>
              <h1 className="text-[28px]  text-white mb-1  font-semibold ">
                Jaegar Resto
              </h1>
              <p className="text-[16px] text-white font-light">
                Tuesday, 2 Feb 2021
              </p>
            </div>
            <div className="w-[220px] h-[48px] rounded-[8px] border bg-[#393C49] border-slate-600 flex items-center justify-between px-[14px]">
              <form
                className="flex items-center"
                onSubmit={(e) => e.preventDefault()}
              >
                <button>
                  <FiSearch className="text-white w-[20px] h-[20px]" />
                </button>
                <input
                  type="search"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search for food, coffe, etc.."
                  className="bg-[#393C49] text-[14px] text-[#ABBBC2] outline-none"
                />
              </form>
            </div>
          </div>
          <ul className="mt-[24px] flex items-center gap-[32px]">
            <li
              className={
                count == 1
                  ? "  text-[rgb(234,_124,_105)] font-[sans-serif] text-[14px] font-semibold leading-[14px] tracking-[0%] text-left  border-b-4 pb-[10px]  border-[rgb(234,_124,_105)]"
                  : "  text-[rgb(255,_255,_255)] pb-[10px] font-[sans-serif] text-[14px] font-semibold leading-[14px] tracking-[0%] text-left"
              }
              onClick={() => setCount(1)}
            >
              Hot Dishes
            </li>
            <li
              className={
                count == 2
                  ? "  text-[rgb(234,_124,_105)] font-[sans-serif] text-[14px] font-semibold leading-[14px] tracking-[0%] text-left  border-b-4 pb-[10px]  border-[rgb(234,_124,_105)]"
                  : "  text-[rgb(255,_255,_255)] pb-[10px] font-[sans-serif] text-[14px] font-semibold leading-[14px] tracking-[0%] text-left"
              }
              onClick={() => setCount(2)}
            >
              Cold Dishes
            </li>
            <li
              className={
                count == 3
                  ? "  text-[rgb(234,_124,_105)] font-[sans-serif] text-[14px] font-semibold leading-[14px] tracking-[0%] text-left  border-b-4 pb-[10px]  border-[rgb(234,_124,_105)]"
                  : "  text-[rgb(255,_255,_255)] pb-[10px] font-[sans-serif] text-[14px] font-semibold leading-[14px] tracking-[0%] text-left"
              }
              onClick={() => setCount(3)}
            >
              Soup
            </li>
            <li
              className={
                count == 4
                  ? "  text-[rgb(234,_124,_105)] font-[sans-serif] text-[14px] font-semibold leading-[14px] tracking-[0%] text-left  border-b-4 pb-[10px]  border-[rgb(234,_124,_105)]"
                  : "  text-[rgb(255,_255,_255)] pb-[10px] font-[sans-serif] text-[14px] font-semibold leading-[14px] tracking-[0%] text-left"
              }
              onClick={() => setCount(4)}
            >
              Grill
            </li>
            <li
              className={
                count == 5
                  ? "  text-[rgb(234,_124,_105)] font-[sans-serif] text-[14px] font-semibold leading-[14px] tracking-[0%] text-left  border-b-4 pb-[10px]  border-[rgb(234,_124,_105)]"
                  : "  text-[rgb(255,_255,_255)] pb-[10px] font-[sans-serif] text-[14px] font-semibold leading-[14px] tracking-[0%] text-left"
              }
              onClick={() => setCount(5)}
            >
              Appetizer
            </li>
            <li
              className={
                count == 6
                  ? "  text-[rgb(234,_124,_105)] font-[sans-serif] text-[14px] font-semibold leading-[14px] tracking-[0%] text-left  border-b-4 pb-[10px]  border-[rgb(234,_124,_105)]"
                  : "  text-[rgb(255,_255,_255)] pb-[10px] font-[sans-serif] text-[14px] font-semibold leading-[14px] tracking-[0%] text-left"
              }
              onClick={() => setCount(6)}
            >
              Dessert
            </li>
          </ul>
        </div>
        <div>
          <div className="ml-[10px] w-[950px] h-[48px] flex items-center justify-between">
            <h3 className="text-white text-[20px] font-semibold">
              Choose Dishes
            </h3>
            <select
              className="w-[100px] h-[48px] rounded-[8px] text-white outline-none border border-slate-600 bg-[#1F1D2B]"
              name="select"
              id="select"
            >
              <option
                className="p-[50px] text-center h-[90px] text-white"
                value="OPTION"
              >
                Dine in
              </option>
              <option
                className="p-[50px] text-center h-[90px] text-white"
                value="OPTION"
              >
                To Go
              </option>
              <option
                className="p-[50px] text-center h-[90px] text-white"
                value="OPTION"
              >
                Delivery
              </option>
            </select>
          </div>

          <div className="w-full h-[506px]  mt-[24px] pt-[34px] pb-[30px]  ml-[10px] grid grid-cols-4 overflow-x-scroll gap-y-[58px] gap-x-[25px]">
            {count == 1 ? (
              <>
                {filteredData.map((product, index) => (
                  <div
                    onClick={() => handleClick(product.id)}
                    key={index}
                    className="w-[192px] h-[226px] rounded-[20px] flex flex-col items-center relative bg-[#1F1D2B] hover:cursor-pointer hover:[box-shadow:rgba(0,_0,_0,_0.07)_0px_1px_2px,_rgba(0,_0,_0,_0.07)_0px_2px_4px,_rgba(0,_0,_0,_0.07)_0px_4px_8px,_rgba(0,_0,_0,_0.07)_0px_8px_16px,_rgba(0,_0,_0,_0.07)_0px_16px_32px,_rgba(0,_0,_0,_0.07)_0px_32px_64px] hover:transition-[1s]"
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
              </>
            ) : (
              <></>
            )}
            {count == 2 ? (
              <>
                {filteredData.slice(2, 5).map((product, index) => (
                  <div
                    onClick={() => handleClick(product.id)}
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
              </>
            ) : (
              <></>
            )}
            {count == 3 ? (
              <>
                {filteredData.slice(3, 8).map((product, index) => (
                  <div
                    onClick={() => handleClick(product.id)}
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
              </>
            ) : (
              <></>
            )}
            {count == 4 ? (
              <>
                {filteredData.slice(8, 12).map((product, index) => (
                  <div
                    onClick={() => handleClick(product.id)}
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
              </>
            ) : (
              <></>
            )}
            {count == 5 ? (
              <>
                {filteredData.slice(9, 15).map((product, index) => (
                  <div
                    onClick={() => handleClick(product.id)}
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
              </>
            ) : (
              <></>
            )}
            {count == 6 ? (
              <>
                {filteredData.slice(6, 10).map((product, index) => (
                  <div
                    onClick={() => handleClick(product.id)}
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
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
