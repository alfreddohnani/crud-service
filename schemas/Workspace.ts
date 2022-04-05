import { list } from "@keystone-6/core";
import { checkbox, relationship, text, timestamp } from "@keystone-6/core/fields";

const Workspace = list({
   fields: {
    name: text({isIndexed: 'unique', validation: {isRequired: true}}),
    description: text({}),
    organisation: relationship({ref: 'Organisation.workspaces', many: false}),
    projects: relationship({
        ref: "Project.workspace", many: true
    }),
    users: relationship({
        ref: 'User.workspaces'
    }),
    isArchived: checkbox({defaultValue: false}),
    createdAt: timestamp({ defaultValue: { kind: "now" } }),
    updatedAt: timestamp({ db: { updatedAt: true } }),
   }
})

export default Workspace