const mongoose = require("mongoose");
// const validator = require("validator");

//schema for settingQuestion ( present on 1st page of discussion forum )
const settingQuestionSchema = mongoose.Schema({
  date: {
    type: String,
    require: true,
    minLength: 0,
  },
  description: {
    type: String,
    require: true,
    minLength: 0,
  },
  credit: {
    type: String,
    require: true,
    minLength: 0,
  },
  debit: {
    type: String,
    require: true,
    minLength: 0,
  },
  balance: {
    type: String,
    require: true,
    minLength: 0,
  },
  vendor: {
    type: String,
    require: true,
    minLength: 0,
  },
  billNo: {
    type: String,
    require: true,
    minLength: 0,
  },
  billAmount: {
    type: String,
    require: true,
    minLength: 0,
  },
  expenseMode: {
    type: String,
    require: true,
    minLength: 0,
  },
  projectName: {
    type: String,
    require: true,
    minLength: 0,
  },
  // _id: [{
  //     type: Object,
  //     require: false
  // }]
});

//defining and creating the collection named settingQuestion in database.

const settingQuestion = mongoose.model("settinQuestion", settingQuestionSchema);
//for exporting settingQuestion.js to app.js
module.exports = settingQuestion;
