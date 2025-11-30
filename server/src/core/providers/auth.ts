import { db } from "@/core/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { organization, username } from "better-auth/plugins";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  emailVerification: {
    autoSignInAfterVerification: true,
    sendOnSignUp: true,
    sendVerificationEmail(data, request) {
      throw new Error("Not implemented yet");
    },
  },
  plugins: [
    username({
      minUsernameLength: 5,
      maxUsernameLength: 20,
    }),
    organization(),
  ],
});
