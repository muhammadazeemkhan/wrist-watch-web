"use client";
import React, { useState } from "react";
import watches from "@/lib";
import Link from "next/link";

const Watches = () => {
  const [watchList, setWatchList] = useState(watches);

  const handleWatch = (e) => {
    const searchValue = e.target.value;
    const newValue = watchList.filter((items) => items.name === searchValue);
    console.log(newValue);
    setWatchList(newValue);
  };

  return (
    <main>
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Introducing Our Latest Product
          </h2>
          <div class="bg-white p-4 m-4 rounded-lg">
            <div class="relative bg-inherit ">
              <input
                type="text"
                onChange={handleWatch}
                id="username"
                name="username"
                class="peer bg-transparent  h-10 w-72 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                placeholder="Type inside me"
              />
              <label
                for="username"
                class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
              >
                Search Your Desire Watch
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {watchList.map((data, index) => {
              // console.log(data)
              const { id, name, title, image, category, price } = data;
              return (
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="relative overflow-hidden hover:scale-[1.01] transition ease 2000">
                    <img
                      className="object-cover w-full h-full "
                      src={image}
                      alt="Product"
                    />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
                        View Product
                      </button>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mt-4">
                    {name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2">{title}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-lg">
                      $<span>{price}</span>
                    </span>
                    <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Watches;
