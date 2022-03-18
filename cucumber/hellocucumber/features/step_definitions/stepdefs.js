const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');


Given('today is not the due date', function () {
  this.today = 'not the due date';
});

When('I ask whether it\'s the due date yet', function () {
  this.actualAnswer = isItDueDate(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});

Given('today is the due date', function () {
    this.today = 'due date';
  });

function isItDueDate(today) {
    if (today === "due date") {
      return "Yes, apply vaccine.";
    } else {
      return "No.";
    }
  }