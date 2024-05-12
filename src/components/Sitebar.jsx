import "./Sitebar.css";
import { useState } from "react";

import Logo from "../../public/assets/Food_Logo.svg";
import { NavLink } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { PiSealPercentBold } from "react-icons/pi";
import { FaRegEnvelope } from "react-icons/fa6";
import { LuBell } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { IoExitOutline } from "react-icons/io5";
import { LuPieChart } from "react-icons/lu";

const Sitebar = () => {
  return (
    <div className=" flex bg-[#1F1D2B] rounded-[16px] border-none">
      <div className="w-[104px] h-[600px] py-[24px] flex flex-col items-end justify-between">
        <div>
          <img src={Logo} alt="img" className="w-[56px] h-[56px] mr-[24px] mb-[10px] " />
        </div>
        <NavLink to="/">
          <div className="bbb w-[92px] h-[85px] flex items-center justify-center  rounded-[10px]">
            <div className="aaa w-[54px] h-[54px] flex items-center justify-center  mr-[10px]">
              <GrHomeRounded className="salom w-[20px] h-[24px] text-[#EA7C69] " />
            </div>
          </div>
        </NavLink>
        <NavLink to="/percent">
          <div className="bbb w-[92px] h-[85px] flex items-center justify-center  rounded-[10px]">
            <div className="aaa w-[54px] h-[54px] flex items-center justify-center  mr-[10px]">
              <PiSealPercentBold className="salom w-[24px] h-[24px] text-[#EA7C69] " />
            </div>
          </div>
        </NavLink>
        <NavLink to="/part">
          <div className="bbb w-[92px] h-[85px] flex items-center justify-center  rounded-[10px]">
            <div className="aaa w-[54px] h-[54px] flex items-center justify-center  mr-[10px]">
              <LuPieChart className="salom w-[20px] h-[24px] text-[#EA7C69] " />
            </div>
          </div>
        </NavLink>
        <NavLink to="/email">
          <div className="bbb w-[92px] h-[85px] flex items-center justify-center  rounded-[10px]">
            <div className="aaa w-[54px] h-[54px] flex items-center justify-center  mr-[10px]">
              <FaRegEnvelope className="salom w-[20px] h-[24px] text-[#EA7C69] " />
            </div>
          </div>
        </NavLink>
        <NavLink to="/bell">
          <div className="bbb w-[92px] h-[85px] flex items-center justify-center  rounded-[10px]">
            <div className="aaa w-[54px] h-[54px] flex items-center justify-center  mr-[10px]">
              <LuBell className="salom w-[24px] h-[22px] text-[#EA7C69] " />
            </div>
          </div>
        </NavLink>
        <NavLink to="/settings">
          <div className="bbb w-[92px] h-[85px] flex items-center justify-center  rounded-[10px]">
            <div className="aaa w-[54px] h-[54px] flex items-center justify-center  mr-[10px]">
              <FiSettings className="salom w-[22px] h-[24px] text-[#EA7C69] " />
            </div>
          </div>
        </NavLink>
        <NavLink to="/exit">
          <div className="bbb w-[92px] h-[85px] flex items-center justify-center mt-[40px] rounded-[10px]">
            <div className="aaa w-[54px] h-[54px] flex items-center justify-center  mr-[10px]">
              <IoExitOutline className="salom w-[24px] h-[24px] text-[#EA7C69] " />
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sitebar;
