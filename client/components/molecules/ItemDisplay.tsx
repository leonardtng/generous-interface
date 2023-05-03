import { LocationObject } from "@/types";
import Image from "next/image";

interface Props {
  itemToDisplay: LocationObject | null;
  closeItem: () => void;
}

const ItemDisplay = ({ itemToDisplay, closeItem }: Props) => {
  return (
    <div>
      {itemToDisplay && (
        <div className="max-w-[40vw] h= bg-black p-5 overflow-scroll flex flex-col border-4 border-yellow-600 h-full">
          <h2 className="text-3xl text-white pb-5 max-w-[40vw]">{itemToDisplay.name}</h2>
          <div className="flex-1 grid grid-cols-2 gap-5 overflow-auto">
            <Image
              src={itemToDisplay.imageLink}
              width={450}
              height={450}
              alt={itemToDisplay.name}
            />
            <div className="flex flex-col gap-2 w-full">
              {itemToDisplay.type && (
                <div className="flex align-center flex-col border-white border-b-2">
                  <span className="font-bold">Type:</span>
                  <span>{itemToDisplay.type}</span>
                </div>
              )}
              {itemToDisplay.locationName && (
                <div className="flex flex-col border-white border-b-2">
                  <span className="font-bold">Location Found:</span>
                  <span>{itemToDisplay.locationName}</span>
                </div>
              )}
              {itemToDisplay.accession && (
                <div className="flex flex-col border-white border-b-2">
                  <span className="font-bold">YUAG Accession Number:</span>
                  <span>{itemToDisplay.accession}</span>
                </div>
              )}
              {itemToDisplay.negativeNumber && (
                <div className="flex flex-col border-white border-b-2">
                  <span className="font-bold">YUAG Negative Number:</span>
                  <span>{itemToDisplay.negativeNumber}</span>
                </div>
              )}
              {itemToDisplay.imageType && (
                <div className="flex flex-col border-white border-b-2">
                  <span className="font-bold">Image Type:</span>
                  <span>{itemToDisplay.imageType}</span>
                </div>
              )}
              {itemToDisplay.link && (
                <div className="flex flex-col border-white border-b-2">
                  <span className="font-bold">ARTSTOR Link:</span>
                  <span>
                    <a href={itemToDisplay.link} target="_blank">
                      {itemToDisplay.link}
                    </a>
                  </span>
                </div>
              )}
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
  );
};

export default ItemDisplay;
