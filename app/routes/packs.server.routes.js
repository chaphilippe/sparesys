'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users');
	var packs = require('../../app/controllers/packs');

	// Packs Routes
	app.route('/packs')
		.get(packs.list)
		.post(users.requiresLogin, packs.create);
	
	app.route('/packs/:packId')
		.get(packs.read)
		.put(users.requiresLogin, packs.hasAuthorization, packs.update)
	    .delete(users.requiresLogin, packs.hasAuthorization, packs.delete);

	// Finish by binding the Pack middleware
	app.param('packId', packs.packByID);
};