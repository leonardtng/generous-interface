import React, { useState, useEffect } from "react";
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
    const baseSize = 100 + count * 10;
    const maxSize = winWidth && winWidth * 0.8;

    return maxSize && Math.min(baseSize, maxSize);
  };

  const getRandomObject = (items: LocationObject[]) => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  };

  const [groupToDisplay, setGroupToDisplay] = useState<string | null>(null);

  const [itemToDisplay, setItemToDisplay] = useState<LocationObject | null>(
    null
  );

  useEffect(() => {
    console.log(itemToDisplay);
  }, [itemToDisplay]);

  const openGroup = (type: string) => {
    setGroupToDisplay(type);
  };

  const closeGroup = () => {
    setGroupToDisplay(null);
    setItemToDisplay(null);
  };

  const closeItem = () => {
    setItemToDisplay(null);
  };

  const Modal = dynamic(() => import("../molecules/Modal"), { ssr: false });

  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center">
      {!isLoading && (
        <div className="flex flex-col justify-center items-center mt-10 mb-10">
          <div className="text-6xl tracking-widest">
            {
              LOCATIONS.find(
                (keyLocation: Location) => keyLocation.key === location
              )?.name
            }
          </div>
          <div className="text-2xl mt-4">
            <p>Location Description Placeholder</p>
          </div>
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
        <div className="flex flex-row items-center gap-20 max-h-[80vh]">
          <div className="max-h-[80vh] max-w-[80vw] bg-gray-700 p-5 rounded-xl overflow-hidden flex flex-row gap-20 pt-20">
            <div className="border-4 border-gray-400 overflow-scroll p-5">
              <h2 className="text-3xl pb-5">{startCase(groupToDisplay!)}</h2>
              <div className="flex-1 grid grid-cols-3 gap-5">
                {data
                  ?.filter(
                    (artObject: LocationObject) =>
                      artObject.type === groupToDisplay
                  )
                  .map((item, index) => (
                    <a href={item.link} key={index}>
                      <Image
                        key={index}
                        src={item.imageLink}
                        width={150}
                        height={150}
                        alt={item.name}
                        onMouseEnter={(e) => {
                          (e.target as Element).style.scale = "1.1";
                        }}
                        onMouseLeave={(e) => {
                          (e.target as Element).style.scale = "1";
                        }}
                        onMouseDown={(e) => {
                          setItemToDisplay(item);
                        }}
                      />
                    </a>
                  ))}
              </div>
            </div>

            {itemToDisplay && (
              <div className="max-w-[50vw] bg-gray-700 p-5 overflow-hidden flex flex-col border-4 border-gray-400">
                <h2 className="text-3xl pb-5 max-w-[40vw]">
                  {itemToDisplay.name}
                </h2>
                <div className="flex-1 grid grid-cols-3 gap-5 overflow-auto">
                  <Image
                    src={itemToDisplay.imageLink}
                    width={450}
                    height={450}
                    alt={itemToDisplay.name}
                  />
                  <div className="flex flex-col gap-2">
                    <div className="flex align-center flex-col gap-1">
                      <span className="font-bold">Type:</span>
                      <span>{itemToDisplay.type}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-bold">Location Found:</span>
                      <span>{itemToDisplay.locationName}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-bold">YUAG Accession Number:</span>
                      <span>{itemToDisplay.accession}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-bold">YUAG Negative Number:</span>
                      <span>{itemToDisplay.negativeNumber}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-bold">Image Type:</span>
                      <span>{itemToDisplay.imageType}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-bold">ARTSTOR Link:</span>
                      <span>
                        <a href={itemToDisplay.link} target="_blank">
                          {itemToDisplay.link}
                        </a>
                      </span>
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={closeItem}
                        className="border-4 border-gray-400 bg-blue p-3 rounded-xl"
                        onMouseEnter={(e) => {
                          (e.target as Element).classList.remove("bg-blue");
                          (e.target as Element).classList.add("bg-gray-400");
                        }}
                        onMouseLeave={(e) => {
                          (e.target as Element).classList.remove("bg-gray-400");
                          (e.target as Element).classList.add("bg-blue");
                        }}
                      >
                        Close Item
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LocationView;
