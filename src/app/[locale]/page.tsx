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
                        <p className="text-pretty tracking-widest text-xl sm:text-3xl xl:mx-2 text-white trans">Hi, I'm Kevin</p>
                        <h1 className="text-highlight text-5xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl tracking-wider uppercase font-bold trans">Full Stack Developer</h1>
                        <p className="text-pretty tracking-wider text-md sm:text-lg xl:text-xl/10 text-white/65 md:pr-8 trans">
                            Five years experience with Next,js, FastAPI, FlightPHP, Docker, SQL, 
                            Typescript, Python, PHP, GO, Bash, TailwindCss,
                            CI/CD, Caddy, Git, UI/UX, Linux
                        </p>
                    </div>
                    <div className="w-full flex justify-center md:justify-start xl:justify-center trans">
                        <Link className="text-xl font-bold sm:text-2xl sm:p-4 p-2 w-fit border-2 border-highlight text-highlight shadow-2xl hover:font-extrabold bg-primary/80 trans" href="/projects">View Projects</Link>
                    </div>
                    <div></div>
                </div>

            </div>
      
            <div className="w-0 lg:w-1/2 h-full">
                <div className="w-full h-full relative">
                    <Image
                        draggable={false}
                        className="object-contain object-bottom"
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
