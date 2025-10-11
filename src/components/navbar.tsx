"use client"

import useTranslation from "@/hooks/useTranslation";
import { SupportedLangs } from "@/locales/locales";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

const tabs = ["home", "projects","contact","about"];

export default function Navbar({
    className,
    locale,
}:{
    className: string,
    locale: SupportedLangs,
}){

    const [ currentTab, setCurrentTab ] = useState<string>("home");
    const [ show, setShow ] = useState<boolean>(false);
    
    const p = usePathname();

    const { t } = useTranslation(locale);


    useEffect(() => {
        setCurrentTab(tabs.find(t => p.includes(t)) || "home");
        setShow(false);
    },[p]);

    return (
        <nav className={`${className} div`}>
            <div className={`absolute ${show? "w-full":"w-0"} h-full top-0 right-0 flex flex-col justify-start items-end z-20 bg-black/70 overflow-hidden trans`} onClick={() => setShow(p => !p)}>
                <div className="h-full w-2/3 max-w-72 flex flex-col gap-4 p-6 bg-primary/95" onClick={e => e.stopPropagation()}>
                    <div className="w-full flex justify-end">
                        <button type="button" className="hover:bg-white/5 p-1 flex items-center justify-center trans" onClick={() => setShow(p => !p)}>
                            <CgClose className="icon-small"/>
                        </button>
                    </div>
                    <div></div>
                    <Link className={`nav-element trans ${currentTab === "home"? "nav-element-active":"nav-element-inactive"}`} href={"/"}>
                        {t("home")}
                    </Link>
                    <Link className={`nav-element trans ${currentTab === "projects"? "nav-element-active":"nav-element-inactive"}`} href="/projects">
                        {t("projects")}
                    </Link>
                    <Link className={`nav-element trans ${currentTab === "contact"? "nav-element-active":"nav-element-inactive"}`} href="/contact">
                        {t("contact")}
                    </Link>
                    <Link className={`nav-element trans ${currentTab === "about"? "nav-element-active":"nav-element-inactive"}`} href="/about">
                        {t("about")}
                    </Link>  
                </div>
            </div>

            <Link href={"/"} draggable={false}>
                <p className="tracking-widest text-3xl font-semibold text-white/60 select-none" draggable={false}>
                    {'<KT/>'}
                </p>
            </Link>

            <div className="div justify-end w-0 sm:w-full overflow-hidden trans">
                <Link className={`nav-element trans ${currentTab === "home"? "nav-element-active":"nav-element-inactive"}`} href={"/"}>
                    {t("home")}
                </Link>
                <Link className={`nav-element trans ${currentTab === "projects"? "nav-element-active":"nav-element-inactive"}`} href="/projects">
                    {t("projects")}
                </Link>
                <Link className={`nav-element trans ${currentTab === "contact"? "nav-element-active":"nav-element-inactive"}`} href="/contact">
                    {t("contact")}
                </Link>
                <Link className={`nav-element trans ${currentTab === "about"? "nav-element-active":"nav-element-inactive"}`} href="/about">
                    {t("about")}
                </Link>
            </div>

            <div className="div ml-auto">
                <a className="nav-element" href="https://github.com/kedgardov" target="__blank" title="github-link">
                    <FaGithub className="icon-small"/>
                </a>
                <a className="nav-element flex space-x-1" href="https://www.youtube.com/watch?v=TtIPNrUdft0" target="__blank" title="youtube-link">
                    <FaYoutube className="icon-small"/>
                </a>
                <a className="nav-element flex space-x-1" href="https://www.linkedin.com/in/ktrejo/" target="__blank" title="linkdedin-link">
                    <FaLinkedinIn className="icon-small"/>
                </a>
            </div>
            <button className="div sm:w-0 overflow-hidden trans" onClick={() => setShow(p => !p)}>
                <MdMenu className="icon-small"/>
            </button>
        </nav>
    );
}