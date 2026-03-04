import TeslaIcon from "./icons/tesla";
import MapIcon from "./icons/map";
import TelefonIcon from "./icons/telefon";
import ViberIcon from "./icons/viber";
import MailIcon from "./icons/mail";
import InstIcon from "./icons/inst";

const Footer = () => {
  return (
    <footer className="bg-darkbcg h-[390px] rounded-t-2xl ">
      <div className="max-w-[1200px] mx-auto py-[77px] lg:flex lg:justify-between">
            <div className=" flex flex-row items-center ">
              <TeslaIcon />
              <p className="text-whitetext font-bold text-2xl text-center font-montserrat">tesladoc</p>
            </div>
        <ul className="flex flex-col gap-4 font-semibold text-lg text-whitetext font-manrope">
          <li>
                 <a href="#feedback" className="hover:text-red transition">Обратная связь</a>
              </li>
              <li>
                <a href="#about" className=" hover:text-red transition">О нас</a>
              </li>
              <li>
                <a href="#services" className="hover:text-red transition">Наши услуги</a>
              </li>
              <li>
                 <a href="#steps" className="hover:text-red transition">Этапы работы</a>
              </li>
              
              <li>
                <a href="#reviews" className="hover:text-red transition">Отзывы</a>
              </li>
              <li> <a href="#location" className="hover:text-red transition">Как нас найти</a></li>
        </ul>
        <div className="flex flex-col gap-4 justify-center ">
           <span className="flex flex-row gap-2 ">
                     <MapIcon />
                     <a  href="https://maps.app.goo.gl/hZuy4CjQbEUE8eYn6" className="text-whitetext lg:font-semibold lg:text-lg lg:leading-[26px]">Str. Toader Bubuiog 10/2, Bubuieci, Moldova</a>
                   </span>
                   
             <span className="flex flex-row gap-2">
                     <MailIcon />
                     <a  href="mailto:tooltesla@gmail.com"  className="text-whitetext lg:font-semibold lg:text-lg lg:leading-[26px]">tooltesla@gmail.com</a>
                   </span>
                   <span className="flex flex-row gap-2">
                     <TelefonIcon />
                     <a href="tel:+37379438254"  className="text-whitetext lg:font-semibold lg:text-lg lg:leading-[26px]">+373 (79) 438-254</a>
                   </span>
                     
          <span className="flex flex-row gap-10">
              <a href="viber://chat?number=%2B380636324747" className="text-whitetext lg:font-semibold lg:text-lg lg:leading-[26px]"><ViberIcon /></a>
              
                      <a href="https://www.instagram.com/tesladoc.md?igsh=MWY3c2J5dTZ4cmZobg%3D%3D&utm_source=qr" className="text-whitetext lg:font-semibold lg:text-lg lg:leading-[26px]"
            
            ><InstIcon/></a>
          </span>
        
          </div>
        </div>
          
      
    </footer>
  );
};

export default Footer;