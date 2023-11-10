"use client";

import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";

type HiringCardProps = {
  title: string;
  icon: string;
  index: number;
};

const HiringCard = ({ title, index, icon }: HiringCardProps) => {
  return (
    <Tilt className="cursor-pointer">
      <motion.div className="w-full xs:w-[250px] min-h-[280px] bg-green-90 px-8 py-12 rounded-3xl border border-blue-400 ">
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="p-4 bg-blue-400 rounded-full">
            <Image src={icon} width={20} height={20} alt={icon} />
          </div>
          <h3 className="text-white bold-18 text-center capitalize tracking-wider">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default HiringCard;
