const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
	//Rescatar querys de la request
	const { q, nombre = 'No Name', apikey, page = 1, limit = 10 } = req.query;

	res.json({
		msg: 'get api - controlador',
		q,
		nombre,
		apikey,
		page,
		limit,
	});
};

const usuariosPost = (req, res = response) => {
	//Rescatar el body del POST
	const { nombre, edad } = req.body;

	res.status(201).json({
		msg: 'post API - controlador',
		nombre,
		edad,
	});
};

const usuariosPut = (req, res = response) => {
	const { id } = req.params;
	res.json({
		msg: 'put api - controlador',
		id,
	});
};

const usuariosPatch = (req, res = response) => {
	res.json({
		msg: 'patch api - controlador',
	});
};

const usuariosDelete = (req, res = response) => {
	res.json({
		msg: 'delete api - controlador',
	});
};

module.exports = {
	usuariosGet,
	usuariosPut,
	usuariosPost,
	usuariosDelete,
	usuariosPatch,
};
