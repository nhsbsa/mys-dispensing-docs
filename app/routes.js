// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line


// dispensing docs routes //
router.post('/fp34d/v1/vaccine-add-another', function(req,res) {

    var addAnother = req.session.data['add-another']

    if (addAnother == 'yes') {
        res.redirect('/fp34d/v1/doctor-details')
    }
    else if(addAnother == 'submit') {
        res.redirect('/optometry/ssecs/form/declare-submit')
    }
    else {
        res.redirect('/fp34d/v1/start-page')
    }
})
module.exports = router;
