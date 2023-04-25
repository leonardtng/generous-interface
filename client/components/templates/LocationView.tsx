import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import startCase from "lodash/startCase";
import { useLocationObjects, useWindowSize } from "@/helpers";
import { Location, LocationObject } from "@/types";
import { useRouter } from "next/router";
import { LOCATIONS } from "@/constants";

type GroupedLocationObjects = {
  [key: string]: LocationObject[];
};

const LocationView = () => {
  const router = useRouter();
  const { location } = router.query;

  const { isLoading, data } = useLocationObjects();
  const [winWidth] = useWindowSize();

  const groupByType = (
    artObjects: LocationObject[]
  ): GroupedLocationObjects => {
    const groupedArtObjects: GroupedLocationObjects = {};

    artObjects.forEach((artObject) => {
      const type = artObject.type;

      if (groupedArtObjects[type]) {
        groupedArtObjects[type].push(artObject);
      } else {
        groupedArtObjects[type] = [artObject];
      }
    });

    return groupedArtObjects;
  };

  const calculateSize = (count: number) => {
    // You can adjust this calculation to change the size of the squares based on the count of items
    const baseSize = 100 + count * 10;
    const maxSize = winWidth && winWidth * 0.8;

    return maxSize && Math.min(baseSize, maxSize);
  };

  const getRandomObject = (items: LocationObject[]) => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  };

  const [groupToDisplay, setGroupToDisplay] = useState<string | null>(null);

  const openGroup = (type: string) => {
    setGroupToDisplay(type);
  };

  const closeGroup = () => {
    setGroupToDisplay(null);
  };

  const Modal = dynamic(() => import("../molecules/Modal"), { ssr: false });

  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center">
      {!isLoading && (
        <div className="text-5xl my-8">
          {
            LOCATIONS.find(
              (keyLocation: Location) => keyLocation.key === location
            )?.name
          }
        </div>
      )}
      <div className="flex flex-wrap gap-4">
        {isLoading ? (
          <div className="w-full h-full flex justify-center items-center">
            Loading...
          </div>
        ) : data ? (
          Object.entries(groupByType(data)).map(([type, items]) => {
            const size = calculateSize(items.length);
            const object = getRandomObject(items);
            return (
              <div
                key={type}
                className="relative p-2 group overflow-clip cursor-pointer"
                style={{
                  width: size,
                  height: size,
                }}
                onClick={() => openGroup(type)}
              >
                <h2 className="text-sm font-bold bg-black w-fit px-1 z-20">
                  {type} - ({items.length})
                </h2>
                <Image
                  src={object.imageLink}
                  fill
                  alt={object.name}
                  className="-z-10 transition duration-500 group-hover:scale-110"
                />
              </div>
            );
          })
        ) : (
          <div>no data</div>
        )}
      </div>

      <Modal
        isOpen={Boolean(groupToDisplay)}
        handleClose={closeGroup}
        className="[&_.modalCloseButton]:top-5 [&_.modalCloseButton]:right-5 [&_.modalCloseButton]:fill-white"
      >
        <div className="max-h-[80vh] max-w-[80vw] bg-gray-700 p-5 rounded-xl overflow-hidden flex flex-col">
          <h2 className="text-3xl pb-5">{startCase(groupToDisplay!)}</h2>
          <div className="flex-1 grid grid-cols-3 gap-5 overflow-auto">
            {data
              ?.filter(
                (artObject: LocationObject) => artObject.type === groupToDisplay
              )
              .map((item, index) => (
                <Image
                  key={index}
                  src={item.imageLink}
                  width={150}
                  height={150}
                  alt={item.name}
                />
              ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LocationView;
