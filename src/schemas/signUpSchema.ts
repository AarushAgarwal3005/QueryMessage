import { z } from 'zod';

export const usernameValidation = z
  .string()
  .min(3, 'Username must be at least 3 characters')
  .max(25, 'Username must be no more than 25 characters')
  .regex(/^[a-zA-Z][a-zA-Z0-9_]*$/, 'username does not include special characters and numbers as the starting character')

export const signUpSchema = z.object({
  username: usernameValidation,

  email: z.string().email({ message: 'Invalid email address' }),
  password:  z
  .string()
  .min(6, { message: 'Password must be at least 6 characters' })
 .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{6,}$/, {
      message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    }),
});