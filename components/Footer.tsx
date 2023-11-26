import React from "react";
import Link from "next/link";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="paddingX paddingY bg-green-90 flex justify-between
    sm:flex-row flex-col items-start gap-8"
    >
      <div className="flex justify-between sm:gap-20 lg:gap-44 lg:flex-row flex-col">
        <Link href="/">
          <p className="regular-18 leading-6 tracking-wide">
            Craftsman's{" "}
            <span className="regular-18 italic text-blue-400">HUB</span>
          </p>
        </Link>
        <div className="flex flex-col gap-3 lg:mt-0 mt-10">
          <h4 className="bold-18 text-white">{SOCIALS.title}</h4>
          <ul className="regular-14 flex gap-4 ">
            {SOCIALS.links.map((link) => (
              <Link
                href={link.website}
                key={link.image}
                className="bg-slate-300 rounded-full w-9 h-9 flexCenter"
                target="_blank"
              >
                <Image src={link.image} alt="logo" width={24} height={24} />
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap gap-10">
        {FOOTER_LINKS.map((columns) => (
          <div>
            <h4 className="bold-18 text-white mb-6">{columns.title}</h4>
            <ul className="regular-14 flex flex-col gap-3 text-slate-300">
              {columns.links.map((link) => (
                <Link href="/" key={link}>
                  {link}
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-5">
        <div>
          <h4 className="bold-18 text-white mb-6">
            {FOOTER_CONTACT_INFO.title}
          </h4>
          {FOOTER_CONTACT_INFO.links.map((link) => (
            <div className="flex gap-3 flexBetween">
              <p className="regular-14 flex flex-col gap-3 text-slate-300 whitespace-nowrap">
                {link.label}
              </p>
              <p className="regular-14 flex flex-col gap-3 text-slate-300">
                {link.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
