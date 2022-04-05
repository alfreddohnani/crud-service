import { list } from "@keystone-6/core";
import { checkbox, relationship, text, timestamp } from "@keystone-6/core/fields";

const Survey = list({
    fields: {
        name: text({
            isIndexed: 'unique',
            validation: {isRequired: true}
        }),
        schema: text({}),
        widgets: text({}),
        project: relationship({
            ref: 'Project.surveys',
            many: false
        }),
        publishId: text({}),
        isPublished: checkbox({defaultValue: false}),
        createdAt: timestamp({ defaultValue: { kind: "now" } }),
        updatedAt: timestamp({ db: { updatedAt: true } }),
        author: relationship({
            ref: 'User',
            many: false
        }),
        responses: relationship({
            ref: 'SurveyResponse.survey',
            many: true
        })
    }
})

export default Survey