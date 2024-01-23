const express = require('express');

const {
    httpGetAllFonts, 
    httpGetFontFromName,
    httpGetFontFromIndex,
    httpGetSimilarFontsFromEmbedding } = require('./fonts.controller');

const fontsRouter = express.Router();

fontsRouter.get('/', httpGetAllFonts);
fontsRouter.get('/name', httpGetFontFromName);
fontsRouter.get('/index', httpGetFontFromIndex);

fontsRouter.post('/query-embedding', httpGetSimilarFontsFromEmbedding);

module.exports = fontsRouter;