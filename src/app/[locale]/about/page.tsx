import Image from "next/image";

export default function About(){
    return (
        <div className="w-full h-full flex flex-col items-center xl:flex-row border-t gap-4 border-white/30">


            <div className="w-full max-w-172 xl:w-1/3 h-[70dvh] xl:h-[90dvh] flex flex-col trans">
                <div className="h-3/5 flex items-center justify-center order-1">
                    <div className="w-4/5 h-4/5 relative shadow-2xl">
                        <Image
                            draggable={false}
                            className="object-cover object-center"
                            src="/images/nmsu.png"
                            alt="me suit"
                            fill
                            sizes="(max-width: 640px) 50vh, (max-width: 1024px) 50vw, 33vw"
                        />
                    </div>
                </div>
                <div className="h-2/5 flex items-center justify-center order-2">
                    {/* <div className="w-4/5 h-4/5 [text-shadow:2_2_12_#000000]"> */}
                    <div className="w-4/5 h-4/5">
                        <h2 className="uppercase text-3xl text-highlight font-semibold tracking-wider">Education</h2>
                        <h3 className="uppercase text-white tracking-wider">College</h3>
                        <ul className="list-disc list-inside text-white/65">
                            <li>UACH -  Chihuahua</li>
                            <li>NMSU - New Mexico</li>
                        </ul>
                        <h3 className="uppercase text-white tracking-wider">Degrees</h3>
                        <ul className="list-disc list-inside text-white/65">
                            <li>Aerospace Engineering</li>
                            <li>Mechanical Engineering</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-172 xl:w-1/3 h-[70dvh] xl:h-[90dvh] flex flex-col trans">
                <div className="h-3/5 flex items-center justify-center order-1 xl:order-2 ">
                    <div className="w-4/5 h-4/5 relative overflow-clip shadow-2xl">
                        <Image
                            draggable={false}
                            className="object-cover object-center"
                            src="/images/hobby.png"
                            alt="me suit"
                            fill
                            sizes="(max-width: 640px) 50vh, (max-width: 1024px) 50vw, 33vw"
                        />
                    </div>
                </div>
                <div className="h-2/5 flex items-center justify-center order-1 xl:order-1">
                    <div className="w-4/5 h-4/5 flex flex-col justify-end">
                        <h2 className="uppercase text-3xl text-highlight font-semibold tracking-wider">Hobbies</h2>
                        <ul className="list-disc list-inside text-white/65">
                            <li>Hiking</li>
                            <li>Chess</li>
                            <li>Basketball</li>
                            <li>Mountain Biking</li>
                            <li>Math Challenges</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-172 xl:w-1/3 h-[70dvh] xl:h-[90dvh] flex flex-col trans">
                <div className="h-3/5 flex items-center justify-center order-1">
                    <div className="w-4/5 h-4/5 relative shadow-2xl">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            src="https://www.youtube.com/embed/TtIPNrUdft0?si=e18RCu1RsfFKQktK&start=1"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </div>
                <div className="h-2/5 flex items-center justify-center order-2">
                    <div className="w-4/5 h-4/5">
                        <h2 className="uppercase text-3xl text-highlight font-semibold tracking-wider">Skills</h2>
                        <h3 className="uppercase text-white tracking-wider">Technologies</h3>
                        <p className="text-white/65">Next.js, FastAPI, FlightPHP, SQL, OpenAPI, Docker, Git</p>
                        <h3 className="uppercase text-white tracking-wider">Languages</h3>
                        <p className="text-white/65">Spanish, English, Typescript Python, PHP, Go, Bash</p>
                    </div>
                </div>
            </div>


            
        </div>
    );
}