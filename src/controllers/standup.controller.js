const standupService = require('../services/standup.service');

async function getStandupTable(req, res, next) {
    try {
        res.json(await standupService.getStandupTable());
    } catch (err) {
        console.error(`Error while getting Standup Table`, err.message);
        next(err);
    }
}

module.exports = {
    getStandupTable
};