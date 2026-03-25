import TeslaIcon from "./icons/tesla";
import MapIcon from "./icons/map";
import TelefonIcon from "./icons/telefon";
import ViberIcon from "./icons/viber";
import MailIcon from "./icons/mail";
import InstIcon from "./icons/inst";
import TelegramIcon from "./icons/tg";

const Footer = () => {
  return (
    <footer className="bg-darkbcg rounded-t-2xl font-montserrat">

      <div className="max-w-[1200px] mx-auto sm:px-6 md:px-[60px] lg:px-0 py-10 lg:py-[77px]">

       
        <div className="grid grid-cols-2 md:grid-cols-3 items-center lg:hidden gap-8">

          
        <div className="flex flex-col gap-6">

  <div className="flex items-center gap-2">
    <TeslaIcon />
    <p className="text-whitetext font-bold text-xl">tesladoc</p>
  </div>

  
  <div className="flex md:hidden gap-4">
    {/* <MapIcon /> */}
    {/* <MailIcon /> */}
              <TelefonIcon />
              <ViberIcon />
              <InstIcon />
              <TelegramIcon />
              
  </div>

</div>

        
          <ul className="flex flex-col gap-3 text-whitetext font-manrope font-semibold text-base md:items-center">

            <li><a href="#feedback">Обратная связь</a></li>
            <li><a href="#about">О нас</a></li>
            <li><a href="#services">Наши услуги</a></li>
            <li><a href="#steps">Этапы работы</a></li>
            <li><a href="#reviews">Отзывы</a></li>
            <li><a href="#location">Как нас найти</a></li>

          </ul>

        
          <div className="hidden md:flex justify-end gap-6">
            <MapIcon />
            <MailIcon />
            <TelefonIcon />
            <ViberIcon />
            <InstIcon />
            <TelegramIcon />
          
          </div>

        </div>

        
        <div className="hidden lg:flex justify-between">

          <div className="flex items-center">
            <TeslaIcon />
            <p className="text-whitetext font-bold text-2xl">tesladoc</p>
          </div>

          <ul className="flex flex-col gap-4 font-semibold text-lg text-whitetext font-manrope">
            <li><a href="#feedback">Обратная связь</a></li>
            <li><a href="#about">О нас</a></li>
            <li><a href="#services">Наши услуги</a></li>
            <li><a href="#steps">Этапы работы</a></li>
            <li><a href="#reviews">Отзывы</a></li>
            <li><a href="#location">Как нас найти</a></li>
          </ul>

          <div className="flex flex-col gap-4">

            <span className="flex gap-2">
              <MapIcon />
              <a className="text-whitetext font-semibold text-lg">
                Str. Toader Bubuiog 10/2
              </a>
            </span>

            <span className="flex gap-2">
              <MailIcon />
              <a className="text-whitetext font-semibold text-lg">
                tooltesla@gmail.com
              </a>
            </span>

            <span className="flex gap-2">
              <TelefonIcon />
              <a className="text-whitetext font-semibold text-lg">
                +373 (79) 438-254
              </a>
            </span>
            <div className="hidden md:flex justify-start gap-3">
              <ViberIcon />
              <InstIcon />
              <TelegramIcon />
              
          </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;