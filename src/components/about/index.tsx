import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="mt-10">

      
      <div className="px-6 flex items-end gap-4">
  <p className="uppercase font-montserrat font-bold sm:text-[18px] lg:text-4xl text-red whitespace-nowrap">
    О нас
  </p>

  <div className="flex-1 border-b-2 border-red" />
</div>

      
      <p className="px-6 sm:mt-5 md:mt-9 lg:mt-12 sm:mb-6 font-manrope font-normal sm:text-base md:text-lg text-darktext">
        TeslaDoc — команда, которая специализируется на диагностике, ремонте и доработках автомобилей Tesla в Кишинёве и его окрестностях. <br /><br />
        Мы ценим доверие наших клиентов, поэтому ставим в приоритет: <br />
        • персональный подход и внимание к деталям;<br />
        • прозрачность — вы всегда знаете, что именно делается и с какими сроками;<br />
        • ответственность — используем качественные комплектующие и современное оборудование;<br />
        • скорость — стремимся к тому, чтобы ваш автомобиль вернулся к вам в лучшем виде как можно скорее. <br /><br />
        TeslaDoc — это мастерство, сервис и любовь к автомобилям будущего.
      </p>

     
      <div className="px-6">
        <div className="mx-auto max-w-[1200px] relative w-full aspect-[1200/800]">
          <Image
            src="/image/aboutImg.png"
            alt="About image"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            className="object-cover"
          />
        </div>
      </div>

    </section>
  );
};

export default About;
