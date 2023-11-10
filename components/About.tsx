import Image from "next/image";
import { Button } from ".";
import { slides } from "@/constants/data";

type SliderProps = {
  title: string;
  subtitle: string;
  peopleJoined: string;
};

const Slider = ({ title, subtitle, peopleJoined }: SliderProps) => {
  return (
    <div className="flex h-full flex-col items-start justify-between py-8 lg:py-10">
      <div className="flexCenter gap-4">
        <div className="rounded-full bg-blue-400 p-4">
          <Image src="/folded-map.svg" alt="map" width={28} height={28} />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>

      <div className="flexCenter gap-6">
        <span className="flex -space-x-4 overflow-hidden"></span>
        <p className="bold-16 md:bold-20 text-white capitalize">
          {peopleJoined}
        </p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div id="about" className="w-full paddingY">
      <div className="paddingX pb-14">
        <h2 className="bold-30 text-blue-400">Who We Are?</h2>
        <div className="flexCol sm:flexRow gap-12">
          <p className="pt-4 sm:regular-18 regular-14 lg:max-w-[70%]">
            Craftsman's Hub is a platform that brings together skilled artisans
            and those in need of their expertise. We are dedicated to fostering
            a community where craftsmanship and opportunity converge. Our
            mission is to empower craftsmen and connect them with users who
            appreciate their skills.
          </p>
          <Button
            type="button"
            title="JOIN FREE"
            icon=""
            variant="btn_dark_green "
          />
        </div>
      </div>
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px] xl:px-16">
        <div
          className="h-full w-full min-w-[1100px] slide_1 paddingX xl:px-24 xl:rounded-3xl 
          rounded-e-3xl"
        >
          <Slider
            title="Craftsman's HUB"
            subtitle="Carpentry Projects"
            peopleJoined="0 Craftsman"
          />
        </div>
        <div
          className="h-full w-full min-w-[1100px] slide_2 paddingX xl:px-24 xl:rounded-3xl 
          rounded-e-3xl"
        >
          <Slider
            title="Craftsman's HUB"
            subtitle="Deck and Patio Construction"
            peopleJoined="0 Craftsman"
          />
        </div>
        <div
          className="h-full w-full min-w-[1100px] slide_3 paddingX xl:px-24 xl:rounded-3xl 
          rounded-e-3xl"
        >
          <Slider
            title="Craftsman's HUB"
            subtitle="Roofing and Siding"
            peopleJoined="0 Craftsman"
          />
        </div>
        <div
          className="h-full w-full min-w-[1100px] slide_4 paddingX xl:px-24 xl:rounded-3xl 
          rounded-e-3xl"
        >
          <Slider
            title="Craftsman's HUB"
            subtitle="Electrical Projects"
            peopleJoined="0 Craftsman"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
