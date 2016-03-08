I decided to use grails as Java Framnework.

The app has 2 parts, server side and client side.

The databse is autmaticaly created in memory so doesn't need to install mysql or similar.

The server side is a rest api developed with grails and the client side is formed with angular.js.

This project is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.

There are one user creted in the bootstrap :

username:test
password:test123

The seed contains AngularJS libraries, test libraries and a bunch of scripts all preconfigured for instant web development gratification. Just clone the repo (or download the zip/tarball), start up our (or yours) webserver and you are ready to develop and test your application.

The seed app doesn't do much, just shows how to wire two controllers and views together. You can check it out by opening app/index.html in your browser (might not work file file:// scheme in certain browsers, see note below).

Note: While angular is client-side-only technology and it's possible to create angular webapps that don't require a backend server at all, we recommend hosting the project files using a local webserver during development to avoid issues with security restrictions (sandbox) in browsers. The sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr, etc to function properly when an html page is opened via file:// scheme instead of http://.

How to use angular-seed

Clone the angular-seed repository and start hacking...

Running the app during development

You can pick one of these options:

serve this repository with your webserver
install node.js and run scripts/web-server.js
Then navigate your browser to http://localhost:<port>/app/index.html to see the app running in your browser.

Running the app in production

This really depends on how complex is your app and the overall infrastructure of your system, but the general rule is that all you need in production are all the files under the app/ directory. Everything else should be omitted.

Angular apps are really just a bunch of static html, css and js files that just need to be hosted somewhere, where they can be accessed by browsers.

If your Angular app is talking to the backend server via xhr or other means, you need to figure out what is the best way to host the static files to comply with the same origin policy if applicable. Usually this is done by hosting the files by the backend server or through reverse-proxying the backend server(s) and a webserver(s).

Running unit tests

We recommend using jasmine and Karma for your unit tests/specs, but you are free to use whatever works for you.

Requires node.js, Karma (sudo npm install -g karma) and a local or remote browser.

start scripts/test.sh (on windows: scripts\test.bat)
a browser will start and connect to the Karma server (Chrome is default browser, others can be captured by loading the same url as the one in Chrome or by changing the config/karma.conf.js file)
to run or re-run tests just change any of your source or test javascript files
End to end testing

Angular ships with a baked-in end-to-end test runner that understands angular, your app and allows you to write your tests with jasmine-like BDD syntax.

Requires a webserver, node.js + ./scripts/web-server.js or your backend server that hosts the angular static files.

Check out the end-to-end runner's documentation for more info.

create your end-to-end tests in test/e2e/scenarios.js
serve your project directory with your http/backend server or node.js + scripts/web-server.js
to run do one of:
open http://localhost:port/test/e2e/runner.html in your browser
