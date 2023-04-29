import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useLocationObjects, useWindowSize } from "@/helpers";
import { Location, LocationObject } from "@/types";
import { useRouter } from "next/router";
import { LOCATIONS } from "@/constants";
import startCase from "lodash/startCase";

type GroupedLocationObjects = {
  [key: string]: LocationObject[];
};

const ImageDisplay = (props: any) => {
  let data = props.data;
  let changeItem = props.changeItem;
  let groupToDisplay = props.groupToDisplay;
  let setScroll = props.setScroll;
  let updateScroll = props.updateScroll;
  return (
    <div
      id="modalScroller"
      className="border-4 border-gray-400 overflow-scroll p-5 h-full"
      onLoad={setScroll}
      onScroll={updateScroll}
    >
      <h2 className="text-3xl pb-5">{startCase(groupToDisplay!)}</h2>
      <div className="flex-1 grid grid-cols-3 gap-5">
        {data
          ?.filter(
            (artObject: LocationObject) => artObject.type === groupToDisplay
          )
          .map((item: any, index: any) => (
            <a key={index} href="">
              <Image
                key={index}
                src={item.imageLink}
                width={150}
                height={150}
                alt={item.name}
                onMouseEnter={(e) => {
                  (e.target as Element).classList.add("scale-125");
                }}
                onMouseLeave={(e) => {
                  (e.target as Element).classList.remove("scale-125");
                }}
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
