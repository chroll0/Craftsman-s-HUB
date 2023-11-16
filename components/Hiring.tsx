import Image from "next/image";
import { HiringCard } from ".";
import { hiring } from "@/constants/data";

const Hiring = () => {
  return (
    <div className="paddingY">
      <div className=" py-14 bg-green-90 paddingX relative overflow-hidden">
        <div className="sm:flexBetween flexCol gap-8">
          <Image
            src="/craftsman_logo.png"
            width={200}
            height={200}
            alt="craftsman_logo"
          />
          <p className="lg:max-w-[70%] lg:regular-18">
            Craftsman's Hub is an open platform for dedicated professionals who
            approach their work with responsibility, willingness, and a genuine
            passion for excellence. We welcome those who love what they do and
            are eager to embrace new opportunities that bring satisfaction to
            our valued users.
          </p>
        </div>
        <div className="bg-blue-400 w-[290px] h-5 absolute right-[-100px] top-8 rotate-45"></div>
        <div className="bg-blue-400 w-[290px] h-5 absolute left-[-100px] top-[270px] rotate-45 hidden lg:block"></div>
      </div>
      <div className="flex flex-wrap w-full gap-12 px-4 pt-12 paddingX">
        {hiring.map((content, index) => (
          <HiringCard key={content.title} index={index} {...content} />
        ))}
      </div>
    </div>
  );
};

export default Hiring;
