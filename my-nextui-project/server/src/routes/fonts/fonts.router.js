const express = require('express');

const {
    httpGetAllFonts, } = require('./fonts.controller');

const fontsRouter = express.Router();

fontsRouter.get('/', httpGetAllFonts);


module.exports = fontsRouter;