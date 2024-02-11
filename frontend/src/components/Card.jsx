import { useState } from "react";
import { features } from "../constants";
const Card = () => {
  return (
    <>
      {features.map((item, index) => {
        return (
          <div
            className="md:w-30 md:mb-0 sm:shadow-xl shadow-sm py-6 bg-slate-100 border border-slate-200 rounded-xl w-full min-h-240 mb-6"
            key={index}
          >
            <img
              src={item.illustration}
              alt="Illustrated graphic"
              draggable="false"
              className="w-[80%] h-full object-contain rounded-2xl block mx-auto mb-5"
              style={{ color: "transparent" }}
              loading="lazy"
              width="640"
              height="360"
            />
            <h2 class="font-bold mb-2 text-slate-800">{item.title}</h2>
            <p class="text-slate-500 text-sm max-w-[280px] mx-auto">
              {item.description}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Card;
