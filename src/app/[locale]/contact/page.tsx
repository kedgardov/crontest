"use client"

import useTranslation, { parseLocale } from "@/hooks/useTranslation";
import { TelegramMessageSchema, TelegramMessageType } from "@/models/telegramMessage";
import { postToTelegramUtil } from "@/utils/postToTelegramUtil";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CiMail } from "react-icons/ci";
import { FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";

export default function Contact({
    params,
}:{
    params: Promise<{ locale: string }>,
}){
    const lang = React.use(params);
    const locale = parseLocale(lang.locale);
    const { t } = useTranslation(locale);


    const { register, handleSubmit, formState: { errors } } = useForm<TelegramMessageType>({
        resolver: zodResolver(TelegramMessageSchema),
    })



    const onSubmit: SubmitHandler<TelegramMessageType> = async ( data ) => {
        const res = await postToTelegramUtil(data);
        if ( res.success ) {
            alert(t("message_sent"));
        } else {
            alert(t("messate_not_sent"));
        }
    }

    return (
        <div className="flex flex-col w-full h-full border-t border-white/30">
            <div className="w-full flex flex-1  items-center">
                <div className="w-full lg:w-1/2 flex flex-col items-center h-3/4 gap-4 trans">

                    <div className="w-full text-center ">
                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl tracking-wide font-semibold text-highlight trans">Kevin Trejo</h1>
                        <div className="div text-white/65 sm:text-xl md:text-2xl lg:text-xl xl:text-2xl tracking-wider justify-center trans">
                            <CiMail className="icon-small stroke-1"/>
                            <a href="mailto:kevintrejo4b@gmail.com">kevintrejo4b@gmail.com</a>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-4/5 flex flex-col gap-4 flex-1">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl tracking-wide trans">{t("cta")}</h2>
                        <input type="text" placeholder={t("name")} className={`input w-full ${errors.name? 'input-error':''}`} {...register("name")} />
                        <input type="email"  placeholder={t("email")} className={`input w-full ${errors.email? 'input-error':''}`} {...register("email")} />
                        <textarea placeholder={t("message")} className={`input w-full flex-1 ${errors.message? 'input-error':''}`} {...register("message")} />
                        <div className="w-full flex justify-center">
                            <button className="text-xl tracking-wide font-bold xl:text-2xl md:text-2xl lg:text-xl p-2 w-fit border-2 border-highlight text-highlight shadow-2xl hover:font-extrabold bg-primary/80 trans" type="submit">{t("send_message")}</button>
                        </div>
                    </form>

                </div>
                <div className="w-0 lg:w-1/2 h-full flex flex-col trans justify-center">
                    <div className="relative w-full h-3/4 overflow-clip [clip-path:circle(45%_at_50%_50%)] xl:[clip-path:circle(35%_at_50%_50%)] trans">
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
            <div className="div text-white/80 justify-between">
                <div></div>
                    <a href="https://www.youtube.com/watch?v=TtIPNrUdft0" className="">
                        <FaYoutube className="w-8 h-8 md:w-12 md:h-12 lg:h-8 lg:w-8 xl:w-12 xl:h-12 trans" title="youtube-link" />
                    </a>
                    <a href="https://github.com/kedgardov" className="">
                        <FaGithub className="w-8 h-8 md:w-12 md:h-12 lg:h-8 lg:w-8 xl:w-12 xl:h-12 trans" title="github-link" />
                    </a>
                    <a href="https://www.linkedin.com/in/ktrejo/" className="">
                        <FaLinkedin className="w-8 h-8 md:w-12 md:h-12 lg:h-8 lg:w-8 xl:w-12 xl:h-12 trans" title="linkedin-link" />
                    </a>
                <div></div>
            </div>
        </div>
    )
}