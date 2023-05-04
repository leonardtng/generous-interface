import React from "react";
import LocationView from "@/components/templates/LocationView";

const LocationPage = () => {
  return (
    <div className="flex flex-col items-center justify-center z-0 h-screen bg-[url('/bg.jpg')] bg-cover overflow-y-scroll">
      <LocationView />
    </div>
  );
};

export default LocationPage;
