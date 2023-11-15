import { reviews } from "@/constants/data";
import Image from "next/image";

type ReviewItemProps = {
  firstName: string;
  lastName: string;
  image?: string;
  specialization: string;
  description: string;
  number: string;
};
const ReviewItem = ({
  firstName,
  lastName,
  image,
  specialization,
  description,
  number,
}: ReviewItemProps) => {
  return (
    <div className="sm:min-w-[350px] min-w-[270px] flex-1 flex-wrap rounded-md border-2 border-blue-500 px-6 py-10">
      <div className="flex items-start gap-6">
        <Image
          src={image ? image : "/profile.png"}
          width={100}
          height={100}
          alt="profile"
          className="rounded-full"
        />
        <div className="w-full flex flex-col gap-1">
          <h3 className="capitalize bold-24 mb-3">
            {firstName} {lastName}
          </h3>
          <p className="capitalize text-blue-300">
            job title: <span className=" text-slate-100">{specialization}</span>
          </p>
          <p className="capitalize text-blue-300">
            number: <span className="text-slate-100">{number}</span>
          </p>
          <div className="mt-1 flex">
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                src="/star.svg"
                width={20}
                height={20}
                alt="star"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6">
        <p className="capitalize text-blue-300">
          description: <span className="text-slate-100">{description}</span>
        </p>
      </div>
    </div>
  );
};

const Blogs = () => {
  return (
    <div id="blogs" className="paddingX paddingY w-full flex flex-col gap-16">
      <div className="bg-blue-300 p-8 rounded-lg">
        <p className="bold-18 text-green-90 w-full md:w-[70%]">
          In our Craftsmen's Hub, everyone can find a skilled craftsman who not
          only enjoys their work but excels at it. Here is some information
          about our craftsmen's - explore their profiles and discover your ideal
          master of craftsmanship.
        </p>
      </div>
      <div className="flex gap-10 flex-wrap">
        {reviews.map((review) => (
          <ReviewItem
            key={review.firstName + review.lastName}
            firstName={review.firstName}
            lastName={review.lastName}
            image={review.image}
            specialization={review.specialization}
            description={review.description}
            number={review.number}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
