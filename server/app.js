module.exports = function(app) {

	var models = require("./model/models.server")();

    require("./services/url.service.server.js")(app, models);
};