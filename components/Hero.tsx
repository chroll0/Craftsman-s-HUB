import { Button } from ".";

const Hero = () => {
  return (
    <div id="/" className="heroBackground w-full min-h-screen">
      <div className="flex items-start w-full padding overlay justify-between md:flex-row flex-col gap-12">
        <div className="flex flex-1 sm:gap-24 gap-12 flex-col xl:max-w-3xl">
          <h1 className="sm:bold-64 xs:bold-48 bold-36">
            Welcome to <br /> Craftsman's
            <span className="text-blue-400"> HUB</span>
          </h1>
          <div className="flex flex-col gap-8">
            <h3 className="sm:regular-26 regular-18 ">
              Discover the Perfect Craftsman | Find Your Ideal Work
            </h3>
            <p className="sm:regular-18 regular-14">
              Craftsmen, seize the chance to showcase skills and find exciting
              work opportunities. Users, set out on a journey to uncover the
              perfect artisan for projects and extend job offers.
            </p>
            <span className="sm:regular-18 regular-14 italic text-blue-400">
              Join us where craftsmanship and opportunities seamlessly
              intertwine.
            </span>
          </div>
        </div>

        <div className="flex md:flex-col flex-col sm:flex-row lg:items-end gap-8">
          <div className="flex xs:w-[270px] gap-4 flex-col rounded-xl bg-green-90 px-7 py-8 w-full">
            <p className="text-lg leading-7 font-medium text-white capitalize">
              Are you a craftsman?
            </p>
            <p className="text-lg leading-7 font-medium text-white capitalize">
              looking for new opportunities?
            </p>
            <p className="text-base leading-6 text-blue-400">
              Register now to discover your next job.
            </p>
            <Button type="button" title="Register" variant="btn_white" full />
          </div>

          <div className="flex xs:w-[270px] gap-4 flex-col rounded-xl bg-green-90 px-7 py-8 w-full">
            <p className="text-lg leading-7 font-medium text-white capitalize">
              Are you looking for skilled craftsmen?
            </p>
            <p className="text-lg leading-7 font-medium text-white capitalize">
              You are in the right place.
            </p>
            <p className="text-base leading-6 text-blue-400">
              Explore the catalog
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
