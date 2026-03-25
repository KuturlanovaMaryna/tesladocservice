    "use client";

    import { Swiper, SwiperSlide } from "swiper/react";
    import { FreeMode } from "swiper/modules";
    import { useRef, useState } from "react";
import Image from "next/image";

    import type { Swiper as SwiperType } from "swiper/types";

    import "swiper/css";
    import "swiper/css/free-mode";
    import LeftIcon from "./icons/left";
    import RightIcon from "./icons/right";

    const Services = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleChange = () => {
        if (swiperRef.current) {
        setIsBeginning(swiperRef.current.isBeginning);
        setIsEnd(swiperRef.current.isEnd);
        }
    };

    return (
        <section id="services" className="w-full bg-darkbcg mt-10 sm:py-4 md:py-10">

  
  <div className=" w-full px-6 md:px-[60px]">


    <div className="max-w-[1200px] mx-auto">

    
      <div className="flex items-baseline gap-5 sm:mb-5 md:mb-9 lg:mb-12 ">
        <p className="uppercase font-montserrat font-bold lg:text-4xl md:text-[32px] sm:text-xl leading-[1.22] text-red">
          Наши услуги
        </p>
        <div className="border-b-2 border-red border-solid flex-1"></div>
      </div>

      
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          handleChange();
        }}
        onSlideChange={handleChange}
        slidesPerView={1.33}
        spaceBetween={12}
        breakpoints={{
          768: {
            slidesPerView: 2.33,
            spaceBetween: 16,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 12,
          },
        }}
        speed={1000}
        modules={[FreeMode]}
        className="w-full"
      >
                    <SwiperSlide className="lg:max-w-[288px] md:max-w-[288px] sm:max-w-[260px]" >
                        <h3 className="font-montserrat font-bold lg:text-lg md:text-lg sm:text-base text-whitetext text-left lg:h-11 md:h-11 sm:h-10">Привязка ключей</h3>
                        <Image
                                            src="/image/services/key.png"
                                            alt="Key image"
                                            width={256}    
                                            height={256}   
                                            priority        
                                            className="object-cover rounded-2xl mb-4 mt-4 sm:w-[228px] md:w-[256px] lg:w-[256px]"
                                              />
                        
                        <p className="lg:h-[132px]  md:h-[132px] sm:h-[120px] font-manrope font-normal lg:text-base md:text-base sm:text-sm text-whitetext text-left">Ключ Tesla потерялся, сломался или просто нужен второй экземпляр для близких — мы привяжем новый на любую модель автомобиля.</p>
                <a href="tel:+37379438254" className=" block lg:w-[256px] md:w-[256px] sm:w-[228px] lg:h-[54px] md:h-[54px] sm:h-[44px]  lg:py-4  md:py-4 sm:py-3 rounded-2xl bg-red font-manrope lg:font-bold md:font-bold sm:font-semibold lg:text-base md:text-base sm:text-sm text-whitetext mt-4">Заказать услугу</a>
                    </SwiperSlide>
                    <SwiperSlide className="lg:max-w-[288px] md:max-w-[288px] sm:max-w-[260px]">
                         <h3 className="font-montserrat font-bold lg:text-lg md:text-lg sm:text-base text-whitetext text-left lg:h-11 md:h-11 sm:h-10">Навигация</h3>
                        <Image
                                            src="/image/services/navi.png"
                                            alt="Navi image"
                                            width={256}    
                                            height={256}   
                                            priority        
                                            className="object-cover rounded-2xl mb-4 mt-4 sm:w-[228px] md:w-[256px] lg:w-[256px]"
                                              />
                        
                        <p className="lg:h-[132px]  md:h-[132px] sm:h-[120px] font-manrope font-normal lg:text-base md:text-base sm:text-sm text-whitetext text-left">У Вас автомобиль из США? Нужна локальная навигация? Мы активируем европейскую навигацию, сохранив обновления автомобиля.</p>
                        <a href="tel:+37379438254" className="block lg:w-[256px] md:w-[256px] sm:w-[228px] lg:h-[54px] md:h-[54px] sm:h-[44px]  lg:py-4  md:py-4 sm:py-3 rounded-2xl bg-red font-manrope lg:font-bold md:font-bold sm:font-semibold lg:text-base md:text-base sm:text-sm text-whitetext mt-4">Заказать услугу</a>
            </SwiperSlide>
                    <SwiperSlide className="lg:max-w-[288px] md:max-w-[288px] sm:max-w-[260px]">
                      <h3 className="font-montserrat font-bold lg:text-lg md:text-lg sm:text-base text-whitetext text-left lg:h-11 md:h-11 sm:h-10">Востановление аккумуляторов</h3>
                        <Image
                                            src="/image/services/akum.png"
                                            alt="Akum image"
                                            width={256}    
                                            height={256}   
                                            priority        
                                            className="object-cover rounded-2xl mb-4 mt-4 sm:w-[228px] md:w-[256px] lg:w-[256px]"
                                              />
                        
                        <p className="lg:h-[132px]  md:h-[132px] sm:h-[120px] font-manrope font-normal lg:text-base md:text-base sm:text-sm text-whitetext text-left">Удалим {"crash"} с аккумуляторов нового образца.</p>
                        <a href="tel:+37379438254" className="block lg:w-[256px] md:w-[256px] sm:w-[228px] lg:h-[54px] md:h-[54px] sm:h-[44px]  lg:py-4  md:py-4 sm:py-3 rounded-2xl bg-red font-manrope lg:font-bold md:font-bold sm:font-semibold lg:text-base md:text-base sm:text-sm text-whitetext mt-4">Заказать услугу</a>   
            </SwiperSlide>
                    <SwiperSlide className="lg:max-w-[288px] md:max-w-[288px] sm:max-w-[260px]">
                        
                      <h3 className="font-montserrat font-bold lg:text-lg md:text-lg sm:text-base text-whitetext text-left lg:h-11 md:h-11 sm:h-10">Ретрофит компонентов автомобиля</h3>
                        <Image
                                            src="/image/services/retro.png"
                                            alt="Retro image"
                                            width={256}    
                                            height={256}   
                                            priority        
                                            className="object-cover rounded-2xl mb-4 mt-4 sm:w-[228px] md:w-[256px] lg:w-[256px]"
                                              />
                        
                        <p className="lg:h-[132px]  md:h-[132px] sm:h-[120px] font-manrope font-normal lg:text-base md:text-base sm:text-sm text-whitetext text-left">Хотите быстро заряжаться? Заменить неисправный автопилот на новый? 
