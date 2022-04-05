import { list } from "@keystone-6/core";
import { checkbox, relationship, text, timestamp } from "@keystone-6/core/fields";

const User = list({
  fields: {
    firstname: text({}),
    lastname: text({}),
    email: text({ isIndexed: "unique" }),
    password: text({}),
    title: text({}),
    isOwner: checkbox({defaultValue: false}),
    createdAt: timestamp({ defaultValue: { kind: "now" } }),
    updatedAt: timestamp({ db: { updatedAt: true } }),
    hasVerifiedEmail: checkbox({defaultValue: false}),
    teams: relationship({ref: "Team.members", many: true}),
    organisation: relationship({
        ref: 'Organisation.users', many: false
    }),
    workspaces: relationship({ref: 'Workspace.users', many: true}),
    projects: relationship({
        ref: 'Project.users',
        many: true
    }),
    hostInvites: relationship({
      ref: 'Invite.host',
      many: true
    }),
    guestInvites: relationship({
      ref: 'Invite.guest',
      many: true
    })

  },
});

export default User;
