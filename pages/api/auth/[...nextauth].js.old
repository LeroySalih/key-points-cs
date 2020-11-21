import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  callbacks: {

    signIn: async (user, account, profile) => {
      
        return Promise.resolve(true)

    },

    jwt: async (token, user, account, profile, isNewUser) => {
      
      if (profile) {
        token.uid = profile.id;
        token.provider = account.provider;
        
        //user.provider = account.provider;
      }

      
      // The token becomes the user object in the session callback.
      return Promise.resolve(token)
    },

    session: async (session, user) => {
      
      // console.log(user);
      session.user.uid = user.uid;
      session.user.provider = user.provider;
      session.user.test = user.test;

      //console.log("userId::", session && session.user.uid)
      //console.log("provider::", session && session.user.provider)
      //console.log("test::", session && session.user.test)
      // console.log("Session called", session, user)
      return Promise.resolve(session)
    },
  },
  
  // Configure one or more authentication providers
  providers: [
    
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),

    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })


    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
}

// console.log(`Client Secret ${process.env.GOOGLE_CLIENT_ID}`)
export default (req, res) => NextAuth(req, res, options)