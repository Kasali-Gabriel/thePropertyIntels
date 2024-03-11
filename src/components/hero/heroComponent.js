import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavMain from "../navigatonBar/navMain";
import NavbarSmallScreen from "../navigatonBar/navSmall";
// import video from "../../../assets/herovideo.mp4";
function HeroComponent() {
  return (
    <div className=" relative w-full h-full rounded-sm overflow-hidden">
      <div className="bg-gradient-to-br from-[rgba(0,0,0,0.35)_25.27%,rgba(0,0,0,0.35)] via-[rgba(0,0,0,0.35)_53.22%] to-[rgba(0,0,0,0.0)_69.08%] absolute top-0 left-0 right-0 bottom-0"></div>
      <NavMain />
      <NavbarSmallScreen />

      <video
        className=" h-full w-full max-w -[1440px]"
        // src={video}
        src="/assets/videos/herovideo.mp4"
        width="1440"
        height="500"
        loop
        autoPlay
        muted
        // controls
      />

      {/* <iframe
        className="h-screen w-screen"
        src="https://www.youtube.com/embed/RlKiy9_vmLo?autoplay=1&loop=1&playlist=RlKiy9_vmLo&controls=0&modestbranding=1&showinfo=0&autohide=1&mute=1"
        // frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      /> */}

      <div className="max-lg:mt-[3.06rem] py-[50px] text-white rounded-md absolute text-center w-[90%]  -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg- [#ffffff7a]">
        <h2 className="text-[1.875rem] w-full max-w-[44.9375rem] mx-auto md:text-[3.75rem] leading-[2rem] md:leading-[3.75rem] tracking-[-0.075rem] font-[900] font-Geist">
          Property Management Investment & Advice
        </h2>

        <h1 className="text-[0.875rem] md:text-[1.25rem] font-normal tracking-[-0.025rem] ">
          Let&#39;s manage your property needs and you enjoy a timely Real
          Estate advice with guaranteed peace of mind
        </h1>
        <div className="md:flex mt-5 gap-[1rem] justify-center font-semibold font-Geist tracking-[-0.0225rem] text-[1.125rem] ">
          <Link className="inline-block" href="/?registrationType=agent">
            <button className="max-lg:mb-[.62rem] text-[#DFEFFF] shadow-[0px_0px_10px_0px_rgba(163,163,163,0.25)] px-8 py-2 rounded-[6.25rem] border-[1px_solid_rgba(255,255,255,0.11)] bg-primary ">
              Become an Agent
            </button>
          </Link>
          {/* backdrop-filter: blur(10px); */}
          <Link className="inline-block" href="/?registrationType=client">
            <button className=" text-primary shadow-[0px_0px_10px_0px_rgba(163,163,163,0.25)] px-8 py-2 rounded-[6.25rem] border-[1px_solid_rgba(255,255,255,0.11)] bg-[#DFEFFF] ">
              Register your property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
