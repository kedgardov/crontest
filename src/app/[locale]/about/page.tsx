import useTranslation, { parseLocale } from "@/hooks/useTranslation";
import Image from "next/image";

export default async function About({
    params,
}:{
    params: Promise<{locale: string}>
}){
    const lang = await params;
    const l = parseLocale(lang.locale);
    const { t } = useTranslation(l);

    return (
        <div className="w-full h-full flex flex-col items-center xl:flex-row border-t gap-4 border-white/30">


            <div className="w-full max-w-172 xl:w-1/3 h-[70dvh] xl:h-[90dvh] flex flex-col trans">
                <div className="h-3/5 flex items-center justify-center order-1">
                    <div className="w-4/5 h-4/5 relative shadow-2xl">
                        <Image
                            draggable={false}
                            className="object-cover object-center"
                            src="/images/nmsu.png"
                            alt={t("nmsu_alt")}
                            fill
                            sizes="(max-width: 640px) 50vh, (max-width: 1024px) 50vw, 33vw"
                        />
                    </div>
                </div>
                <div className="h-2/5 flex items-center justify-center order-2">
                    {/* <div className="w-4/5 h-4/5 [text-shadow:2_2_12_#000000]"> */}
                    <div className="w-4/5 h-4/5">
                        <h2 className="uppercase text-3xl text-highlight font-semibold tracking-wider">{t("education")}</h2>
                        <h3 className="uppercase text-white tracking-wider">{t("college")}</h3>
                        <ul className="list-disc list-inside text-white/65">
                            <li>{t("uach")}</li>
                            <li>{t("nmsu")}</li>
                        </ul>
                        <h3 className="uppercase text-white tracking-wider">{t("degrees")}</h3>
                        <ul className="list-disc list-inside text-white/65">
                            <li>{t("ae_eng")}</li>
                            <li>{t("m_eng")}</li>
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
                            alt={t("hobby_alt")}
                            fill
                            sizes="(max-width: 640px) 50vh, (max-width: 1024px) 50vw, 33vw"
                        />
                    </div>
                </div>
                <div className="h-2/5 flex items-center justify-center order-1 xl:order-1">
                    <div className="w-4/5 h-4/5 flex flex-col justify-end">
                        <h2 className="uppercase text-3xl text-highlight font-semibold tracking-wider">{t("hobbies")}</h2>
                        <ul className="list-disc list-inside text-white/65">
                            <li>{t("hiking")}</li>
                            <li>{t("chess")}</li>
                            <li>{t("basketball")}</li>
                            <li>{t("mountain_biking")}</li>
                            <li>{t("math_challenges")}</li>
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
                            title={t("skills_alt")}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </div>
                <div className="h-2/5 flex items-center justify-center order-2">
                    <div className="w-4/5 h-4/5">
                        <h2 className="uppercase text-3xl text-highlight font-semibold tracking-wider">{t("skills")}</h2>
                        <h3 className="uppercase text-white tracking-wider">{t("technologies")}</h3>
                        <p className="text-white/65">{t("techs")}</p>
                        <h3 className="uppercase text-white tracking-wider">{t("languages")}</h3>
                        <p className="text-white/65">{t("langs")}</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}