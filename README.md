# URL Shortener for Nintex

This is my URL shortener for the Nintex application process.  For this project, I am using the MEAN Stack to implement the code, Heroku to manage the server, Grunt/Karma to provice testing and Bootstrap is used for the styling.

I chose the MEAN (MongoDB, Express, Angular, Node) Stack for a couple of compellig reasons.  The main reason is I tried to replicate the stack used at Nintex as closely as possible (though I'm not entirely sure everything that is used by your team).  Furthermore, in an application like this, where a server can potentially get many relatively simple requests repeatedly, Node can provide stable parallelism.  Express, as a framework, works well with Node to provide easy to manage HTTP/S requests.  Angular is fantastic in handling the front logic while also making it easy to manage the DOM.  MongoDB is quite fast and scalable and is a very good option in case as this application grows.

* **A couple of notes**:
  - Everything is RESTful
  - There is some simple security provided, primarily to prevent other people from hitting my APIs without going through the webpage
