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
        <div className="h-full tracking-wide flex">
            <div className="flex flex-col h-full w-full p-4 lg:w-3/5">

                <div className="flex flex-col h-1/4 lg:h-2/3 lg:justify-center ">
                    <p className="text-3xl px-1">{t("hi_im_kevin")}</p>
                    <h1 className="text-5xl lg:text-7xl xl:text-8xl font-semibold uppercase tracking-wider">{t("full_stack_developer")}</h1>
                    <p className="my-4 scale-0 lg:scale-100">{t("my_description")}</p>
                </div>
                
                <div className="aspect-square h-1/2 relative bg-gradient-to-br from-gray-700 to-gray-900 rounded-full overflow-clip shadow-2xl place-self-center block lg:hidden lg:h-">
                    <Image
                        draggable={false}
                        className="object-scale-down scale-175 m-4"
                        src="/images/me.png"
                        alt="me suit"
                        fill
                        sizes="(max-width: 640px) 50vh, (max-width: 1024px) 50vw, 33vw"
                    />
                </div>
                <div className="h-1/4 flex items-center justify-center lg:h-1/3">
                    <Link className="border w-fit h-fit p-4 rounded-full mx-2 text-white/70 hover:text-white/100 uppercase shadow-2xl lg:text-2xl" href={"/projects"}>{t("view_projects")}</Link>
                </div>
            </div>
            <div className="aspect-square relative hidden lg:block lg:w-2/5 xl:2-2/5">
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
    );
}
