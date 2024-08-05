import { z } from 'zod';
export const Schema=z.object({
    code:z.string().length(6,'verification code must be of at least 6 digits') 
})