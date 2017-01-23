(function(){
    angular
        .module("URLShortener")
        .controller("URLShortenerController", URLShortenerController)
        .controller("URLRedirectController", URLRedirectController);

    function URLShortenerController($location, URLShortenerService, $rootScope, $window) {
        var vm = this;
        vm.shorten = shorten;
        vm.error = null;

        function shorten(url) {
            vm.short_url = null;
            vm.error = null;
            if(!url){
                vm.error = "You must include a link to send!";
                return
            }
            URLShortenerService
                .createURL(url)
                .then(
                    function(response){
                    vm.short_url = $window.location.href + response.data.shorten_url;
                }, function(err){
                    vm.error = "There was a problem generating your URL.  Please try again later.";
                    console.log(err);
                });
        }
    }

    function URLRedirectController($location, URLShortenerService, $rootScope, $routeParams, $window){
        var vm = this;
        vm.redirect = redirect;
        vm.short_url = $routeParams.uid;
        function redirect(){
            URLShortenerService
                .getURLByShortURL(vm.short_url)
                .then(
                    function(response){
                        if(!response.data.decoded_url){
                            $location.url('/error');
                        } else {
                            var url = response.data;
                            vm.decoded_url = url.decoded_url;
                            $window.location = url.decoded_url;
                        }
                    }, function(err){
                        console.log(err);
                        $location.url('/error');
                    });

        }
        redirect();
    }
})();