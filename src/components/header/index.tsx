"use client";
import { useState } from "react";
import LineIcon from "./icons/line";
import MapIcon from "./icons/map";
import TelefonIcon from "./icons/telefon";
import TeslaIcon from "./icons/tesla";
import ViberIcon from "./icons/viber";
import BurgerIcon from "./icons/burger";
import MobileMenu from "./modal";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="font-manrope">

      {/* ===== MOBILE / TABLET TOP BAR (sm + md) ===== */}
      <div
        className="
          lg:hidden
          bg-darkbcg
          flex items-center justify-between

          px-4 py-3          /* sm */
          md:px-8 md:py-4    /* md */
        "
      >
        {/* Phone */}
        <a href="tel:+37379438254" className="text-white w-6 h-6 md:w-6 md:h-6">
          <TelefonIcon />
        </a>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-white w-6 h-6">
            <TeslaIcon />
          </div>
          <span className="text-white font-bold font-montserrat text-lg md:text-xl">
            tesladoc
          </span>
        </div>

        {/* Burger */}
        <button
  onClick={() => setOpen(true)}
  className="text-white w-6 h-6"
>
  <BurgerIcon />
</button>

<MobileMenu open={open} onClose={() => setOpen(false)} />

      </div>

    
      {/* ===== DESKTOP TOP INFO BAR (lg) ===== */}
      <div className="hidden lg:block bg-darkbcg rounded-b-2xl px-[120px] py-4 h-[58px]">
        <div className="max-w-[1200px] mx-auto flex justify-evenly">
          <span className="flex gap-2">
            <MapIcon />
            <a
              href="https://maps.app.goo.gl/hZuy4CjQbEUE8eYn6"
              className="text-whitetext font-semibold text-lg"
            >
              Str. Toader Bubuiog 10/2, Bubuieci, Moldova
            </a>
          </span>

          <LineIcon />

          <span className="flex gap-2">
            <TelefonIcon />
            <a
              href="tel:+37379438254"
              className="text-whitetext font-semibold text-lg"
            >
              +373 (79) 438-254
            </a>
          </span>

          <LineIcon />

          <span className="flex gap-2">
            <ViberIcon />
            <a
              href="viber://chat?number=%2B380636324747"
              className="text-whitetext font-semibold text-lg"
            >
              +380 (63) 632-47-47
            </a>
          </span>
        </div>
      </div>

      {/* ===== DESKTOP MAIN HEADER (lg) ===== */}
      <div className="hidden lg:flex max-w-[1440px] mx-auto h-[102px] px-[120px] py-6 justify-between">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <div className="text-darktext w-8 h-8">
            <TeslaIcon />
          </div>
          <p className="text-darktext font-bold text-2xl font-montserrat">
            tesladoc
          </p>
        </div>

        {/* Nav */}
        <ul className="flex gap-4 items-center font-semibold text-lg">
          <li><a href="#about" className="hover:text-red">О нас</a></li>
          <li><a href="#services" className="hover:text-red">Наши услуги</a></li>
          <li><a href="#steps" className="hover:text-red">Этапы работы</a></li>
          <li><a href="#feedback" className="hover:text-red">Обратная связь</a></li>
          <li><a href="#reviews" className="hover:text-red">Отзывы</a></li>
          <li><a href="#location" className="hover:text-red">Как нас найти</a></li>
        </ul>

        {/* CTA */}
        <a
          href="tel:+37379438254"
          className="w-[200px] h-[54px] px-[26px] py-4 rounded-2xl bg-red font-bold text-white text-center"
        >
          Связаться с нами
        </a>
      </div>
    </header>
  );
};

export default Header;
