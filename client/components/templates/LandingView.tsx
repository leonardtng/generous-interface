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
    <div className="flex flex-col gap-6 items-center">
      <div className={`font-primaryBold text-5xl`}>Generous Interface</div>
      <div className={`text-2xl`}>Dura Europas</div>
      <div>
        <DuraInteractive />
      </div>
    </div>
  );
};

export default LandingView;
