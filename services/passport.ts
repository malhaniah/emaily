import passport from "passport";
import { Profile, Strategy, VerifyCallback } from "passport-google-oauth20";
import { Urls } from "../config";

// Google OAuth Strategy
passport.use(
  new Strategy(
    {
      clientID: process.env.ClientId as string,
      clientSecret: process.env.ClientSecret as string,
      callbackURL: Urls.GoogleAuthCallback,
    },
    (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: VerifyCallback
    ) => {
      console.log("access token:", accessToken);
      console.log("refresh token:", refreshToken);
      console.log("profile:", profile);
    }
  )
);
