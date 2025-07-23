import { serve } from "inngest/next";
import { inngest } from "@/config/inngest";
import { syncUserCreation, syncUserDeletion, syncUserUpdate } from "@/config/inggest";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    /* your functions will be passed here later! */
    syncUserCreation,
    syncUserUpdate,
    syncUserDeletion
  ],
});