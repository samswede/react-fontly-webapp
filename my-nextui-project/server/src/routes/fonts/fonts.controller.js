const { getAllFonts } = require('../../models/fonts.model');

async function httpGetAllFonts(req, res) {
    return res.status(200).json(await getAllFonts());
}

module.exports = {
    httpGetAllFonts,
};