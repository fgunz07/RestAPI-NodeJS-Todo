const express = require('express'),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	mongoose = require('mongoose'),
	config = require('./config'),
	routes = require('./app/routes/server.route'),
	controller = require('./app/controller/controller'),
	restAPI = express.Router(),
	app = express();

	//connection database
	mongoose.connect(config.database);

	//register all my middleware
	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use('/api', restAPI);

	//Lahat nang routing dito
	restAPI.get('/' , routes.defaultPage);
	restAPI.route('/users')
			.post(controller.Create)
			.get(controller.Listusers)
	restAPI.route('/users/:id')
			.put(controller.Updated)
			.delete(controller.userDelete)
			.get(controller.findOne)

	//template engine go!!!
	app.set('views', './app/views');
	app.set('view engine' , 'pug');

	app.listen(config.port, ()=>{
		console.log(`Server running: ${config.port}`);
	})

