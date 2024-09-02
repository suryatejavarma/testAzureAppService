const controller = require('../controllers/test.controller');


module.exports = (router) => {
    router.get('/test', controller.test);
}