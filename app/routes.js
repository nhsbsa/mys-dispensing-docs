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

router.get(/influenzaOne/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('influenza-details'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('vaccine-typhoid'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/influenzaTwo/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('influenza-details'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('typhoid-details'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/typhoidAdd/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('typhoid-details'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('summary'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/typhoidOne/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('typhoid-details'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('vaccine-hep-a'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/addAnotherOne/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('patient-details'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('declaration-lft'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/addAnotherVaccine/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('table-dropdown-no-records1'); 
  } else {
    res.redirect('table-summary');
  }
});

router.get(/addAnotherFlu/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('table-dropdown-no-records2'); 
  } else {
    res.redirect('table-summary');
  }
});

router.get(/addDoctor/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('doctor-details'); 
  } else {
    res.redirect('summary-all-doctors');
  }
});

router.get(/addanotherDoctor/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('doctor-details'); 
  } else {
    res.redirect('summary-all-doctors');
  }
});

router.get(/addAnotherL4/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('table-grid1'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('declaration2'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/addAnotherL0/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('table-grid0'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('declaration2'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/addAnotherL1/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('table-grid1'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('declaration2'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/addAnotherL2/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('table-grid2'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('declaration2'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/addAnotherL3/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('table-grid3'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('declaration2'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/addAnotherLft/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('table-grid'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('declaration2'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/areYouSure/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('declaration-lft'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('lft-start-day'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/addAnotherDate/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('lft-start-day'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('declaration-lft'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

module.exports = router;
