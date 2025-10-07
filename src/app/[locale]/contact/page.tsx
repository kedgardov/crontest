"use client"

import useTranslation, { parseLocale } from "@/hooks/useTranslation";
import { TelegramMessageSchema, TelegramMessageType } from "@/models/telegramMessage";
import { postToTelegramUtil } from "@/utils/postToTelegramUtil";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { CiMail } from "react-icons/ci";
import { FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";

export default async function Contact({
    params,
}:{
    params: { locale: string },
}){
    const lang = await params;
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
            <div className="space-y-2 border-b border-white/40">
                <p className="text-5xl font-semibold uppercase">Kevin Trejo</p>
                <a href="mailto:kevintrejo4b@gmail.com" className="flex items-center gap-2">
                    <CiMail className="w-5 h-5"/>
                    <p className="tracking-widest">kevintrejo4b@gmail.com</p>
                </a>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="flex-1 space-y-4 flex flex-col">
                <h2 className="text-3xl font-medium select-none">Leave a Message</h2>
                <input type="text" placeholder="Name" className={`input w-full ${errors.name? 'input-error':''}`} {...register("name")} />
                <input type="email"  placeholder="Email" className={`input w-full ${errors.email? 'input-error':''}`} {...register("email")} />
                <textarea placeholder="Message" className={`input w-full flex-1 ${errors.message? 'input-error':''}`} {...register("message")} />
                <div className="w-full justify-center flex">
                    <button className="p-2 w-fit border rounded-full" type="submit">Send Message</button>
                </div>
            </form>

            <div className="flex items-center place-content-between border-t border-white/40 p-4 mt-auto">
                <a className="">
                    <FaYoutube className="icon-big" />
                </a>
                <a className="">
                    <FaGithub className="icon-big" />
                </a>
                <a className="">
                    <FaLinkedin className="icon-big" />
                </a>
            </div>
        </div>
    )
}