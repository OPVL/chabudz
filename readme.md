# Chabudz Bot

## What is it

Inspired by my personal favourite character from the fabulous show, People Just Do Nothing, Chabuddy G;
The Faux wheeler dealer, business extraordinaire.

## How do I use it?
Short answer: you don't. It has absolutely no purpose other than to:

* randomly respond to triggers (which I shall not be documenting as it's part of the fun)
* send messages at random
* bother you whilst you're doing things
* make senseless comments
* interact with other characters from the show (wip)

## Installation

### Requirements

* npm (12.0+)
* discord account
* server that have the manage permission for (optional, you can get someone else to authorise it in a server you're part of)

### Setup

1. Head to the [Discord App Site](https://www.google.com "Discord App Site") and set up a new bot. You'll need the token from here to fill in your .env token field.
1. Clone the repo to a directory of your choice
1. `cd` in to the directory
1. run `cp .env.example .env` and then fill in the token field (the `.env` file contains all of the current bool options for enabling/disabling certain triggers)
1. run `node index.js` and you shoudl see it start the merc!
1. Invite the bot in to a server of your choosing and you're good to go


###### Data Collected & how it's used
~~The bot posts back an anonymouse system identifier for every instance of the bot in use. This happens on start up and periodically during runtime. No identifiable data or logs are sent back, just a little ping to my server for a little bit of swag on my website. You can take a look at the data being sent and how it's created in in src/functions/util/heartbeat.js. It is a static value that builds a unique device fingerprint that is not used for any other purposes. If you have an issue with this you can opt-out in the env file or even straight up delete it. It's just used to build a counter to show how many active instances I have of my bot for that cool internet swag. Should this change in the future a startup notice will be displayed that will either link you to a longer explanation on my website or if it's a small change to this collection then it will state it within the app and you will again have the option to opt-out if you prefer.~~ Currently disabled.
