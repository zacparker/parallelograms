Template.displayHesse.helpers({

  actionPerformed: function() {
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'

    query.observeChanges({ // listen to changes to the collection

      added: function(id, fields) { // if anything is added to the collection
        if (fields.artist === "hesse") { // if the added item matches this artist
          // Do Stuff
        }
      },

      removed: function() {
        console.log('previous action removed');
      }
    });

    return query;
  }
});