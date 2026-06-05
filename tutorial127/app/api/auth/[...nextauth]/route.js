import NextAuth from "next-auth";
import Githubprovider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
    providers : [
        Githubprovider({
            clientId : process.env.GITHUB_ID,
            clientSecret : process.env.GITHUB_SECRET,
        }),
          GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    ]
})
export {handler as GET,handler as POST}