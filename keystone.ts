/*
Welcome to Keystone! This file is what keystone uses to start the app.

It looks at the default export, and expects a Keystone config object.

You can find all the config options in our docs here: https://keystonejs.com/docs/apis/config
*/

import { config } from "@keystone-6/core";

import { lists } from "./schemas";
import { withAuth, session } from "./auth";
import { DATABASE_URI } from "./config";

export default withAuth(
  config({
    db: {
      provider: "postgresql",
      url: "postgres://postgres:root@localhost:5432/kpilens",
    },

    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists,
    session,
  })
);
