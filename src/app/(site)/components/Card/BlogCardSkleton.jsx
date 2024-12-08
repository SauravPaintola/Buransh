import { PlusCircleIcon } from "@heroicons/react/24/solid";

const BlogCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 h-full shadow-md p-3 rounded-lg animate-pulse">
      <div className="w-full h-[211px] lg:h-[311px] overflow-hidden rounded-lg relative bg-gray-200"></div>
      <div className="flex flex-col w-full ">
        <div className="flex text-fairGrey">
          <span className="text-sm lg:text-base"></span>
        </div>
        <div className="flex flex-col w-full space-y-2">
          <div className="font-semibold text-xl lg:text-2xl leading-relaxed truncate p-5 w-full bg-gray-200
            "></div>
          <hr />
          <div className="font-semibold text-xl lg:text-2xl leading-relaxed truncate p-2 w-full bg-gray-200
            "></div>
          <div className="flex space-x-1 items-center">
            <span className="text-fairGrey text-sm lg:text-base underline"></span>
            <div className="w-4 lg:w-5 p-3 rounded-full bg-gray-200  text-green" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
