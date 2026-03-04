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
        <section id="services"className="w-full bg-darkbcg mt-10 py-10">
        <div className="max-h-[820px] max-w-[1200px] mx-auto flex flex-col items-center">
            
            <div className="flex justify-center items-baseline gap-5 w-full">
            <p className="uppercase font-montserrat font-bold text-4xl leading-[1.22] text-red">
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
            slidesPerView={4}
            spaceBetween={12}
            freeMode={false}     
            speed={1000}   
            modules={[FreeMode]}
            className="w-full mt-6"
            >
                    <SwiperSlide className="!w-[288px]">
                        <h3 className="font-montserrat font-bold text-lg text-whitetext text-left h-11">Привязка ключей</h3>
                        <Image
                                            src="/image/services/key.png"
                                            alt="Key image"
                                            width={256}    
                                            height={256}   
                                            priority        
                                            className="object-cover rounded-2xl mb-4 mt-4"
                                              />
                        
                        <p className="h-[132px] font-manrope font-normal text-base text-whitetext text-left">Ключ Tesla потерялся, сломался или просто нужен второй экземпляр для близких — мы привяжем новый на любую модель автомобиля.</p>
                        <a href="tel:+37379438254" className=" block w-[256px] h-[54px] px-[24px] py-4 rounded-2xl bg-red font-manrope font-bold text-base text-whitetext mt-4">Заказать услугу</a>
                    </SwiperSlide>
                    <SwiperSlide>
                         <h3 className="font-montserrat font-bold text-lg text-whitetext text-left h-11">Навигация</h3>
                        <Image
                                            src="/image/services/navi.png"
                                            alt="Navi image"
                                            width={256}    
                                            height={256}   
                                            priority        
                                            className="object-cover rounded-2xl mb-4 mt-4"
                                              />
                        
                        <p className="h-[132px] font-manrope font-normal text-base text-whitetext text-left">У Вас автомобиль из США? Нужна локальная навигация? Мы активируем европейскую навигацию, сохранив обновления автомобиля.</p>
                        <a href="tel:+37379438254" className=" block w-[256px] h-[54px] px-[24px] py-4 rounded-2xl bg-red font-manrope font-bold text-base text-whitetext mt-4">Заказать услугу</a>
            </SwiperSlide>
                    <SwiperSlide>
                      <h3 className="font-montserrat font-bold text-lg text-whitetext text-left h-11">Востановление аккумуляторов</h3>
                        <Image
                                            src="/image/services/akum.png"
                                            alt="Akum image"
                                            width={256}    
                                            height={256}   
                                            priority        
                                            className="object-cover rounded-2xl mb-4 mt-4"
                                              />
                        
                        <p className="h-[132px] font-manrope font-normal text-base text-whitetext text-left">Удалим {"crash"} с аккумуляторов нового образца.</p>
                        <a href="tel:+37379438254" className=" block w-[256px] h-[54px] px-[24px] py-4 rounded-2xl bg-red font-manrope font-bold text-base text-whitetext mt-4">Заказать услугу</a>   
            </SwiperSlide>
                    <SwiperSlide>
                        
                      <h3 className="font-montserrat font-bold text-lg text-whitetext text-left h-11">Ретрофит компонентов автомобиля</h3>
                        <Image
                                            src="/image/services/retro.png"
                                            alt="Retro image"
                                            width={256}    
                                            height={256}   
                                            priority        
                                            className="object-cover rounded-2xl mb-4 mt-4"
                                              />
                        
                        <p className="h-[132px] font-manrope font-normal text-base text-whitetext text-left">Хотите быстро заряжаться? Заменить неисправный автопилот на новый? 
Сделать из заднеприводного авто - полноприводный? 
Мы поможем.</p>
                        <a href="tel:+37379438254" className=" block w-[256px] h-[54px] px-[24px] py-4 rounded-2xl bg-red font-manrope font-bold text-base text-whitetext mt-4">Заказать услугу</a>   
           
            </SwiperSlide>
                    <SwiperSlide>
                         <h3 className="font-montserrat font-bold text-lg text-whitetext text-left h-11">Ремонт тегры</h3>
                        <Image
                                            src="/image/services/tegra.png"
                                            alt="Tegra image"
                                            width={256}    
                                            height={256}   
                                            priority        
                                            className="object-cover rounded-2xl mb-4 mt-4"
                                              />
                        
                        <p className="h-[132px] font-manrope font-normal text-base text-whitetext text-left">Зависания, темный экран, не выключается камера заднего вида, необходима замена памяти? Мы произведем быстрый и качественный ремонт вашей {"тегры"}.</p>
                        <a href="tel:+37379438254" className=" block w-[256px] h-[54px] px-[24px] py-4 rounded-2xl bg-red font-manrope font-bold text-base text-whitetext mt-4">Заказать услугу</a>   
           
                    </SwiperSlide>
                    <SwiperSlide>
                         <h3 className="font-montserrat font-bold text-lg text-whitetext text-left h-11">Дополнительные функции</h3>
                        <Image
                                            src="/image/services/editional.png"
                                            alt="Editional image"
                                            width={256}    
                                            height={256}   
                                            priority        
                                            className="object-cover rounded-2xl mb-4 mt-4"
                                              />
                        
                        <p className="h-[132px] font-manrope font-normal text-base text-whitetext text-left">Активация: {"Performance"}, {"Boost"}, {"Supercharger"}, четные радиочистоты, подогрев сидений и многое другое.</p>
                        <a href="tel:+37379438254" className=" block w-[256px] h-[54px] px-[24px] py-4 rounded-2xl bg-red font-manrope font-bold text-base text-whitetext mt-4">Заказать услугу</a>   
           
                    </SwiperSlide>
            </Swiper>

            
            <div className="flex items-center gap-10 mt-6">
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
