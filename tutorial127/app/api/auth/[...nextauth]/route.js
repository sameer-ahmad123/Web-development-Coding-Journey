import NextAuth from "next-auth";
import Githubprovider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'
import SpotifyProvider from "next-auth/providers/spotify"
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
          SpotifyProvider({
      clientId: process.env.SPOTIFY_ID,
      clientSecret: process.env.SPOTIFY_SECRET
    }),
    ]
})
export {handler as GET,handler as POST}