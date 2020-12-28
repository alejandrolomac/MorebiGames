const express = require('express');
const admin = require('../components/admin/network');

const routes = function(server) {
    server.use('/', admin);
}

module.exports = routes;