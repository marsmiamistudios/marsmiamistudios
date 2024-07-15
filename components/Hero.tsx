import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";
import image from "@/app/homepage.jpg";

const Hero = () => {
  return (
    <>
    <section className="mt-0 pt-0 max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 pt-6 lg:py-10 ">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">

        <h3 className="font-extrabold text-3xl lg:text-5xl tracking-tight pb-14" >
          Mars Miami Recording Studio
        </h3>
     
      </div>
     
    </section>
     <div style={{marginTop:"-5%", marginBottom:"6%"}}> 
     <video className="w-[90%] md:w-[70%]" style={{margin:"0 auto", textAlign:"center"}} src="/landingVideo.mov" autoPlay muted loop title="video player"></video>
    </div>
  </>
  );
};

export default Hero;
