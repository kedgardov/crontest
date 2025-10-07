import useTranslation from "@/hooks/useTranslation";
import { getLocale } from "@/locales/locales";
import Image from "next/image";
import Link from "next/link";


export default function Home(){

    const locale = getLocale();
    const { t } = useTranslation(locale);

    return (
            <div className="tracking-wide flex flex-col h-full w-full p-4">

            <div className="flex flex-col h-1/4">
                <p className="text-3xl px-1">{t("hi_im_kevin")}</p>
                <h1 className="text-5xl font-bold uppercase tracking-wider">{t("full_stack_developer")}</h1>
            </div>
            
            <div className="aspect-square h-1/2 relative bg-gradient-to-br from-gray-700 to-gray-900 rounded-full overflow-clip shadow-2xl place-self-center">
                <Image
                    draggable={false}
                    className="object-scale-down scale-175 m-4"
                    src="/me.png"
                    alt="me suit"
                    fill
                />
            </div>
            <div className="h-1/4 flex items-center justify-center">
                <Link className="border w-fit h-fit p-4 rounded-full mx-2 text-white/70 hover:text-white/100 uppercase shadow-2xl" href={"/projects"}>{t("view_projects")}</Link>
            </div>
        </div>
    );
}
