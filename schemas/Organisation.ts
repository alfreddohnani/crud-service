import { list } from "@keystone-6/core";
import { checkbox, json, relationship, select, text, timestamp } from "@keystone-6/core/fields";
import { add } from "date-fns";

const Organisation = list({
  fields: {
    name: text({}),
    registrationNumber: text({ isIndexed: "unique" }),
    dataProtectionPolicyCountry: json({}),
    hasLawfulBasisToCollectData: checkbox({defaultValue: false}),
    dataSubjects: text({}),
    purposeOfDataCollectionAndProcessing: text({}),
    address: text({}),
    numberOfEmployees: text({}),
    countryOfOperation: json({}),
    email: text({ isIndexed: "unique" }),
    organisationType: select({
        options: ['Single User', 'Agency', 'Enterprise']
    }),
    createdAt: timestamp({ defaultValue: { kind: "now" } }),
    updatedAt: timestamp({ db: { updatedAt: true } }),
    freeTrialExpirationDate: timestamp({
      defaultValue: add(new Date(), { days: 14 }).toISOString(),
    }),
    isPaying: checkbox({ defaultValue: false }),
    users: relationship({ref: 'User.organisation', many: true,}),
    teams: relationship({ref: "Team.organisation" , many: true}),
    owner: relationship({ref: 'User', many: false}),
    workspaces: relationship({
        ref: 'Workspace.organisation',
        many: true
    }),
    projects: relationship({
        ref: 'Project.organisation',
        many: true
    }),
  },
  ui: {
      listView: {
          initialColumns: ["name", "email"]
      }
  }
});

export default Organisation