

import Image from "next/image";

export default function Projects(){
    return (
    <div className="w-full flex flex-col items-center gap-6 md:gap-0 border-t border-white/65">
        <div className="w-fit md:order-b-4 border-highlight p-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide font-semibold text-highlight trans">Work Experience</h1>

        </div>


        <div className="h-[66dvw] md:h-[30dvw] w-full flex flex-col md:flex-row">
            <div className="md:border-r-2 border-highlight w-full md:w-1/2 h-fit md:h-full flex items-center justify-center order-1">
                <div className="w-full h-full sm:w-4/5 sm:h-4/5 p-2">
                    <h2 className="text-highlight font-bold tracking-wide text-2xl sm:text-2xl md:text-4xl lg:text-5xl trans">SOFIA</h2>
                    <p className="text-pretty tracking-wide text-[0px] sm:text-[14px] lg:text-lg trans">
                        CIAD's academic intelligence platform. Built to support curriculum design, thesis tracking and analsys, research trend mapping and, center's alignment with mexico's stategic development programs.
                    </p>
                </div>
            </div>

            <div className="md:border-l-2 border-highlight w-full md:w-1/2 flex-1 md:h-full flex items-center justify-center relative order-2 trans">
                <div className="w-1/10 h-1/2 -z-10 border-b-4 border-highlight absolute top-0 left-0 hidden md:block"></div>
                <div className="w-full h-full sm:w-4/5 sm:h-4/5 md:border-4 border-highlight overflow-clip relative shadow-2xl">
                    <Image
                        draggable={false}
                        className="object-fill scale-105"
                        src="/images/sofia.png"
                        alt="sofia"
                        fill
                        sizes="(max-width: 640px) 50vh, (max-width: 1024px) 50vw, 33vw"
                    />
                </div>
            </div>
        </div>


        <div className="h-[66dvw] md:h-[30dvw] w-full flex flex-col md:flex-row">
            <div className="md:border-l-2 border-highlight w-full md:w-1/2 h-fit md:h-full flex items-center justify-center order-1 md:order-2">
                <div className="w-full h-full sm:w-4/5 sm:h-4/5 p-2">
                    <h2 className="text-highlight font-bold tracking-wide text-2xl sm:text-2xl md:text-4xl lg:text-5xl trans">SOFIA</h2>
                    <p className="text-pretty tracking-wide text-[0px] sm:text-[14px] lg:text-lg trans">
                        CIAD's academic intelligence platform. Built to support curriculum design, thesis tracking and analsys, research trend mapping and, center's alignment with mexico's stategic development programs.
                    </p>
                </div>
            </div>

            <div className="md:border-r-2 border-highlight w-full md:w-1/2 flex-1 md:h-full flex items-center justify-center relative order-2 md:order-1">
                <div className="w-1/10 h-1/2 -z-10 border-b-4 border-highlight absolute top-0 right-0 hidden md:block"></div>
                <div className="w-full h-full sm:w-4/5 sm:h-4/5 md:border-4 border-highlight overflow-clip relative shadow-2xl">
                    <Image
                        draggable={false}
                        className="object-fill scale-105"
                        src="/images/sofia.png"
                        alt="sofia"
                        fill
                        sizes="(max-width: 640px) 50vh, (max-width: 1024px) 50vw, 33vw"
                    />
                </div>
            </div>
        </div>

        <div className="h-[66dvw] md:h-[30dvw] w-full flex flex-col md:flex-row">
            <div className="md:border-r-2 border-highlight w-full md:w-1/2 h-fit md:h-full flex items-center justify-center order-1">
                <div className="w-full h-full sm:w-4/5 sm:h-4/5 p-2">
                    <h2 className="text-highlight font-bold tracking-wide text-2xl sm:text-2xl md:text-4xl lg:text-5xl trans">SOFIA</h2>
                    <p className="text-pretty tracking-wide text-[0px] sm:text-[14px] lg:text-lg trans">
                        CIAD's academic intelligence platform. Built to support curriculum design, thesis tracking and analsys, research trend mapping and, center's alignment with mexico's stategic development programs.
                    </p>
                </div>
            </div>

            <div className="md:border-l-2 border-highlight w-full md:w-1/2 flex-1 md:h-full flex items-center justify-center relative order-2">
                <div className="w-1/10 h-1/2 -z-10 border-b-4 border-highlight absolute top-0 left-0 hidden md:block"></div>
                <div className="w-full h-full sm:w-4/5 sm:h-4/5 md:border-4 border-highlight overflow-clip relative shadow-2xl">
                    <Image
                        draggable={false}
                        className="object-fill scale-105"
                        src="/images/sofia.png"
                        alt="sofia"
                        fill
                        sizes="(max-width: 640px) 50vh, (max-width: 1024px) 50vw, 33vw"
                    />
                </div>
            </div>
        </div>

        <div className="h-[66dvw] md:h-[30dvw] w-full flex flex-col md:flex-row">
            <div className="md:border-l-2 border-highlight w-full md:w-1/2 h-fit md:h-full flex items-center justify-center order-1 md:order-2">
                <div className="w-full h-full sm:w-4/5 sm:h-4/5 p-2">
                    <h2 className="text-highlight font-bold tracking-wide text-2xl sm:text-2xl md:text-4xl lg:text-5xl trans">SOFIA</h2>
                    <p className="text-pretty tracking-wide text-[0px] sm:text-[14px] lg:text-lg trans">
                        CIAD's academic intelligence platform. Built to support curriculum design, thesis tracking and analsys, research trend mapping and, center's alignment with mexico's stategic development programs.
                    </p>
                </div>
            </div>

            <div className="md:border-r-2 border-highlight w-full md:w-1/2 flex-1 md:h-full flex items-center justify-center relative order-2 md:order-1">
                <div className="w-1/10 h-1/2 -z-10 border-b-4 border-highlight absolute top-0 right-0 hidden md:block"></div>
                <div className="w-full h-full sm:w-4/5 sm:h-4/5 md:border-4 border-highlight overflow-clip relative shadow-2xl">
                    <Image
                        draggable={false}
                        className="object-fill scale-105"
                        src="/images/sofia.png"
                        alt="sofia"
                        fill
                        sizes="(max-width: 640px) 50vh, (max-width: 1024px) 50vw, 33vw"
                    />
                </div>
            </div>
        </div>

        <div className="h-[66dvw] md:h-[30dvw] w-full flex flex-col md:flex-row">
            <div className="md:border-r-2 border-highlight w-full md:w-1/2 h-fit md:h-full flex items-center justify-center order-1">
                <div className="w-full h-full sm:w-4/5 sm:h-4/5 p-2">
                    <h2 className="text-highlight font-bold tracking-wide text-2xl sm:text-2xl md:text-4xl lg:text-5xl trans">SOFIA</h2>
                    <p className="text-pretty tracking-wide text-[0px] sm:text-[14px] lg:text-lg trans">
                        CIAD's academic intelligence platform. Built to support curriculum design, thesis tracking and analsys, research trend mapping and, center's alignment with mexico's stategic development programs.
                    </p>
                </div>
            </div>

            <div className="md:border-l-2 border-highlight w-full md:w-1/2 flex-1 md:h-full flex items-center justify-center relative order-2">
                <div className="w-1/10 h-1/2 -z-10 border-b-4 border-highlight absolute top-0 left-0 hidden md:block"></div>
                <div className="w-full h-full sm:w-4/5 sm:h-4/5 md:border-4 border-highlight overflow-clip relative shadow-2xl">
                    <Image
                        draggable={false}
                        className="object-fill scale-105"
                        src="/images/sofia.png"
                        alt="sofia"
                        fill
                        sizes="(max-width: 640px) 50vh, (max-width: 1024px) 50vw, 33vw"
                    />
                </div>
            </div>
        </div>
     

    </div>
    );
}