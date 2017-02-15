# Ninja Tracker

The main idea of the app is to provide a simple interface to the leader of a gang of ninjas can take in requests from clients, and then delegate out those requests to his ninjas.

The leader should be able to see who is currently on a contract and how long they have been on the job, who is available, and also see an overall score of each ninja, which will be calculated based on their average contract completion times.

In addition to this, clients should have a simple interface to log in and submit a new contract request. This client request will automatically be sent to the ninja leader, and from there he can assign the contract to an available ninja.

I'm following the [Meteor React Book](http://kenrogers.co/meteor-react/) by [@iamkenrogers](https://twitter.com/iamkenrogers).

You can see what I have done so far by clicking on the demo [here](http://ninjatrackr.meteor.com/).


## Packages Used

+ ```meteor add react```
+ ```meteor add kadira:react-layout```
+ ```meteor add kadira:flow-router```
+ ```meteor add twbs:bootstrap```
+ ```meteor add accounts-password```
+ ```meteor add msavin:mongol```
+ ```meteor add aldeed:collection2```
+ ```meteor add dburles:collection-helpers```
+ ```meteor add ongoworks:security```
+ ```meteor add juliancwirko:s-alert```
+ ```meteor add juliancwirko:s-alert-genie```
