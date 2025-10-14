

import Image from "next/image";

export default function Projects(){
    return (
    <div className="w-full flex flex-col items-center gap-6 md:gap-0 border-t border-white/30">
        <div className="w-fit md:order-b-4 border-highlight p-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide font-semibold text-highlight trans uppercase">Work Experience</h1>
        </div>


        <div className="h-[66dvw] md:h-[30dvw] w-full flex flex-col md:flex-row">
            <div className="md:border-r-2 border-highlight w-full md:w-1/2 h-fit md:h-full flex items-center justify-center order-1">
                <div className="w-full h-full sm:w-4/5 sm:h-4/5 p-2 flex flex-col justify-center">
                    <h2 className="text-highlight font-bold tracking-wide text-2xl sm:text-2xl md:text-4xl lg:text-5xl trans">SOFIA</h2>
                    <p className="text-pretty tracking-wide text-[0px] sm:text-[14px] lg:text-lg trans">
                        CIAD’s Academic Intelligence Platform designed to support curriculum design, thesis tracking and analysis, research trend mapping, and the center’s alignment with Mexico’s strategic development programs.
                    </p>
                    <p className="text-pretty tracking-wide text-[0px] xl:text-lg trans">
                        <span className="underline underline-offset-2">Techs:</span> Next.js, FastAPI, FlightPHP, OpenAPI, Docker, OAuth2.0, Linux, Git
                    </p>
                     <p className="text-pretty tracking-wide text-[0px] xl:text-lg trans">
                        <span className="underline underline-offset-2">Langs:</span> Typsescript, Python, PHP, Bash
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
                <div className="w-full h-full sm:w-4/5 sm:h-4/5 p-2 flex flex-col justify-center">
                    <h2 className="text-highlight font-bold tracking-wide text-2xl sm:text-2xl md:text-4xl lg:text-5xl trans">CRYPTO BOT</h2>
                    <p className="text-pretty tracking-wide text-[0px] sm:text-[14px] lg:text-lg trans">
                        A 24/7 cryptocurrency monitoring and trading system. Cryptobot calculates real-time market indicators, evaluates trading strategies, and issues automated buy/sell signals. It adapts to market trends, optimizing decision-making and portfolio performance.
                    </p>
                    <p className="text-pretty tracking-wide text-[0px] xl:text-lg trans">
                        <span className="underline underline-offset-2">Techs:</span> Next.js, OpenAPI, Gin, Webosockets, Docker, Linux, Git
                    </p>
                    <p className="text-pretty tracking-wide text-[0px] xl:text-lg trans">
                        <span className="underline underline-offset-2">Langs:</span> Typsescript, Go, Bash
                    </p>
                </div>
            </div>

            <div className="md:border-r-2 border-highlight w-full md:w-1/2 flex-1 md:h-full flex items-center justify-center relative order-2 md:order-1">
                <div className="w-1/10 h-1/2 -z-10 border-b-4 border-highlight absolute top-0 right-0 hidden md:block"></div>
                <div className="w-full h-full sm:w-4/5 sm:h-4/5 md:border-4 border-highlight overflow-clip relative shadow-2xl">
                    <Image
                        draggable={false}
                        className="object-fill scale-105"
                        src="/images/bot.png"
                        alt="sofia"
                        fill
                        sizes="(max-width: 640px) 50vh, (max-width: 1024px) 50vw, 33vw"
                    />
                </div>
            </div>
        </div>

        <div className="h-[66dvw] md:h-[30dvw] w-full flex flex-col md:flex-row">
            <div className="md:border-r-2 border-highlight w-full md:w-1/2 h-fit md:h-full flex items-center justify-center order-1">
                <div className="w-full h-full sm:w-4/5 sm:h-4/5 p-2 flex flex-col justify-center">
                    <h2 className="text-highlight font-bold tracking-wide text-2xl sm:text-2xl md:text-4xl lg:text-5xl trans">REPORTES CPA</h2>
                    <p className="text-pretty tracking-wide text-[0px] sm:text-[14px] lg:text-lg trans">
                        The CIAD analytics platform for alumni and faculty insights. CPA Reports automates the generation of key institutional metrics including graduate outcomes, dropout rates, faculty activity, course popularity, and research. Designed for administrative efficiency, it enables staff to create customized reports that integrate seamlessly into existing workflows.
                    </p>
                    <p className="text-pretty tracking-wide text-[0px] xl:text-lg trans">
                        <span className="underline underline-offset-2">Techs:</span> Next.js, OpenAPI, Docker, Linux, Git
                    </p>
                     <p className="text-pretty tracking-wide text-[0px] xl:text-lg trans">
                        <span className="underline underline-offset-2">Langs:</span> Typsescript, Bash
                    </p>
                </div>
            </div>

            <div className="md:border-l-2 border-highlight w-full md:w-1/2 flex-1 md:h-full flex items-center justify-center relative order-2">
                <div className="w-1/10 h-1/2 -z-10 border-b-4 border-highlight absolute top-0 left-0 hidden md:block"></div>
                <div className="w-full h-full sm:w-4/5 sm:h-4/5 md:border-4 border-highlight overflow-clip relative shadow-2xl">
                    <Image
                        draggable={false}
                        className="object-fill scale-105"
                        src="/images/reportes.png"
                        alt="sofia"
                        fill
                        sizes="(max-width: 640px) 50vh, (max-width: 1024px) 50vw, 33vw"
                    />
                </div>
            </div>
        </div>

        <div className="h-[66dvw] md:h-[30dvw] w-full flex flex-col md:flex-row">
            <div className="md:border-l-2 border-highlight w-full md:w-1/2 h-fit md:h-full flex items-center justify-center order-1 md:order-2">
                <div className="w-full h-full sm:w-4/5 sm:h-4/5 p-2 flex flex-col justify-center">
                    <h2 className="text-highlight font-bold tracking-wide text-2xl sm:text-2xl md:text-4xl lg:text-5xl trans">MARIA</h2>
                    <p className="text-pretty tracking-wide text-[0px] sm:text-[14px] lg:text-lg trans">
                        CIAD’s intelligent assistant for curriculum modernization. Built on ChatGPT, MARIA supports teachers in course design by aligning content with XXI-century competencies and objectives. It tracks instructional theory, assists in drafting theoretical frameworks for new courses, and refines syllabi. The system integrates securely with SOFIA via OAuth 2.0 to retrieve course data automatically.
                    </p>
                    <p className="text-pretty tracking-wide text-[0px] xl:text-lg trans">
                        <span className="underline underline-offset-2">Techs:</span> OpenAPI, OAuth2.0,
                    </p>
                     <p className="text-pretty tracking-wide text-[0px] xl:text-lg trans">
                        <span className="underline underline-offset-2">Langs:</span> JSON format
                    </p>
                </div>
            </div>

            <div className="md:border-r-2 border-highlight w-full md:w-1/2 flex-1 md:h-full flex items-center justify-center relative order-2 md:order-1">
                <div className="w-1/10 h-1/2 -z-10 border-b-4 border-highlight absolute top-0 right-0 hidden md:block"></div>
                <div className="w-full h-full sm:w-4/5 sm:h-4/5 md:border-4 border-highlight overflow-clip relative shadow-2xl">
                    <Image
                        draggable={false}
                        className="object-fill scale-105"
                        src="/images/maria.png"
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