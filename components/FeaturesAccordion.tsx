"use client";

import { useState, useRef } from "react";
import type { JSX } from "react";
import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  type?: "video" | "image";
  path?: string;
  format?: string;
  alt?: string;
  svg?: JSX.Element;
}

// The features array is a list of features that will be displayed in the accordion.
// - title: The title of the feature
// - description: The description of the feature (when clicked)
// - type: The type of media (video or image)
// - path: The path to the media (for better SEO, try to use a local path)
// - format: The format of the media (if type is 'video')
// - alt: The alt text of the image (if type is 'image')
const features = [
  {
    title: "Recording",
    description:
      "Record your vocals in Miami`s Diamond Studio with our top of the line equipment and experienced engineers.",
    type: "video",
    path: "/images/recording.mp4",
    alt: "Audio Recording",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M3.979 15.045c-1.468.978-2.168 2.263-2.231 3.955h-1.748c.069-2.346 1.1-4.186 3.153-5.497l.826 1.542zm15.36-12.045c1.468 0 2.661 1.194 2.661 2.662 0 1.115-.651 2.238-2.085 2.521l-2.366-4.417c.63-.662 1.268-.766 1.79-.766zm0-2c-1.852 0-3.198.966-4.138 2.619l3.545 6.618c3.4.222 5.254-2.149 5.254-4.575 0-2.598-2.098-4.662-4.661-4.662zm-3.722 7.631l-7.418 2.977 6.602-4.5-.949-1.772-9.38 6.393 1.557 2.906 10.539-4.229-.951-1.775zm-6.38 6.87c.633.619.764 1.648.764 2.558v4.941h1.999v-5.097c0-1.776.662-3.024 1.735-4.207l-4.498 1.805z"/></svg>
    ),
  },
  {
    title: "Mixing and Mastering",
    description:
      "Have your song or project mixed and mastered by our expert engineers.",
      type: "image",
      path: "/images/mixing.jpg",
      alt: "A computer",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M4.516 22c-2.951-.61-4.516-3.09-4.516-5.5 0-2.615 1.731-5.198 5.283-5.5-1.415 1.591-2.283 3.708-2.283 6 0 1.782.618 3.6 1.516 5zm19.484-5.5c0 2.409-1.55 4.889-4.5 5.5.897-1.4 1.5-3.218 1.5-5 0-2.292-.868-4.409-2.283-6 3.552.303 5.283 2.886 5.283 5.5zm-5.074-7.487c.942.084 1.782.294 2.529.601-1.27-4.388-4.666-7.614-9.455-7.614-4.786 0-8.173 3.225-9.442 7.607.744-.303 1.582-.512 2.52-.595 1.347-2.538 3.842-4.04 6.922-4.034 3.081-.006 5.578 1.496 6.926 4.035zm-4.03 10.624c-1.6 1.6-4.193 1.6-5.793 0-1.6-1.6-1.6-4.194 0-5.793 1.6-1.6 4.194-1.6 5.793 0 1.6 1.599 1.6 4.193 0 5.793zm-3.123-3.952l-1.374-1.374-.828.828 1.375 1.374.827-.828zm7.227 1.481v-.851h-1.012c-.035-.511-.136-1.004-.292-1.472l.937-.387c-.094-.27-.202-.533-.326-.786l-.938.388c-.227-.452-.508-.871-.836-1.249l.718-.717c-.188-.212-.39-.414-.603-.602l-.717.717c-.367-.32-.775-.595-1.213-.818l.395-.934c-.254-.125-.516-.236-.785-.331l-.393.934c-.479-.164-.986-.268-1.51-.305v-1.013h-.851v1.011c-.511.037-1.004.136-1.472.292l-.388-.937c-.27.093-.533.202-.786.326l.388.938c-.451.226-.871.508-1.249.836l-.717-.717c-.212.188-.414.389-.602.602l.717.717c-.319.368-.595.775-.818 1.213l-.934-.394c-.126.253-.236.515-.331.785l.933.393c-.163.479-.268.985-.304 1.51h-1.011v.851h1.012c.036.51.136 1.003.292 1.471l-.937.388c.093.27.202.532.326.787l.937-.388c.227.452.508.87.837 1.248l-.729.728.603.6 1.331-1.33c-1.115-.946-1.824-2.357-1.824-3.93 0-2.841 2.312-5.152 5.152-5.152s5.152 2.312 5.152 5.152c0 1.573-.709 2.984-1.824 3.93l1.32 1.321c.213-.188.414-.39.603-.602l-.718-.718c.319-.368.595-.774.818-1.212l.935.394c.126-.253.236-.515.331-.784l-.934-.394c.164-.479.268-.985.305-1.509h1.012z"/></svg>
    ),
  },
  {
    title: "Production",
    description:
      "Have your song produced by our team of experienced producers.",
    type: "video",
    path: "/images/production.mp4",
    alt: "anuel & farruko album produced at mars miami studios",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M22 22.966v1.034h-20v-1.034c0-2.1.166-3.312 2.648-3.886 2.804-.647 5.572-1.227 4.241-3.682-3.943-7.274-1.124-11.398 3.111-11.398 4.152 0 7.043 3.972 3.11 11.398-1.292 2.44 1.375 3.02 4.241 3.682 2.483.573 2.649 1.786 2.649 3.886zm-10-21.229c2.228-.004 3.948 1.329 4.492 3.513h1.212c-.528-2.963-2.624-5.25-5.704-5.25s-5.176 2.287-5.704 5.25h1.212c.544-2.184 2.264-3.518 4.492-3.513zm5.542 10.263c1.608 0 2.458-1.507 2.458-3.01 0-1.497-.842-2.99-2.755-2.99.832 1.603.925 3.656.297 6zm-11.112 0c-.632-2.331-.534-4.384.313-6-1.913 0-2.743 1.489-2.743 2.984 0 1.505.843 3.016 2.43 3.016z"/></svg>
    ),
  },
  
] as Feature[];

