import { list } from "@keystone-6/core";
import { relationship } from "@keystone-6/core/fields";

const Team  = list({
    fields: {
        members: relationship({
            ref: "User.teams",
            many: true
        }),
        organisation: relationship({ref: 'Organisation.teams', many: false})
    }
})

export default Team