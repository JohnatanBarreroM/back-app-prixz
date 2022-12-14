const { response, request } = require('express');


const usuariosGet = (req = request, res = response) => {

    const { q, nombre='noname', apikey } = req.query;

    res.json({
        msg: 'get-API jijihiu',
        q,
        nombre,
        apikey
    })

}
const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;
    res.json({
        msg: 'post-API jijihiu',
        nombre,
        edad
    })

}
const usuariosPut = (req, res = response) => {
    const { id } = req.params;
    res.json({
        msg: 'pUT',
        id
    })

}
const usuariosPatch = (req, res = response) => {

    res.json({
        msg: 'patch-API jijihiu'
    })

}
const usuariosDelete = (req, res = response) => {

    res.json({
        msg: 'delete-API jijihiu'
    })

}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}