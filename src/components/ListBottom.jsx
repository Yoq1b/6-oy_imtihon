import React, { useState } from "react";
import Payment from "../components/Payment";

const ListBottom = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="w-[361px]  h-[190px] flex flex-col justify-between">
        <hr className="w-full  border border-[#393C49]" />
        <div>
          <div className=" flex items-center justify-between ">
            <p className="text-[14px] text-[#ABBBC2]">Discount</p>
            <p className="text-[16px] text-white">$0</p>
          </div>
          <div className=" mt-[16px] flex items-center justify-between">
            <p className="text-[14px] text-[#ABBBC2]">Sub total</p>
            <p className="text-[16px] text-white">$ {21.3}</p>
          </div>
        </div>

        <button
          onClick={openModal}
          className="w-[361px] h-[48px] bg-[#EA7C69] rounded-[8px] [box-shadow:0px_8px_24px_0px_#EA7C694D] text-[14px] text-white font-semibold"
        >
          Continue to Payment
        </button>
      </div>
      {modalIsOpen && <Payment closeModal={closeModal} />}
    </>
  );
};

export default ListBottom;
