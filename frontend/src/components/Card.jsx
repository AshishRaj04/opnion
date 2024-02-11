import { useState } from "react";
import { features } from "../constants";

const Card = () => {
  return (
    <div className="flex justify-between gap-7">
      {features.map((item, index) => (
        <div className="py-8 px-10 flex flex-col flex-grow justify-center items-center border rounded-lg shadow-xl bg-[#f1f5f9] " key={index}>
          <img
            src={item.illustration}
            alt="Illustrated graphic"
            draggable="false"
            className="w-[340px] h-[200px] rounded-lg mb-5 bg-gradient-to-r from-[#cee8d6] via-[#efbdd7] to-[#afc7e8] transition-transform hover:scale-105"
            loading="lazy"
          />
          <h2 className="font-bold mb-2 text-gray-800">{item.title}</h2>
          <p className="text-gray-500 text-sm w-[350px] text-center">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
