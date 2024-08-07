require('dotenv').config(); // Ensure this is at the very top
import { Resend } from 'resend';
console.log('RESEND_API_KEY')
export const resend = new Resend(process.env.RESEND_API_KEY);