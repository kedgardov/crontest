import useTranslation from "@/hooks/useTranslation";
import { getLocale } from "@/locales/locales";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaYoutube } from "react-icons/fa";


export default function Home(){

    const locale = getLocale();
    const { t } = useTranslation(locale);

    return (
        <div className="bg-radial-[at_85%_60%] from-gray-700 to-gray-950 font-montserrat tracking-wide flex-1 flex flex-col">

            <nav className="border-b-1 border-white/25 h-18 w-full flex items-center px-8 justify-between">
                <Link href={"/"} draggable={false}>
                    <p className="tracking-widest text-3xl font-semibold text-white/60 select-none" draggable={false}>
                        {'<KT/>'}
                    </p>
                </Link>

                <div className="flex space-x-12 items-center">
                    <Link className="nav-element" href={"/"}>
                        {t("home")}
                    </Link>
                    <Link className="nav-element" href="/projects">
                        {t("projects")}
                    </Link>
                    <Link className="nav-element" href="contact">
                        {t("contact")}s
                    </Link>
                    <Link className="nav-element" href="/about">
                        {t("about")}
                    </Link>
                    <a className="nav-element" href="https://github.com/kedgardov" target="__blank">
                        <FaGithub className="h-5 w-5"/>
                    </a>
                    <a className="nav-element flex space-x-1" href="https://www.youtube.com/watch?v=TtIPNrUdft0" target="__blank">
                        <FaYoutube className="h-5 w-5"/>
                    </a>
                </div>
            </nav>
            <div className="grid grid-cols-5 grid-rows-1 flex-1 px-18">

                <div className="col-start-1 col-span-3 grid grid-rows-5">
                    <p className="row-start-1 text-3xl self-end px-2 font-semibold">{t("hi_im_kevin")}</p>
                    <h1 className="row-start-2 row-span-2 text-9xl font-semibold uppercase">{t("full_stack_developer")}</h1>
                    <p className="row-start-4 px-2">{t("my_descriptiion")}</p>
                    <Link className="border w-fit h-fit p-4 rounded-full mx-2 text-white/60 hover:text-white/100 uppercase" href={"/projects"}>{t("view_projects")}</Link>
                </div>

                <div className="w-full h-full relative col-span-2">
                    <Image
                        draggable={false}
                        className="object-scale-down object-bottom"
                        src="/me.png"
                        alt="me suit"
                        fill
                    />
                </div>

            </div>
        </div>
    );
}
