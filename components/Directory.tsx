import { catalog } from "@/constants/data";
import Image from "next/image";

type CatalogItemProps = {
  title: string;
  icon: string;
};

const CatalogItem = ({ title, icon }: CatalogItemProps) => {
  return (
    <div className="w-44 h-auto">
      <div className="w-44 h-44 cursor-pointer bg-blue-300 rounded-full flexCenter transition hover:bg-blue-500">
        <Image src={icon} width={100} height={100} alt="icon" />
      </div>
      <h3 className="flexCenter mt-6 bold-20 uppercase text-center cursor-pointer">
        {title}
      </h3>
    </div>
  );
};

const Directory = () => {
  return (
    <div className="w-full paddingX paddingY flex hide-scrollbar overflow-x-auto">
      <div className="min-w-[13rem] hide-scrollbar flex gap-12">
        {catalog.map((item) => (
          <CatalogItem title={item.title} icon={item.icon} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Directory;
