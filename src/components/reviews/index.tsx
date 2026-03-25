"use client";

import { useEffect } from "react";
import RightIcon from "../services/icons/right";

const Reviews = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.defer = true;
    script.setAttribute("data-use-service-core", "");
    document.body.appendChild(script);
  }, []);

  return (
    <section id="reviews" className="bg-darkbcg w-full py-10">

      <div className="max-w-[1200px] mx-auto px-6 md:px-[60px] lg:px-0">

       
        <div className="flex items-baseline gap-4 md:gap-5 w-full mb-8 md:mb-10">
          <p className="uppercase font-bold text-xl md:text-[32px] lg:text-4xl leading-[1.22] text-red">
            Отзывы
          </p>
          <div className="border-b-2 border-red flex-1"></div>
        </div>

        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">

          <div className="flex flex-col text-center">
            <p className="font-montserrat font-bold text-3xl md:text-4xl text-red">
              51
            </p>
            <p className="font-manrope font-medium text-lg md:text-2xl text-whitetext">
              отзывов на Google
            </p>
          </div>

          <div className="flex flex-col text-center">
            <div className="flex items-center justify-center gap-2">
              <RightIcon />
              <p className="font-montserrat font-bold text-3xl md:text-4xl text-red">
                150
              </p>
            </div>

            <p className="font-manrope font-medium text-lg md:text-2xl text-whitetext">
              довольных клиентов
            </p>
          </div>

        </div>

    
        <div className="mb-8">
          <div
            className="elfsight-app-a9689574-5c8f-47f2-bd51-70c66050f6f4"
            data-elfsight-app-lazy
          ></div>
        </div>

       
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-10">

  <a
    href="https://www.google.com/search?q=tesladoc"
    className="hidden md:block border-[1.5px] border-red rounded-2xl w-[200px] py-[14px] px-6 text-center text-red font-manrope font-bold text-base"
  >
    Больше отзывов
  </a>

 <a
  href="https://www.google.com/search?q=tesladoc"
  className="text-white bg-red rounded-2xl w-full max-w-[345px] md:w-[200px] py-[14px] px-6 text-center font-manrope font-bold text-base mx-auto md:mx-0"
>
  Оцените нас
</a>

</div>

      </div>

    </section>
  );
};

export default Reviews;