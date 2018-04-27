# Intro #
I wanted to find a more flexible solution for my HomeSeer control panel. Previously I have been using HSTouch, but it's still a windows application from early 2000 something and it completely lack flexibility. Besides the licensing changed, and I was faced with a huge price tag if I would like to continue.

Since I'm a web developer, of course the best solution would be to make a web application. I poked around, and found the ASCII interface of HomeSeer, where it's possible to make a socket connect and listen to live events. Combined with the JSON interface, it's also possible to get status and values, + controlling HomeSeer by setting values and running events. The proxy is based on the one in [https://forums.homeseer.com/forumdisplay.php?f=1279](https://forums.homeseer.com/forumdisplay.php?f=1279 "HSMetro") 

I chose ReactJS as my developer environment. Then I could also use this project to learn some new stuff. This project is not intended to be an application that suites everybody, since it is heavily tuned to my own setup. Use it for your own setup and get expired.
