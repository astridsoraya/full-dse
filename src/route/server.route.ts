module.exports = function(app){
    const PrivacyPolicy = require('../model/server.model.ts');

    // getting the generated HTML
    app.post('/dse/', PrivacyPolicy.insert);
    app.get('/dse/:id', PrivacyPolicy.find);
}