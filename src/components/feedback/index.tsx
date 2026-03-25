import Image from "next/image";
import ContactForm from "./ContactForm";

const Feedback = () => {
  return (
    <section
      id="feedback"
      className="font-montserrat w-full py-6 md:py-10 md:pb-[70px] lg:pb-[40px]"
    >
      <div className="max-w-[1200px] mx-auto  sm:px-6 md:px-[60px] lg:px-0">

       
        <div className="flex items-baseline gap-4 md:gap-5 w-full">
          <p className="uppercase font-bold text-xl md:text-[32px] lg:text-4xl leading-[1.22] text-red">
            Обратная связь
          </p>
          <div className="border-b-2 border-red flex-1"></div>
        </div>

      
        <div className="relative mt-8 md:mt-[72px]">

          
          <div className="relative w-full h-[194px] md:h-[364px] lg:h-[674px]">
            <Image
              src="/image/feedbackImg.png"
              alt="Feedback background"
              fill
              priority
              className="object-cover"
            />
          </div>

       
          <div className="relative z-10 flex flex-col gap-6 mt-6
                          md:absolute md:top-0 md:left-0 md:w-full md:h-full
                          md:flex-row md:items-start md:justify-between
                          md:px-6 lg:px-[100px] md:pt-[68px]">

           
            <p className="font-manrope font-medium text-base md:text-2xl md:text-whitetext md:leading-[34px] md:max-w-[392px]">
              Вы можете задать вопрос или заказать услугу заполнив короткую форму.
              Наша служба поддержки свяжется с вами по указанным в форме контактам.
            </p>

            
            <div className="md:-mt-[126px] lg:mt-0">
              <ContactForm />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Feedback;