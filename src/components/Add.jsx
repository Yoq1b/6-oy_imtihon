import React, { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import data1 from "../db/data.json";

const Add = ({ click }) => {
  const { data } = data1;
  const [products, setProducts] = useState(data);
const[deleteItems, setDeleteItems]=useState([]);

  useEffect(() => {
    setProducts(data.filter((product) => click.includes(product.id)));
  }, [click]);
  console.log(click);
  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  

  return (
    <div className="w-[361px] h-[325px] pt-[34px] pb-[30px] flex flex-col overflow-x-scroll ">
      {products.map((product, index) => (
        <div
          key={index}
          className="w-full h-[106px] flex flex-col justify-between mb-[24px]"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[8px]">
              <img
                src={product.image}
                alt="rasm"
                className="border w-[45px] h-[45px] rounded-[50%]"
              />
              <div>
                <p className="text-[14px] text-white w-[140px] overflow-hidden">
                  {product.name}
                </p>
                <p className="text-[14px] text-[#ABBBC2]">${product.price}</p>
              </div>
            </div>
            <div className="flex items-center gap-[21px]">
              <div className="w-[48px] h-[48px] rounded-[8px] bg-[#393C49] border border-slate-600 flex items-center justify-center">
                <p className="text-[16px] text-white">1</p>
              </div>
              <p className="text-[16px] text-white">${product.price}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <input
              type="text"
              placeholder="Order Note..."
              className="w-[297px] h-[48px] outline-none font-normal text-white rounded-[8px] bg-[#393C49] border border-slate-600 pl-[14px] text-[14px]"
            />
            <button
              onClick={() => handleDelete(product.id)}
              className="flex items-center justify-center w-[48px] h-[48px] rounded-[8px] border border-[#FF7CA3]"
            >
              <AiOutlineDelete className="w-[22px] h-[22px] text-[#FF7CA3]" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Add;
