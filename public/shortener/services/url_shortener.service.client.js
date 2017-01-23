(function(){
    angular
        .module("URLShortener")
        .factory("URLShortenerService", URLShortenerService);

    function URLShortenerService($http) {
        var api = {
            createURL: createURL,
            getURLByShortURL: getURLByShortURL,
            getURLByID: getURLByID
        };
        return api;

        function createURL(url) {
            var newURL = {
                decoded_url: url
            };
            return $http.post("/api/shorten", url);
        }

        function getURLByShortURL(shortURL){
            return $http.get('/api/shorten/' + shortURL)
        }

        function getURLByID(id){
            var request = {
                _id: id
            }
            return $http.get('/api/shorten', request);
        }
    }
})();