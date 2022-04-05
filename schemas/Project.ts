import { list } from "@keystone-6/core";
import { checkbox, relationship, text, timestamp } from "@keystone-6/core/fields";


const Project = list({
fields: {
    name: text({
        isIndexed: 'unique',
        validation: {
            isRequired: true
        }
    }),
    description: text({}),
    workspace: relationship({
        ref: 'Workspace.projects',
        many: false
    }),
    startDate: timestamp({}),
    endDate: timestamp({}),
    surveys: relationship({
        ref: 'Survey.project',
        many: true
    }),
    organisation: relationship({
        ref: 'Organisation.projects',
        many: false,
    }),
    users: relationship({
        ref: 'User.projects',
        many: true
    }),
    isArchived: checkbox({defaultValue: false}),
    createdAt: timestamp({ defaultValue: { kind: "now" } }),
    updatedAt: timestamp({ db: { updatedAt: true } }),
}
})

export default Project