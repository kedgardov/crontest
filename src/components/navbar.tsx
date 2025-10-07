import useTranslation from "@/hooks/useTranslation";
import { SupportedLangs } from "@/locales/locales";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Navbar({
    className,
    locale,
}:{
    className: string,
    locale: SupportedLangs,
}){

    const { t } = useTranslation(locale);

    return (
        <nav className={`${className} p-4 border-b-1 border-white/25 flex items-center justify-between tracking-wide`}>
            <Link href={"/"} draggable={false}>
                <p className="tracking-widest text-3xl font-semibold text-white/60 select-none" draggable={false}>
                    {'<KT/>'}
                </p>
            </Link>

            <div className="flex items-center">
                <div className="flex items-center scale-0 sm:scale-100">
                    <Link className="nav-element" href={"/"}>
                        {t("home")}
                    </Link>
                    <Link className="nav-element" href="/projects">
                        {t("projects")}
                    </Link>
                    <Link className="nav-element" href="contact">
                        {t("contact")}
                    </Link>
                    <Link className="nav-element" href="/about">
                        {t("about")}
                    </Link>
                </div>
                <a className="nav-element" href="https://github.com/kedgardov" target="__blank" title="github-link">
                    <FaGithub className="h-5 w-5"/>
                </a>
                <a className="nav-element flex space-x-1" href="https://www.youtube.com/watch?v=TtIPNrUdft0" target="__blank" title="youtube-link">
                    <FaYoutube className="h-5 w-5"/>
                </a>
                <a className="nav-element flex space-x-1" href="https://www.linkedin.com/in/ktrejo/" target="__blank" title="linkdedin-link">
                    <FaLinkedinIn className="h-5 w-5"/>
                </a>
            </div>
        </nav>
    );
}