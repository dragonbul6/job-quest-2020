var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "Account" },
  profile: {
    prefix: { type: String, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    date: { type: Date, required: true },
    email: { type: String, required: true },
    citizenId: { type: String, required: true },
    address: { type: Text, required: true },
    phoneno: { type: String, required: true },
    image: { type: String, default: "" },
    nameOnBib: { type: String, required: true },
  },
  history: {
    runned: { type: Boolean, default: "" },
    ideaTime: { type: String, default: "" },
  },
  urgentContract: [
    {
      name: { type: String, default: "" },
      relation: { type: String, default: "" },
      telphone: { type: String, default: "" },
    },
  ],
  medicalReport: {
    bloodGroup: { type: String, default: "" },
    allergic: [{ name: { type: String, default: "" } }],
    disease: [{ name: { type: String, default: "" } }],
    surgence: [
      {
        organ: { type: String, default: "" },
        year: { type: String, default: "" },
      },
    ],
    pregnant: { type: Boolean, default: false },
    pill: [
      {
        name: { type: String, default: "" },
      },
    ],
    injured: { type: Boolean, default: false },
    exercise: { type: Boolean, default: true },
    injuringExcercise: { type: Boolean, default: false },
  },
  gift: [
    {
      size: { type: String },
    },
  ],
  validated: { type: Boolean, default: false },
});
