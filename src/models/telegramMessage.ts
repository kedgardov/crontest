import { z } from 'zod';

export const TelegramMessageSchema = z.object({
    name: z.string().nonempty(),
    email: z.email(),
    message: z.string().nonempty(),
});
export type TelegramMessageType = z.infer<typeof TelegramMessageSchema>;