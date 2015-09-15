if (Meteor.isClient) {

  // this code only runs on the client
  Template.leaderboard.helpers({
    'player': function() {
      return PlayersList.find({}, {sort: {score: -1, name: 1}});
    },
    'selectedClass': function() {
      var playerId = this._id;
      var selectedPlayer = Session.get('selectedPlayer');
      if (playerId == selectedPlayer) {
        return "selected";
      }
    },
    'showSelectedPlayer':function(){
      var selectedPlayer = Session.get('selectedPlayer');
      return PlayersList.findOne(selectedPlayer);
    }
  });

  Template.leaderboard.events({
    'click .player': function() {
      var playerId = this._id;
      Session.set('selectedPlayer', playerId);
    },
    'click .increment': function(){
      var selectedPlayer = Session.get('selectedPlayer');
      PlayersList.update({_id: selectedPlayer}, {$inc:{score: 1}});
    },
    'click .flag':function(){
      var selectedPlayer = Session.get('selectedPlayer');
      PlayersList.remove(selectedPlayer);
    },
    'click .decrement': function(){
      var selectedPlayer = Session.get('selectedPlayer');
      PlayersList.update({_id: selectedPlayer}, {$inc:{score: -1}});
    }
  });

  Template.addPlayerForm.events({
    'submit form': function(event, template){
      event.preventDefault();
      var playerNameVar = template.find('.playerName').value;
      PlayersList.insert({
        name: playerNameVar,
        score: 0
      });

      console.log(playerNameVar);
    }
});

}

if (Meteor.isServer) {
  // this code only runs on the server

}

PlayersList = new Mongo.Collection('thePlayers');
