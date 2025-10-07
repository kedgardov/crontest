import { ApiResponseSchema, ApiResponseType } from "@/models/apiResponse";
import { TelegramMessageType } from "@/models/telegramMessage";
import axios from "axios";

export async function postToTelegramUtil(data: TelegramMessageType): Promise<ApiResponseType>{
    try {
        const response = await axios.post('/api/contact', data);
        const validResponse = ApiResponseSchema.parse(response.data);
        return validResponse;
    } catch {
        return {
            success: false
        }
    }
}