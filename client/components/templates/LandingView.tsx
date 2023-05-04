import React from "react";
import dynamic from "next/dynamic";

const LandingView = () => {
  const DuraInteractive = React.useMemo(
    () =>
      dynamic(() => import("@/components/organisms/DuraInteractive"), {
        loading: () => (
          <div className="w-[800px] h-[500px] flex justify-center items-center border">
            <p className="text-lg">The map is loading...</p>
          </div>
        ),
        ssr: false,
      }),
    [
      /* list variables which should trigger a re-render here */
    ]
  );

  return (
    <div className="bg-yellow-500/75 rounded-xl border-4 border-black">
      <div className="flex flex-col gap-6 items-center p-10">
        <div
          className={`font-primaryBold mt-5 text-6xl text-black tracking-widest`}
        >
          Generous Interface
        </div>
        <div className={`text-3xl tracking-wide text-black`}>Dura-Europos</div>
        <div className="text-xl text-black">Click on a marker below to start exploring!</div>
        <div className="border-4 border-yellow-200 rounded-md">
          <DuraInteractive />
        </div>
      </div>
    </div>
  );
};

export default LandingView;
