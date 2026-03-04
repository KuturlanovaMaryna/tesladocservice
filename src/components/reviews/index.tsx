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
      <section id="reviews" className="bg-darkbcg w-full ">
          <div className="relative max-w-[1200px] mx-auto h-[560px] ">
                <div className="flex justify-center items-baseline gap-5 w-full mb-10 ">
            <p className="uppercase font-bold text-4xl leading-[1.22] text-red mt-10">
                Отзывы 
            </p>
            <div className="border-b-2 border-red border-solid flex-1"></div>
        </div>
        <div className="container  ">
          
          <div
            className="elfsight-app-a9689574-5c8f-47f2-bd51-70c66050f6f4"
            data-elfsight-app-lazy
          ></div>
              </div>
              <div className="flex flex-col absolute top-[98px] text-center ">
              <p className=" font-montserrat font-bold text-4xl leading-[1.22] uppercase text-red">49</p>
                  <p className="font-manrope font-medium text-2xl leading-[1.42] text-whitetext text-center">отзывов на Google</p>
              </div>      
              <div className="flex flex-col absolute top-[98px] left-[960px] text-center ">
                  <div className="flex items-center justify-center gap-2">
                      
                      <RightIcon />
                      <p className="font-montserrat font-bold text-4xl leading-[1.22] uppercase text-red">150</p>
                  </div>
                
                  <p className="font-manrope text-nowrap font-medium text-2xl leading-[1.42] text-whitetext text-center">довольных клиентов</p>
              </div> 
              <div className="flex justify-center gap-10 mt-6 mb-[40px] ">
              <a href="https://www.google.com/search?q=tesladoc+bubuieci+%D0%BE%D1%82%D0%B7%D1%8B%D0%B2%D1%8B&rlz=1C1CHZL_ruUA932UA933&oq=tes&gs_lcrp=EgZjaHJvbWUqBggAECMYJzIGCAAQIxgnMgwIARAuGEMYgAQYigUyDggCECMYExgnGIAEGIoFMgwIAxAAGEMYgAQYigUyDAgEEAAYQxiABBiKBTIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDgxNzNqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x40c97b007e171543:0xdd99cf147505cb79,1,,,," className=" border-[1.5px] border-red rounded-2xl w-[200px] py-[14px] px-6 text-center text-red font-manrope font-bold text-base">Больше отзывов</a>
              <a href="https://www.google.com/search?q=tesladoc&rlz=1C1CHZL_ruUA932UA933&oq=tesladoc&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIRCAEQLhgKGAsYxwEY0QMYgAQyCwgCEAAYChgLGIAEMgsIAxAAGAoYCxiABDILCAQQABgKGAsYgAQyCwgFEAAYChgLGIAEMgsIBhAAGAoYCxiABDILCAcQABgKGAsYgAQyCwgIEAAYChgLGIAE0gEKMTc0ODFqMGoxNagCB7ACAfEF8Bfk_aykB54&sourceid=chrome&ie=UTF-8#lrd=0x40c97b007e171543:0xdd99cf147505cb79,3,,,," className="text-white bg-red rounded-2xl w-[200px] py-[14px] px-6 text-center font-manrope font-bold text-base">Оцените нас</a>
          </div>
          </div>
        
          
      </section>
  );
};

export default Reviews;