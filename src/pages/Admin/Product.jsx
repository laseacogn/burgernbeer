import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChartLine, FaUser } from 'react-icons/fa';
import { IoBagHandle } from 'react-icons/io5';
import { MdOutlineCategory } from 'react-icons/md';
import { BiLogoBlogger } from 'react-icons/bi';
import { TiTicket } from 'react-icons/ti';

export function Product() {
  return (
    <div className="max-w-[1200px] mx-auto " >
    <div className="flex gap-2">
      <div className="min-w-72 bg-[#4B4949] rounded-md p-7">
        <div className="flex flex-col h-full">
          <p className="text-[#FFFFFF] text-xl font-bold text-center">ADMIN</p>
          <div className="flex flex-col pl-7 font-medium text-slate-500 text-lg my-auto gap-4 ">
            <NavLink
              to=""
              className="flex gap-2 text-[#FFFFFF] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
            >
              <FaChartLine />
              <p className="text-[#FFFFFF]">Statistic</p>
            </NavLink>
            <NavLink
              to="/admin"
              className="flex gap-2 text-[#FFFFFF] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
            >
              <FaUser />
              <p className="text-[#FFFFFF]">User Management</p>
            </NavLink>
            <NavLink
              to="/admin/product"
              className="flex gap-2 text-[#FFFFFF] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
            >
              <IoBagHandle />
              <p className="text-[#FFFFFF]">Items List</p>
            </NavLink>
            <NavLink
              to=""
              className="flex gap-2 text-[#FFFFFF] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
            >
              <MdOutlineCategory />
              <p className="text-[#FFFFFF]">Category</p>
            </NavLink>
            <NavLink
              to=""
              className="flex gap-2 text-[#FFFFFF] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
            >
              <BiLogoBlogger />
              <p className="text-[#FFFFFF]">BlogPost</p>
            </NavLink>
            <NavLink
              to=""
              className="flex gap-2 text-[#FFFFFF] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
            >
              <TiTicket />
              <p className="text-[#FFFFFF]">Voucher</p>
            </NavLink>
          </div>
        </div>
      </div>
       <div className="w-full flex flex-col">
        <div className="w-full flex flex-row justify-between items-center">
            <p className="w-[750px] text-center text-2xl font-medium p-2 text-black"> ITEM LIST </p>
        <button className="bg-[#4B4949] text-white text-base font-medium px-4 py-2 rounded self-end shadow-md">
          Add Items
        </button>
        </div>
    <div className="w-full pt-[10px]">
            <div className="flex flex-col text-slate-500">
              <input
                className="bg-slate-200 p-1 focus:outline-none rounded"
                type="text"
                placeholder="    Search Items"
                id="name"
              />
            </div>
    <div className="flex flex-col mr-2 divide-y p-2">
            <div className="grid grid-cols-4 mt-4 font-bold gap-2 items-center text-center">
              <p>Item ID</p>
              <p>Item Name</p>
              <p>Category</p>
              <p>Price</p>
            </div>
            <div className="grid grid-cols-4 mt-4 break-words items-center gap-2 text-center">
              <p>001</p>
              <p>Classic Burger</p>
              <p>Burger</p>
              <p>40.00 $</p>
            </div>
            <div className="grid grid-cols-4 mt-4 break-words items-center gap-2 text-center">
              <p>002</p>
              <p>Watermelon Juice</p>
              <p>Drink</p>
              <p>45.00 $</p>
            </div>
            <div className="grid grid-cols-4 mt-4 break-words items-center gap-2 text-center">
              <p>003</p>
              <p>Chicken Nugget</p>
              <p>Side Dish</p>
              <p>50.00 $</p>
            </div>
            <div className="grid grid-cols-4 mt-4 break-words items-center gap-2 text-center">
              <p>004</p>
              <p>Cheese Pizza</p>
              <p>Pizza</p>
              <p>160.00 $</p>
            </div>
            <div className="grid grid-cols-4 mt-4 break-words items-center gap-2 text-center">
              <p>005</p>
              <p>Chicken Burger</p>
              <p>Burger</p>
              <p>80.00 $</p>
            </div>
            <div className="grid grid-cols-4 mt-4 break-words items-center gap-2 text-center">
              <p>006</p>
              <p>Bacon & Egg Sandwich</p>
              <p>Sandwich</p>
              <p>90.00 $</p>
            </div>
            <div className="grid grid-cols-4 mt-4 break-words items-center gap-2 text-center">
              <p>007</p>
              <p>Carnitas Hotdog</p>
              <p>Hotdog</p>
              <p>80.00 $</p>
            </div>
            <div className="grid grid-cols-4 mt-4 break-words items-center gap-2 text-center">
              <p>008</p>
              <p>Baguette Grilled Pork</p>
              <p>Baguette</p>
              <p>35.00 $</p>
            </div>
            <div className="grid grid-cols-4 mt-4 break-words items-center gap-2 text-center">
              <p>009</p>
              <p>Saigon Red Beer</p>
              <p>Drink</p>
              <p>25.00 $</p>
            </div>
            <div className="grid grid-cols-4 mt-4 break-words items-center gap-2 text-center">
              <p>010</p>
              <p>BBQ Pulled Pork Burger</p>
              <p>Burger</p>
              <p>99.00 $</p>
            </div>
          </div>
     </div>
     </div>
     </div>
     </div>
  );
}
