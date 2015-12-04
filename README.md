# Welcome to Foodie101's ViceVirtue App

ViceVirtue is designed to help users better themselves by providing a place for them to track their daily habits and goals. 

There were a lot of design choices (listed in detail in README.rtf) that had to be made during the creation of ViceVirtue, and with these choices came
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

2. For Parse Analytics, it would be very hard to keep track of specific cases since there would be a need for a lot of grouping
of data for one case. Information would not show in analytics if that specific case you want is not implemented within the code. 
Knowing this, we decided to only group up to three types of data on some cases while the majority is two. (This gives us a sense 
of what the users are doing with this application.) Another challenge would be testing our analytics submission for every page.
Once the analytics information is submitted to Parse it stays there and cannot be removed. This proves to be an annoyance since
you have to be precise on what to submit, so if the structure of what we submitted changes, it would create another additional data in Parse and keep old data we do not use anymore.

3. The Android proof of concept was a unique challenge. Reformatting our application to work with PhoneGap was a very unique
and tedious challenge. The file structure had to be redesigned, as well as all of the filepaths (for every css, js, html, image).
Building the Android app apk once I was satisfied was a pain simply because cordova (tool PhoneGap uses to build applications)
required an outdated version of the Android SDK platform which I had to hunt down and install. The android app version of our 
web app is definitely similar in terms of functionality, but it is apparent that you can't just make an effortless transition
from web app to android app. Other usability concerns have to be addressed, and a lot of fine tuning done before the Android
version is consumer-ready. 


## Instruction for Parse Analytics
1. Login with the Parse Account provided below.
2. Navigate to our application and click on analytics.
3. On the left, click on Events which is right below Audience.
4. Below the navigation bar, change from API Requests to Custom Breakdown.
5. On the right, change API Requests to any of the drop down values below read.
6. From there you could apply filters to what data you want to see.
7. You can save this information and add another event with the "+" symbol to make comparisons.

## Homework #5- App Prep and Distrubution:

### Our Tech Stack and Services used:

- Node.js w/express
- Parse
- Gulp (bundling/minification/spriting/other automated tasks - our [wiki](https://github.com/beerye432/vicevirtue101/wiki) has more information)
- Parse Analytics (usage monitoring/analytics)
	* email: beerye432@gmail.com
	* pass: foodie101
- Raygun.io (error monitoring)
	* email: b4clark@ucsd.edu
	* pass: foodie101
- PhoneGap (Android Proof of Concept)
	* vicevirtue.apk
- Heroku (deployment)
	* http://vicevirtue101.herokuapp.com
