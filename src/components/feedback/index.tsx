import Image from "next/image";
import ContactForm from "./ContactForm";

const Feedback = () => {
    return <section id="feedback" className=" max-w-[1200px] mx-auto bg-whitebcg py-10 font-montserrat">
        <div className="flex justify-center items-baseline gap-5 w-full mb-10">
            <p className="uppercase font-bold text-4xl leading-[1.22] text-red">
                Обратная связь
            </p>
            <div className="border-b-2 border-red border-solid flex-1"></div>
        </div>
        <div className="relative w-full h-[674px]">
       <Image
  src="/image/feedbackImg.png"
  alt="Feedback background"
  fill
  sizes="max-width: 674px"
  priority
  className="object-cover"
/>
            <p className="absolute top-[68px] left-[100px] w-[392px] font-manrope font-medium text-2xl text-whitetext leading-[34px]">Вы можете задать вопрос или заказать услугу заполнив короткую форму. Наша служба поддержки свяжется с вами по указанным в форме контактам. </p>
            <div className="absolute top-[68px] right-[100px]">
    <ContactForm />
  </div>
        </div> 
     
  </section>;
};

export default Feedback; 