import { list } from "@keystone-6/core";
import { relationship, select, text, timestamp } from "@keystone-6/core/fields";

const Invite = list({
    fields: {
        resource: select({
            options: ["project", "workspace"]
        }),
        resourceId: text({}),
        guest: relationship({
            ref: "User.guestInvites",
            many: false
        }),
        host: relationship({
            ref: "User.hostInvites",
            many: false
        }),
        guestRole: select({
            options: ["owner", "creator", "editor", "readonly"]
        }),
        status: select({
            options: ['accepted','declined', 'pending']
        }),
        createdAt: timestamp({ defaultValue: { kind: "now" } }),
        updatedAt: timestamp({ db: { updatedAt: true } }),
    }
});


export default Invite