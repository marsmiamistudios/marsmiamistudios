import Footer from "@/components/Footer";
import Header from "@/components/Header";
import config from "@/config";

const Studios = () => {
  return (
    <main>
    <Header></Header>
    <div className="min-h-screen p-8 pb-24">
      <section className="py-12 px-16 mx-auto space-y-4">
        <h1 className="text-3xl md:text-4xl font-extrabold">Studios</h1>
      </section>
      <div className="px-8 max-w-5xl mx-auto">
        <div>
         <h1 className="text-2xl md:text-3xl font-extrabold">Studio A</h1>
        <div className="w-9/10 mx-auto px-8 py-16 md:py-16 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-2">
                <div className="w-full md:w-1/3 px-0.2">
                    <img src="/images/StudioA.png"
                    alt="Studio A"
                    className="object-cover object-center w-full h-auto"
                    />
                </div>
                
                <div className="w-full md:w-1/3 px-2">
                    <img src="/images/StudioA1.png"
                    alt="Studio a1"
                    className="object-cover object-center w-full h-auto"
                    />
                </div>

                <div className="w-full md:w-1/3 px-2">
                    <img src="/images/StudioA3.png"
                    alt="Studio A3"
                    className="object-cover object-center w-full h-auto"
                    />
                </div>
            </div>
                
            </div>
            <h3 className="text-xl md:text-md font-extrabold">Equipment List</h3>
            <ul className="list-disc list-inside flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 px-0.2 ">
                    <li>Recording Booth</li>
                    <li>Neumann U87 Condenser Microphone</li>
                    <li>Focuscrite Clarett OctoPro Pre-Amp</li>
                    <li>Focusrite Red 1 500 Pre-Amp</li>
                    <li>Neve 1073LB 500 Series Mono Microphone Pre-Amp</li>
                    <li>Louder Than Liftoff Silver Bullet Stereo Tone Amp</li>
                    <li>Maag Audio EQ4 500 Series 6-band Equalizer</li>
                    <li>Solid State Logic G Comp 500 Series Stereo Bus Compressor</li>
                    <li>Shadow Hills Mono Optograph 500 Mastering Compressor</li>
                </div>
                <div className="w-full md:w-1/2 px-0.2 ">
                    <li>Wes Audio ngBusComp</li>
                    <li>Universal Audio Apollo x8 Audio Interface</li>
                    <li>Universal Audio 6176 Vintage Channel Strip</li>
                    <li>Avalon VT-737SP Tube Channel Strip</li>
                    <li>Purple Audio MC77 Limiting Amp</li>
                    <li>BetterMaker Mastering Limiter</li>
                    <li>Augspurger Duo Speakers</li>
                    <li>2 HD Monitors + TV</li>
                </div>
            </ul>
        </div>
{/* 
        <div className="mt-8">
            <h1 className="text-2xl md:text-3xl font-extrabold">Studio B</h1>
            <div className="w-9/10 mx-auto px-8 py-16 md:py-16 text-center">
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-2">
                    <div className="w-full md:w-1/3 px-0.2">
                        <img src="/images/StudioB3.png"
                        alt="Studio B desk"
                        className="object-cover object-center w-full h-auto"
                        />
                    </div>
                    
                    <div className="w-full md:w-1/3 px-2">
                        <img src="/images/StudioB2.png"
                        alt="Studio B wide"
                        className="object-cover object-center w-full h-auto"
                        />
                    </div>

                    <div className="w-full md:w-1/3 px-2">
                        <img src="/images/StudioB.png"
                        alt="Studio b coubch"
                        className="object-cover object-center w-full h-auto"
                        />
                    </div>
                </div>
            </div>
            <h3 className="text-xl md:text-md font-extrabold">Equipment List</h3>
            <ul className="list-disc list-inside flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 px-0.2 ">
                    <li>Neumann U87 Condenser Microphone</li>
                    <li>Focuscrite Scarlet 2i2</li>
                    <li>Universal Audio 6176 Vintage Channel Strip</li>
                    <li>Akai Professional MPK249 49-key Keyboard Controller</li>
                </div>
                <div className="w-full md:w-1/2 px-0.2">
                    <li>Alesis Monitor Two&apos;s</li>
                    <li>KRK Rokit 8s</li>
                    <li>HD Monitor + TV</li>
                </div>
            </ul>
        </div> */}
      </div>
    </div>
    <Footer></Footer>
    </main>
  );
}

export default Studios;
