import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
    "test/thisMethod": function () {
        Meteor._sleepForMs(500);
    }
});
