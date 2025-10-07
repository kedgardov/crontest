import { z } from "zod";


export const ApiResponseSchema = z.object({
    success: z.boolean()
});
export type ApiResponseType = z.infer<typeof ApiResponseSchema>;