import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";
import image from "@/app/homepage.jpg";

const Hero = () => {
  return (
    <>
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">

        <h3 className="font-bold text-4xl lg:text-4xl tracking-tight mb-10">
          Mars Miami Studios
        </h3>
     
      </div>
     
    </section>
     <div className="lg:w-full" style={{marginTop:"-5%", marginBottom:"6%"}}> 
      <iframe width="90%" height="500" style={{margin:"0 auto", textAlign:"center"}} src="https://www.youtube.com/embed/Ho00TLXFxc8?si=lsaw45TjLpDr0tGQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  </>
  );
};

export default Hero;
