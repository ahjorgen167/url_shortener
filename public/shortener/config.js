(function() {
    angular
        .module("URLShortener")
        .config(Config);

    function Config($routeProvider) {
        $routeProvider
            
           .when("/", {
                templateUrl: "views/url_shortener.view.client.html",
                controller: "URLShortenerController",
                controllerAs: "model"
            })
           .when("/error", {
                templateUrl: "views/error.view.client.html"
           })
           .when("/:uid", {
                controller: "URLRedirectController",
                templateUrl: "views/redirect.view.client.html"
           })
            .otherwise({
                redirectTo: "/"
            });
    }
})();