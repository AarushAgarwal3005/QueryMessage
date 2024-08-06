import {NextAuthOptions} from "next-auth"
import credentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import dbConnect from "@/lib/dbConnect"
import UserModel from "@/models/User"
import { promises } from "dns"


export const authOptions:NextAuthOptions={
    providers:[
        credentialsProvider({
            id:"credentials",
            name:"credentials",
             credentials: {
      email: { label: "Email", type: "text" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials:any):Promise<any> {
await dbConnect()
try {
    const user=await UserModel.findOne({
        $or:[
            {email:credentials.email},
            {username:credentials.email}
        ]
    })
    if(!user){
        throw new Error('No user found eith this email')
    }
     if(!user.isVerified){
        throw new Error('Please verify tour account before login')
    }
   const isPasswordCorrect= await bcrypt.compare(credentials.password,user.password)
   if(isPasswordCorrect){
    return user
   }
   else{
    throw new Error('Incorrect password')
   }


} catch (err:any) {
    throw new Error(err)
}
    }
        })
    ],
    callbacks: {
 async jwt({ token, user}) {
    if(user){
        token._id=user._id?.toString()
        token.isVerified=user.isVerified
    }
      return token
    },
    async session({ session, token }) {
      return session
    },
   
},

    pages:{
        signIn:'/sign-in',
    },
    session:{
        strategy:"jwt",
    },secret:process.env.NEXTAUTH_SECRET,
}