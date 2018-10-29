Technologies
main dependencies (packages our code will use in production)
express  -  to create a node web server
MongoDB driver  -   to connect to Mongo DB
React  -  to describe our user interfaces
React-DOM  -  to render those user interfaces on both the frontend and the backend

Dev-dependcies (used only in a local development environment)
webpack  -   a tool to translate modular code into something that browsers understand
Babel  -   transfrom modern JS features that are not yet supported in all browsers
nodemon  -  to monitor our files and auto-restart Node for us when we save changes to disk
eslint  -   ???

description of directory structure
src/  -  contains source of our generated working files.  All modular front-end code is in here.
public/  -  to host our static assets like HTML, JS, and CSS files that will actually be loading on clients.
api/  -   for our backend API server

Index Files
The index name is used to reference the starting point in every directory

NPM Scripts
"start": "nodemon --exec babel-node server.js --ignore public/"  -  to run the node server
"dev": "webpack -wd"  -  to transform the source files to a bundled file for the browser


local vs global
babel-node was installed locally, not globally, however, it is available under ./node_modules/.bin/babel-node