// An SEO-friendly accordion component including the title and a description (when clicked.)
const Item = ({
  feature,
  isOpen,
  setFeatureSelected,
}: {
  index: number;
  feature: Feature;
  isOpen: boolean;
  setFeatureSelected: () => void;
}) => {
  const accordion = useRef(null);
  const { title, description, svg } = feature;

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
        onClick={(e) => {
          e.preventDefault();
          setFeatureSelected();
        }}
        aria-expanded={isOpen}
      >
        <span className={`duration-100 ${isOpen ? "text-primary" : ""}`}>
          {svg}
        </span>
        <span
          className={`flex-1 text-base-content ${
            isOpen ? "text-primary font-semibold" : ""
          }`}
        >
          <h3 className="inline">{title}</h3>
        </span>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{description}</div>
      </div>
    </li>
  );
};

// A component to display the media (video or image) of the feature. If the type is not specified, it will display an empty div.
// Video are set to autoplay for best UX.
const Media = ({ feature }: { feature: Feature }) => {
  const { type, path, format, alt } = feature;
  const style = "rounded-2xl aspect-square w-full sm:w-[26rem]";
  const size = {
    width: 500,
    height: 500,
  };

  if (type === "video") {
    return (
      <video
        className={style}
        autoPlay
        muted
        loop
        playsInline
        controls
        width={size.width}
        height={size.height}
      >
        <source src={path} type={format} />
      </video>
    );
  } else if (type === "image") {
    return (
      <Image
        src={path}
        alt={alt}
        className={`${style} object-cover object-center`}
        width={size.width}
        height={size.height}
      />
    );
  } else {
    return <div className={`${style} !border-none`}></div>;
  }
};

// A component to display 2 to 5 features in an accordion.
// By default, the first feature is selected. When a feature is clicked, the others are closed.
const FeaturesAccordion = () => {
  const [featureSelected, setFeatureSelected] = useState<number>(0);

  return (
    <section
      className="py-24 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto bg-base-100 "
      id="features"
    >
      <div className="px-8">
        <h2 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-12 md:mb-24">
        Miami`s 
          <span className="bg-neutral text-neutral-content px-2 md:px-4 ml-1 md:ml-1.5 leading-relaxed whitespace-nowrap">
          Diamond Studio
          </span>
        </h2>
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
            <ul className="w-full">
              {features.map((feature, i) => (
                <Item
                  key={feature.title}
                  index={i}
                  feature={feature}
                  isOpen={featureSelected === i}
                  setFeatureSelected={() => setFeatureSelected(i)}
                />
              ))}
            </ul>

            <Media feature={features[featureSelected]} key={featureSelected} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAccordion;