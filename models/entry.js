const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema(
    {
        category: {
            type: String,
            enum: ["thoughts","lists","drafts","writing","reminders","quotes","crazy","other"],
            required: true,
        },

        content: {
            type: String,
            required: true,
            minlength: 10,
            maxlength: 5000,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Entry", entrySchema, "entry");