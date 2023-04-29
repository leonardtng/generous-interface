import React, { useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
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

  const scrollPos = useRef(0);

  const setScrollPos = (pos: number) => {
    scrollPos.current = pos;
  };

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
    const sortedObjs = sortBySize(groupedArtObjects);
    return Object.fromEntries(sortedObjs);
  };

  const sortBySize = (groupedArtObjects: GroupedLocationObjects) => {
    return Object.entries(groupedArtObjects).sort(
      (a, b) => b[1].length - a[1].length
    );
  };

  const calculateSize = (count: number) => {
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

  const TypeModal = dynamic(() => import("../organisms/TypeModal"), {
    ssr: false,
  });

  return (
    <div className="w-[97%] min-h-screen flex flex-col justify-center items-center z-10 border-black">
      {!isLoading && (
        <div className="flex flex-col justify-center items-center mt-10 mb-10 bg-yellow-500/75 rounded-lg text-black border-black border-4">
          <div className="text-6xl tracking-widest pt-5 px-5">
            {
              LOCATIONS.find(
                (keyLocation: Location) => keyLocation.key === location
              )?.name
            }
          </div>
          <div className="text-2xl mt-4 pb-5 px-5">
            <p>Location Description Placeholder</p>
          </div>
        </div>
      )}
      <div className="flex flex-wrap h-[75vh] items-center justify-center gap-3 bg-yellow-500/40 z-20 border-black border-4 overflow-scroll">
        {isLoading ? (
          <div className="w-full h-full flex flex-col justify-center items-center">
            Loading...
          </div>
        ) : data ? (
          Object.entries(groupByType(data)).map(([type, items]) => {
            const size = calculateSize(items.length);
            const object = getRandomObject(items);
            return (
              <div
                key={type}
                className="relative p-2 group overflow-clip cursor-pointer my-5 border-4 border-black"
                style={{
                  width: size,
                  height: size,
                }}
                onClick={() => openGroup(type)}
              >
                <h2 className="text-sm font-bold bg-black w-fit px-1 z-20">
                  {type.toUpperCase()} - ({items.length})
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
      <TypeModal
        groupToDisplay={groupToDisplay}
        setGroupToDisplay={setGroupToDisplay}
        data={data}
        scrollPos={scrollPos}
        setScrollPos={setScrollPos}
      />
    </div>
  );
};

export default LocationView;
