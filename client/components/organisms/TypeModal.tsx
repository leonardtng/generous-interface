import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import startCase from "lodash/startCase";
import { LocationObject } from "@/types";

const TypeModal = (props: any) => {
  const Modal = dynamic(() => import("../molecules/Modal"), { ssr: false });
  const ImageDisplay = dynamic(() => import("../molecules/ImageDisplay"), { ssr: false });
  const ItemDisplay = dynamic(() => import("../molecules/ItemDisplay"), {
    ssr: false,
  });

  const [itemToDisplay, setItemToDisplay] = useState<LocationObject | null>(
    null
  );

  let data = props.data;
  let groupToDisplay = props.groupToDisplay;
  let setGroupToDisplay = props.setGroupToDisplay;

  const closeGroup = () => {
    setGroupToDisplay(null);
    setItemToDisplay(null);
  };

  const updateScroll = () => {
    let scrollElt = document.getElementById("modalScroller");
    props.setScrollPos(scrollElt ? scrollElt.scrollTop : 0);
  };

  const setScroll = () => {
    let scrollElt = document.getElementById("modalScroller");
    if (scrollElt) {
      scrollElt.scrollTop = props.scrollPos.current;
    }
  }

  const changeItem = (item: LocationObject | null) => {
    setItemToDisplay(item);
  };
  
  const closeItem = () => {
    changeItem(null)
  };

  return (
    <div>
      <Modal
        isOpen={Boolean(groupToDisplay)}
        handleClose={closeGroup}
        className="[&_.modalCloseButton]:top-5 [&_.modalCloseButton]:right-5 [&_.modalCloseButton]:fill-white"
      >
        <div className="flex flex-row items-center gap-20 h-[80vh] max-w-[80vw]">
          <div className="h-[80vh] max-w-[80vw] bg-gray-700 p-5 rounded-xl overflow-hidden pt-20 flex flex-row gap-20">
              <ImageDisplay
                data={data}
                changeItem={changeItem}
                groupToDisplay={groupToDisplay}
                updateScroll={updateScroll}
                setScroll={setScroll}
               />
              <ItemDisplay
                itemToDisplay={itemToDisplay}
                closeItem={closeItem}
              />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TypeModal;
