Meteor.startup(function () {
  // code to run on server at startup
});

Meteor.publish('actions', function() {
  return Actions.find();
});

Meteor.methods({
  removeActions: function (artist) {
    Actions.remove({artist: artist});
  }
});