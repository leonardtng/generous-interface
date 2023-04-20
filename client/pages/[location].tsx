import { useLocationObjects } from "@/constants/api";
import { LocationObject } from "@/types/api";
import Image from "next/image";
import React from "react";

type GroupedLocationObjects = {
  [key: string]: LocationObject[];
};

const LocationPage = () => {
  const { isLoading, data } = useLocationObjects();
  console.log(data);

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

  console.log(data && groupByType(data));

  return (
    <div className="w-screen flex justify-center items-center">
      <div className="grid grid-cols-12 max-w-[1000px] ">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data?.map((item) => {
            return (
              <div key={item.id}>
                <Image
                  src={item.imageLink}
                  width={30}
                  height={30}
                  alt={item.name}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default LocationPage;
