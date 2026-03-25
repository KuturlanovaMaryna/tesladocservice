const Location = () => {
  return (
    <section id="location" className="bg-whitebcg pt-10 font-montserrat w-full">

      <div className="max-w-[1200px] mx-auto sm:px-6 md:px-[60px] lg:px-0">

       
        <div className="flex items-baseline sm:gap-4 md:gap-5 w-full mb-8 md:mb-10">
          <p className="uppercase font-bold sm:text-xl md:text-[32px] lg:text-4xl leading-[1.22] text-red whitespace-nowrap">
            Как нас найти
          </p>

          <div className="border-b-2 border-red flex-1"></div>
        </div>

      </div>

      
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1121.5525973978915!2d28.93096400380702!3d46.98430497682722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97b007e171543%3A0xdd99cf147505cb79!2sTeslaDoc!5e0!3m2!1sru!2s!4v1766068630697!5m2!1sru!2s"
        className="w-full sm:h-[240px] md:h-[320px] lg:h-[400px]"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

    </section>
  );
};

export default Location;