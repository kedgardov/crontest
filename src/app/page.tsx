import useTranslation from "@/hooks/useTranslation";
import { getLocale } from "@/locales/locales";
import Image from "next/image";
import Link from "next/link";


export default function Home(){

    const locale = getLocale();
    const { t } = useTranslation(locale);

    return (
        // <div className="tracking-wide grid grid-cols-5 grid-rows-1 flex-1 px-18">
            <div className="tracking-wide flex flex-col h-full w-full p-4 place-content-between">

            <div className="flex flex-col">
                <p className="text-4xl px-1">{t("hi_im_kevin")}</p>
                <h1 className="text-5xl font-bold uppercase">{t("full_stack_developer")}</h1>
                {/* <p className="">{t("my_descriptiion")}</p> */}
            </div>
            {/* <Link className="border w-fit h-fit p-4 rounded-full mx-2 text-white/60 hover:text-white/100 uppercase place-self-center" href={"/projects"}>{t("view_projects")}</Link> */}
            
            <div className="w-full aspect-square relative bg-gradient-to-br from-gray-700 to-gray-900 rounded-full overflow-clip shadow-2xl">
                <Image
                    draggable={false}
                    className="object-scale-down scale-125 m-4"
                    src="/me.png"
                    alt="me suit"
                    fill
                />
            </div>
            <Link className="border w-fit h-fit p-4 rounded-full mx-2 text-white/70 hover:text-white/100 uppercase place-self-center shadow-2xl" href={"/projects"}>{t("view_projects")}</Link>
            {/* <div className="col-start-1 col-span-3 grid grid-rows-5">
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
            </div> */}

        </div>
    );
}
