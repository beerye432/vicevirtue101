# Welcome to Foodie101's ViceVirtue App

ViceVirtue is designed to help users better themselves by providing a place for them to track daily habits and goals. 

There were a lot of design choices that had to be made during the creation of ViceVirtue, and with these choices came
a greater understanding of tradeoffs, but also limitations, struggles, and shortcomings. 

## Some of the shortcomings/issues/limitations we faced during development:

1. Notifications: In our opinion, our greatest shortcoming and issue was the notification system for our application.
We identified push notifications as a great way to re-engage users who had forgotten about updating their habit
status. These would of course be delivered when the browser was closed. Push notifications, as it turned out, 
are rather difficult to implement on a non-native web application. Services that allowed us to send push notifications
for our web application either required more developed hosting, a monthly fee, and/or very tedious setup on a device by
device basis. Even in the best case, we couldn't find a push notification solution that worked for all popular browsers.
We decided instead to maintain our sanity, and implement gentle reminders within the browser to users using notifyJS. We
wish we could have implemented push notifications, but the time and effort tradeoff wasn't worth it in our opinion.

2. (David, write about analytics here?)

## Homework #5- App Prep and Distrubution:

### Our Tech Stack and Services used:

- Node.js w/express
- Parse
- Gulp (minification/spriting)
- Parse Analytics (usage monitoring/analytics)
	* email: beerye432@gmail.com
	* pass: foodie101
- Raygun.io (error monitoring)
	* email: b4clark@ucsd.edu
	* pass: foodie101





