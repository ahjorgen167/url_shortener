# URL Shortener for Nintex



## [URL Shortener](https://huntiny.heroku.com)

This is my URL shortener for the Nintex application process.  For this project, I am using the MEAN Stack to implement the code, Heroku to manage the server, Grunt/Karma to provice testing and Bootstrap is used for the styling.

I chose the MEAN (MongoDB, Express, Angular, Node) Stack for a couple of compelling reasons.  The main reason is I tried to replicate the stack used at Nintex as closely as possible (though I'm not entirely sure everything that is used by your team).  Furthermore, in an application like this, where a server can potentially get many relatively simple requests repeatedly, Node can provide stable parallelism.  Express, as a framework, works well with Node to provide easy to manage HTTP/S requests.  Angular is fantastic in handling the front logic while also making it easy to manage the DOM.  MongoDB is quite fast and scalable and is a very good option in case as this application grows.

## Algorithm

The primary logic behind the URL shortener is based on some work found in the reference linked below.  How this code works, is that when a URL is submitted, it is inserted into the database with an incrementing primary key.  This primary key becomes the basis of the short url.  The key is a number, but it is changed converted into a base64 then turned into a string, and that turns into the value at the end of the short url and this means that as more URLS are inserted into this database, the short URL will become longer.  This is the same logiced exhibited by TinyURL.  In fact, most design decisions I made were based on the logic found in TinyURL.  For instance, if a URL already exists in the database, no new URL is created and instead the old shortened is returned.  Additionally, this accepts 'invalid' URLs (though if the input string is found to be an invalid URL, an 'https://' is appended to the front of the string'), just as TinyURL does.  So, for instance, a string like 'dfadf' is acceptable as an input and will return a shortened URL.

Additionally, nearly all other design

[Reference](http://stackoverflow.com/questions/742013/how-to-code-a-url-shortener)

* **A couple of notes**:
  - Everything is RESTful
  - There is some simple security provided, primarily to prevent other people from hitting my APIs without going through the webpage
