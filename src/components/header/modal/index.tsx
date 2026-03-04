"use client";

import { useEffect } from "react";
import CloseIcon from "../icons/close";
import ViberIcon from "../icons/viber";
import MapIcon from "../icons/map";
import MailIcon from "../../footer/icons/mail";
import InstIcon from "../../footer/icons/inst";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  
  useEffect(() => {
    if (!open) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-50">
      {/* OVERLAY */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      {/* MENU */}
      <div
        className="
          absolute top-0 right-0
          w-full sm:w-[186px] md:w-[284px]
           h-dvh
          bg-darkbcg
          text-whitetext
          rounded-tl-2xl
          rounded-bl-2xl
          sm:px-6 sm:py-24 md:px-6 md:py-[132px]
          shadow-xl
          flex flex-col
          
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="
            absolute sm:top-3 sm:right-6 md:top-5 md:right-[60px]
             text-whitetext
            text-2xl
            hover:opacity-70
            transition
          "
        >
          <CloseIcon/>
        </button>
        <div className="space-y-5 flex flex-col">
            <a href="#about" onClick={onClose} className="hover:text-red transition-colors">О нас</a>
        <a href="#services" onClick={onClose} className="hover:text-red transition-colors">Наши услуги</a>
        <a href="#steps" onClick={onClose} className="hover:text-red transition-colors">Этапы работы</a>
        <a href="#feedback" onClick={onClose} className="hover:text-red transition-colors">Обратная связь</a>
        <a href="#reviews" onClick={onClose} className="hover:text-red transition-colors">Отзывы</a>
        <a href="#location" onClick={onClose} className="hover:text-red transition-colors">Как нас найти</a>
        </div>
      

        <div className="mt-auto flex flex-col gap-5">
          <MapIcon />
          <ViberIcon />
          <InstIcon/>
          <MailIcon/>
  </div>
      </div>
    </div>
  );
};

export default MobileMenu;
