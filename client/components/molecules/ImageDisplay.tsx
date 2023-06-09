import React, { ReactEventHandler } from "react";
import Image from "next/image";
import { LocationObject } from "@/types";
import startCase from "lodash/startCase";

interface Props {
  data: LocationObject[] | undefined;
  changeItem: (item: LocationObject | null) => void;
  groupToDisplay: string | null;
  setScroll: ReactEventHandler<HTMLDivElement>;
  updateScroll: () => void;
}

const ImageDisplay = ({
  data,
  changeItem,
  groupToDisplay,
  setScroll,
  updateScroll,
}: Props) => {
  return (
    <div
      id="modalScroller"
      className="border-4 border-yellow-600 overflow-y-scroll p-5 h-full flex flex-col items-center"
      onLoad={setScroll}
      onScroll={updateScroll}
    >
      <h2 className="text-4xl pb-5 text-white">{startCase(groupToDisplay!)}</h2>
      <div className="flex-1 grid grid-cols-3 gap-5">
        {data
          ?.filter(
            (artObject: LocationObject) => artObject.type === groupToDisplay
          )
          .map((item: LocationObject, index: number) => (
            <a className="group overflow-clip scale-100" key={index} href="">
              <Image
                key={index}
                src={item.imageLink}
                className="transition duration-500 group-hover:scale-110"
                width={150}
                height={150}
                alt={item.name}
                onClick={(e) => {
                  e.preventDefault();
                  changeItem(item);
                }}
              />
            </a>
          ))}
      </div>
    </div>
  );
};

export default ImageDisplay;
