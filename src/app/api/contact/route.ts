import { NextResponse } from "next/server";

const BOT_TOKEN=process.env.TG_TOKEN;
const CHAT_ID=Number(process.env.TG_CHAT);


export async function POST(req: Request) {
    const { name, email, message } = await req.json();
    const msg = JSON.stringify({name, email, message});
    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: msg,
        }),
    });
    if ( res.ok ) {
        return NextResponse.json({ success: true });
    } else {
        return NextResponse.json({ success: false });
    }
}

