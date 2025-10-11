import useTranslation, { parseLocale } from "@/hooks/useTranslation";
import Image from "next/image";
import Link from "next/link";


export default async function Home({
    params
}:{
    params: Promise<{locale: string}>,
}){
    const lang = await params;
    const l = parseLocale(lang.locale);
    const { t } = useTranslation(l);

    return (
        <div className="h-full w-full flex items-center border-t  border-white/30">
            <div className="w-full h-2/3 lg:w-1/2 p-4 flex items-center trans">

                <div className="w-full h-full flex flex-col justify-between">
                    <div className="">
                        <p className="text-pretty tracking-wider text-xl sm:text-3xl xl:mx-2 text-white trans">Hi, I'm Kevin</p>
                        <h1 className="text-highlight text-5xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl uppercase font-bold trans">Full Stack Developer</h1>
                        <p className="text-pretty tracking-wider text-md sm:text-lg xl:text-xl text-gray-200 trans">
                            Five years experience with Next,js, FastAPI, FlightPHP, Docker, SQL, 
                            Typescript, Python, PHP, GO, Bash, TailwindCss,
                            CI/CD, Caddy, Git, UI/UX, Linux
                        </p>
                    </div>
                    <div className="w-full flex justify-center">
                        <Link className="text-xl font-bold sm:text-2xl sm:p-4 p-2 w-fit border-2 border-highlight text-highlight shadow-2xl hover:font-extrabold bg-primary/80 trans" href="/projects">View Projects</Link>
                    </div>
                    <div></div>
                </div>

            </div>
            {/* <div className="-z-20 bg-highlight/80 w-full h-full fixed top-0 left-0 lg:[clip-path:polygon(55%_100%,62%_60%,75%_25%,88%_60%,95%_100%)] [clip-path:polygon(10%_100%,20%_70%,50%_60%,80%_70%,90%_100%)] trans">

            </div> */}
            <div className="w-0 lg:w-1/2 h-full">
                <div className="w-full h-full relative overflow-clip">
                    <Image
                        draggable={false}
                        className="object-contain object-bottom m-4"
                        src="/images/me.png"
                        alt="me suit"
                        fill
                        sizes="(max-width: 640px) 50vh, (max-width: 1024px) 50vw, 33vw"
                    />
                </div>
            </div>
        </div>
    );
}
