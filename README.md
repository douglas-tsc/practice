# Curocracy

A curated news website for technology and entrepreneurship in India

## Why are you developing this?
India has it's own version of Hacker news but it is now overrun with spam. We deserve a better alternative.

## What did we use to build it?

### Meteor

+ Code in the /server directory only runs on the server.
+ Code in the /client directory only runs on the client.
+ Everything else runs on both the client and server.
+ Your static assets (fonts, images, etc.) go in the /public directory.
+ Files in /lib are loaded before anything else.
+ Any main.* file is loaded after everything else.
+ Everything else loads in alphabetical order based on the file name.

### Packages

+ Bootstrap | meteor add twbs:bootstrap
+ Cucumber | meteor add xolvio:cucumber
+ Iron router | meteor add iron:router
+ Spin | meteor add sacha:spin
+ Accounts | meteor add ian:accounts-ui-bootstrap-3
+ Password | meteor add accounts-password

## How do you get it running?

Just go to [curocracy.meteor.com](http://curocracy.meteor.com/)

## How can I help?

Please login, have a play around and raise an issue if anything doesn't work as expected.

If you have any great ideas or feedback please raise an issue.

If you can fix something or want to add a new feature, pull requests are always welcome.
