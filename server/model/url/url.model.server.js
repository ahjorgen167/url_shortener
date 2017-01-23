module.exports = function() {
    var validUrl = require('valid-url');
    
    var q = require("q");
    var mongoose = require("mongoose")
    var urlSchema = require("./url.schema.server")();
    var base64 = require('../../js/base64.js')

    var urlModel = mongoose.model("url", urlSchema);
    var api = {
        createURL: createURL,
        findURLById: findURLById,
        updateURL: updateURL,
        deleteURL: deleteURL
    };

    return api;

    function getURLModel(){
        return urlModel;
    }

    function createURL(url) {
        var deferred = q.defer();
        console.log(url);
        if(!url.decoded_url){
            deferred.reject("Not valid input");
            return deferred.promise;            
        }
        url.decoded_url = _correctURL(url.decoded_url);
        urlModel
            .findOne({decoded_url: url.decoded_url}, 
                function(err, responseURL){
                    if (err) {
                        deferred.reject(err);
                    } else if (!responseURL) {
                        urlModel
                            .create(url, function(err, newURL){
                                if (err){
                                    deferred.reject(err);
                                } else {
                                    var response = {
                                        shorten_url: base64.encode(newURL._id)
                                    };
                                    deferred.resolve(response);
                                }
                        });
                    } else {
                        var response = {
                            shorten_url: base64.encode(responseURL._id)
                        };
                        deferred.resolve(response);
                    }
        });
        return deferred.promise;
    }

    function _correctURL(urlString){
        if (!validUrl.isUri(urlString)){
            urlString = 'http://' + urlString;
        }
        return urlString;
    }

    function findURLById(UrlId){
        var deferred = q.defer();

        urlModel.findById(UrlId, function(err, url){
            if (err) {
                deferred.reject(err);
            }
            else{
                deferred.resolve(url);
            }
        });
        return deferred.promise;
    }

    function updateURL(UrlId, url){
        delete Url._id;
        var deferred = q.defer();

        urlModel.update({_id: UrlId},{$set: Url}, function(err, url){
            if (err) {
                deferred.reject(err);
            }
            else{
                deferred.resolve(url);
            }
        });
        return deferred.promise;
    }

    function deleteURL(UrlId) {
        var deferred = q.defer();

        urlModel.remove({_id: UrlId}, function(err, Url){
            if (err) {
                deferred.reject(err);
            }
            else{
                deferred.resolve(Url);
            }
        });
        return deferred.promise;
    }
};
