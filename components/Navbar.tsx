"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/constants/data";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from ".";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [navMenu, setNavMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full paddingX py-4 fixed top-0 z-20 ${
        scrolled ? "bg-green-90" : "bg-transparent"
      }`}
    >
      <div className="w-full flexBetween">
        <Link href="/">
          <p className="regular-18 leading-6 tracking-wide ">
            Craftsman's{" "}
            <span className="regular-18 italic text-blue-400">HUB</span>
          </p>
        </Link>

        <div className="flexEnd gap-8">
          <ul className="md:flexBetween gap-10 hidden">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-blue-400" : "text-white"
                } bold-18 hover:text-blue-400 text-[18px] font-medium tracking-wide
            cursor-pointer capitalize transition duration-200`}
                onClick={() => setActive(link.title)}
              >
                <Link href={`#${link.id}`} scroll={true}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            type="button"
            title="Sign In"
            variant="btn_white sm:flexCenter hidden "
          />
          <div className="inline-block md:hidden">
            {!navMenu && (
              <GiHamburgerMenu
                fontSize={27}
                className="cursor-pointer"
                onClick={() => {
                  setNavMenu(!navMenu);
                }}
              />
            )}
            {navMenu && (
              <div className="lg:hidden">
                <AiOutlineClose
                  fontSize={27}
                  className="cursor-pointer"
                  onClick={() => {
                    setNavMenu(!navMenu);
                  }}
                />
                <ul
                  className="flex items-end flex-col gap-3 absolute top-16 sm:top-20 right-2 p-6 text-gray-50 transition duration-200
                  bg-green-90 min-w-[130px] shadow-2xl shadow-green-90"
                >
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className={`${
                        active === link.title ? "text-black" : "text-white"
                      } regular-16 text-white font-medium tracking-wide cursor-pointer capitalize`}
                      onClick={() => setActive(link.title)}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
                  <Button
                    type="button"
                    title="Sign In"
                    variant="btn_white sm:hidden"
                  />
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
