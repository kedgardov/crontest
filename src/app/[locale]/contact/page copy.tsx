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
        <div className="p-4 flex flex-col w-full h-full tracking-wide gap-6 text-white">
            <div className="space-y-2 border-b border-white/40 md:border-white/0 transition-all ease-in-out duration-500">
                <p className="text-5xl font-semibold uppercase text-amber-600/85">Kevin Trejo</p>
                <a href="mailto:kevintrejo4b@gmail.com" className="flex items-center gap-2 text-gray-300">
                    <CiMail className="w-5 h-5"/>
                    <p className="tracking-widest">kevintrejo4b@gmail.com</p>
                </a>
            </div>
            
            <div className="flex-1 flex w-full ">
                <form onSubmit={handleSubmit(onSubmit)} className="md:pr-4 h-full space-y-4 flex-1 flex flex-col transition-all ease-in-out duration-500">
                    <h2 className="text-3xl font-medium select-none ">{t("cta")}</h2>
                    <input type="text" placeholder={t("name")} className={`input w-full ${errors.name? 'input-error':''}`} {...register("name")} />
                    <input type="email"  placeholder={t("email")} className={`input w-full ${errors.email? 'input-error':''}`} {...register("email")} />
                    <textarea placeholder={t("message")} className={`input w-full flex-1 ${errors.message? 'input-error':''}`} {...register("message")} />
                    <div className="w-full justify-center flex">
                        <button className="p-2 w-fit border rounded-full" type="submit">{t("send_message")}</button>
                    </div>
                </form>
                    <div className="w-0 md:w-1/3 max-w-[60svh] self-center bg-gradient-to-tl from-gray-900/80 to-gray-900/50 shadow aspect-square relative overflow-clip rounded-full transition-all ease-in-out duration-500">
                        <Image
                            draggable={false}
                            className="object-contain m-4 scale-125"
                            src="/images/me.png"
                            alt="me suit"
                            fill
                            sizes="(max-width: 640px) 50vh, (max-width: 1024px) 50vw, 33vw"
                            />
                    </div>
            </div>

            <div className="flex items-center place-content-between border-t text-gray-300 border-white/40 p-4 mt-auto">
                <div className=""></div>
                <a className="">
                    <FaYoutube className="icon-big" title="youtube-link" />
                </a>
                <a className="">
                    <FaGithub className="icon-big" title="github-link" />
                </a>
                <a className="">
                    <FaLinkedin className="icon-big" title="linkedin-link" />
                </a>
                <div className=""></div>
            </div>
        </div>
    )
}