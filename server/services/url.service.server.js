module.exports = function(app, models) {
    var base64 = require('../js/base64.js');

    var urlModel = models.urlModel;

    app.post('/api/shorten', createURL);
    app.get('/api/shorten/', findURLById);
    app.get('/api/shorten/:uid', findURLByShortURL);
    app.put('/api/shorten/:uid', updateURL);
    app.delete('/api/shorten/:uid', deleteURL);

    function findURLByShortURL(req, res){
        var shortURL = req.params.uid;
        var decodedURL = base64.decode(shortURL);
        urlModel
            .findURLById(decodedURL)
            .then(function(url){
                res.json(url);
            }, function(error){
                console.log(error);
                res.sendCode(400).send(error);
            });
    }

    function createURL(req, res) {

        var url = req.body;
        urlModel
            .createURL(url)
            .then(function(url){
                res.json(url);
            }, function(error){
                console.log(error);
                res.sendCode(400).send(error);
            });
    }

    function findURLById(req, res) {
        var urlId = req.params.uid;
        urlModel
            .findURLById(urlId)
            .then(function(url){
                res.json(url);
            }, function(error){
                console.log(error);
                res.sendCode(400).send(error);
            });
    }

    function deleteURL(req, res) {
        var urlId = req.params.uid;
        urlModel
            .deleteURL(urlId)
            .then(function(response){
                res.json(response);
            }, function(error){
                res.sendCode(400).send(error);
            });
    }

    function updateURL(req, res) {
        var url = req.body;
        var urlId = req.params.uid;
        urlModel
            .updateURL(urlId, url)
            .then(function(response){
                res.json(response);
            }, function(error){
                res.sendCode(400).send(error);
            });
    }
};