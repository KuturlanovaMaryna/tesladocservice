import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="mt-2">
      
      {/* Заголовок */}
      <h1 className="px-6 font-montserrat italic font-semibold uppercase text-darktext text-center
        sm:text-[40px] md:text-[80px] lg:text-9xl">
        TESLADOC
      </h1>

      {/* ОБЩИЙ КОНТЕЙНЕР (картинка + текст) */}
      <div className="px-6 mx-auto max-w-[1200px]">
        
        {/* Картинка */}
        <div className="relative w-full aspect-[1132/562]">
          <Image
            src="/image/heroImage.png"
            alt="Hero image"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            className="object-cover"
          />
        </div>

        {/* Текст 1 */}
        <p className="mt-5 uppercase italic font-bold font-manrope text-center
          sm:text-xl md:text-[40px] lg:text-4xl">
          <span className="text-red">От</span> восстановления{" "}
          <span className="block lg:inline mt-[4px]">
            <span className="text-red">до </span>улучшения —
          </span>
        </p>

        {/* Текст 2 */}
        <p className="mt-2 uppercase italic font-bold font-manrope text-center
          sm:text-xl md:text-[40px] lg:text-4xl">
          <span className="text-red">все</span> для вашей Tesla
        </p>

      </div>
    </section>
  );
};

export default Hero;
