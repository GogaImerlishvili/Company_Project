import { useState } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const pathname = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavigation = () => {
    if (isOpen) {
      setIsOpen(false);
      enablePageScroll();
    } else {
      setIsOpen(true);
      disablePageScroll();
    }
  };
  const handleClick = () => {
    if (!isOpen) return;
    enablePageScroll();
    setIsOpen(false);
  };
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-14 lg:bg-n-15 
    lg:backdrop-blur-sm ${isOpen ? "bg-n-15" : "bg-n-15 backdrop-blur-sm"}`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-14 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center  m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                onClick={handleClick}
                key={item.id}
                href={item.url}
                className={`block relative font-code text-xl uppercase text-n-1 transition-colors hover:text-color-1  ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New Account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>
        <Button
          onClick={toggleNavigation}
          className="ml-auto lg:hidden"
          px="px-3"
        >
          <MenuSvg openNavigation={isOpen} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
