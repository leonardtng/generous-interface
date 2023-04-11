import { useRouter } from "next/router";
import React from "react";

const LocationPage = () => {
  const router = useRouter();
  const { location } = router.query;

  return <div>This is the page for {location}</div>;
};

export default LocationPage;
