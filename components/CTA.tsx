import Image from "next/image";
import config from "@/config";

const CTA = () => {
  return (
    <section className="relative hero overflow-hidden min-h-screen">
      <Image
        src="/images/studioEmpty.jpg"
        alt="Background"
        className="object-cover w-full"
        fill
      />
      <div className="relative hero-overlay bg-neutral bg-opacity-70"></div>
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
           Boost your sound quality and record with us today!
          </h2>

        
          <a
            href={`mailto:${config.mailgun.supportEmail}`}
            target="_blank"
            className="link link-hover"
            aria-label="Contact Support"
          >
            <button className="btn btn-primary btn-wide">
              Book Now
              </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