Сделать из заднеприводного авто - полноприводный? 
Мы поможем.</p>
                        <a href="tel:+37379438254" className="block lg:w-[256px] md:w-[256px] sm:w-[228px] lg:h-[54px] md:h-[54px] sm:h-[44px]  lg:py-4  md:py-4 sm:py-3 rounded-2xl bg-red font-manrope lg:font-bold md:font-bold sm:font-semibold lg:text-base md:text-base sm:text-sm text-whitetext mt-4">Заказать услугу</a>   
           
            </SwiperSlide>
                    <SwiperSlide className="lg:max-w-[288px] md:max-w-[288px] sm:max-w-[260px]">
                         <h3 className="font-montserrat font-bold lg:text-lg md:text-lg sm:text-base text-whitetext text-left lg:h-11 md:h-11 sm:h-10">Ремонт тегры</h3>
                        <Image
                                            src="/image/services/tegra.png"
                                            alt="Tegra image"
                                            width={256}    
                                            height={256}   
                                            priority        
                                            className="object-cover rounded-2xl mb-4 mt-4 sm:w-[228px] md:w-[256px] lg:w-[256px]"
                                              />
                        
                        <p className="lg:h-[132px]  md:h-[132px] sm:h-[120px] font-manrope font-normal lg:text-base md:text-base sm:text-sm text-whitetext text-left">Зависания, темный экран, не выключается камера заднего вида, необходима замена памяти? Мы произведем быстрый и качественный ремонт вашей {"тегры"}.</p>
                        <a href="tel:+37379438254" className=" block lg:w-[256px] md:w-[256px] sm:w-[228px] lg:h-[54px] md:h-[54px] sm:h-[44px]  lg:py-4  md:py-4 sm:py-3 rounded-2xl bg-red font-manrope lg:font-bold md:font-bold sm:font-semibold lg:text-base md:text-base sm:text-sm text-whitetext mt-4">Заказать услугу</a>   
           
                    </SwiperSlide>
                    <SwiperSlide className="lg:max-w-[288px] md:max-w-[288px] sm:max-w-[260px]">
                         <h3 className="font-montserrat font-bold lg:text-lg md:text-lg sm:text-base text-whitetext text-left lg:h-11 md:h-11 sm:h-10">Дополнительные функции</h3>
                        <Image
                                            src="/image/services/editional.png"
                                            alt="Editional image"
                                            width={256}    
                                            height={256}   
                                            priority        
                                            className="object-cover rounded-2xl mb-4 mt-4 sm:w-[228px] md:w-[256px] lg:w-[256px]"
                                              />
                        
                        <p className="lg:h-[132px]  md:h-[132px] sm:h-[120px] font-manrope font-normal lg:text-base md:text-base sm:text-sm text-whitetext text-left">Активация: {"Performance"}, {"Boost"}, {"Supercharger"}, четные радиочистоты, подогрев сидений и многое другое.</p>
                        <a href="tel:+37379438254" className="block lg:w-[256px] md:w-[256px] sm:w-[228px] lg:h-[54px] md:h-[54px] sm:h-[44px]  lg:py-4  md:py-4 sm:py-3 rounded-2xl bg-red font-manrope lg:font-bold md:font-bold sm:font-semibold lg:text-base md:text-base sm:text-sm text-whitetext mt-4">Заказать услугу</a>   
           
                    </SwiperSlide>
                    </Swiper>
                    </div>

            
            <div className="hidden md:flex justify-center items-center gap-10 mt-4">
            <button
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={isBeginning}
            >
                <LeftIcon disabled={isBeginning} />
            </button>

            <button
                onClick={() => swiperRef.current?.slideNext()}
                disabled={isEnd}
            >
                <RightIcon disabled={isEnd} />
            </button>
            </div>
        </div>
        </section>
    );
    };

    export default Services;
