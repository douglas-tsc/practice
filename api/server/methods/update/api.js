Meteor.methods({
  regenerateApiKey: function( userId ){
    check( userId, Meteor.userId() );

    var newKey = Random.hexString( 32 );

    try {
      var keyId = APIKeys.update( { "owner": userId }, {
        $set: {
          "key": newKey
        }
      });
      return keyId;
    } catch(exception) {
      return exception;
    }
  }
});
