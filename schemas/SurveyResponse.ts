import { list } from "@keystone-6/core";
import { relationship, text, timestamp } from "@keystone-6/core/fields";


const SurveyResponse = list({
    fields: {
        survey: relationship({
            ref: 'Survey.responses',
            many: false
        }),
        response: text({}),
        createdAt: timestamp({ defaultValue: { kind: "now" } }),
        updatedAt: timestamp({ db: { updatedAt: true } }),
    }
})

export default SurveyResponse