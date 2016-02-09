Template.displayMaggio.helpers({
  actionPerformed: function() {
    initializing = true;
    maggioDisplayCount = 0;
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
    query.observeChanges({ // listen to changes to the collection
      added: function(id, fields) { // if anything is added to the collection
        if (fields.artist === "maggio" && !initializing) { // if the added item matches this artist
          var $topNav = $('.top-nav');
          var $sidebar = $('.sidebar');
          var displayTopNav = function() {
            $topNav.animate({top: 0}, 2000);
            incrementCount();
          },
          displaySidebar = function() {
            $sidebar.animate({top: "39px"}, 4000);
            incrementCount();
          },
          reset = function() {
            $topNav.animate({top: "-40px"}, 2000);
            $sidebar.animate({top: "-730px"}, 4000);
            maggioDisplayCount = 1;
          },
          incrementCount = function() {
            maggioDisplayCount++;
          };
          switch(maggioDisplayCount) {
            case 0:
              incrementCount();
              break;
            case 1:
              displayTopNav();
              break;
            case 2:
              displaySidebar();
              break;
            case 3:
              reset();
              break;
          }
        }
      }
    });
    initializing = false;
    return query;
  }
});
