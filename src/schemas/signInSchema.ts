import { z } from 'zod';
export const signInSchema = z.object({
  identifier: z.string().min(3, { message: 'Identifier is required' }),  // Ensures identifier is not empty
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),  // Ensures password is at least 6 characters
});