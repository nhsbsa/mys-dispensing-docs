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
    res.redirect('summary-add'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('lft-start-day'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/deleteDate/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('table-grid1'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('table-grid1'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/addToSummary/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('lft-start-day'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('declaration2'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/addEnterVaccine01/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('all-vaccine-table-dropdown-1-10'); 
  } else {
    res.redirect('all-vaccine-table-dropdown-1-10');
  }
});

router.get(/addEnterVaccine1111/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('table-summary'); 
  } else {
    res.redirect('start-page');
  }
});

router.get(/addEnterVaccine1120/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('table-summary'); 
  } else {
    res.redirect('start-page');
  }
});

router.get(/addEnterVaccine2123/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('table-summary'); 
  } else {
    res.redirect('start-page');
  }
});

router.get(/addEnterVaccine0/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('table-summary'); 
  } else {
    res.redirect('start-page');
  }
});

router.get(/addEnterVaccine0110/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('table-summary'); 
  } else {
    res.redirect('all-vaccine-table-dropdown-1-10-pagination');
  }
});

router.get(/addContractor/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('create-contractor-1'); 
  } else {
    res.redirect('caseworker-nav');
  }
});

router.get(/addRetrospective/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('doctor-details'); 
  } else {
    res.redirect('start-page-1');
  }
});

router.get(/updateContractorP/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('update-contractor-personal-list'); 
  } else {
    res.redirect('caseworker-nav');
  }
});

router.get(/updateContractorB/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('update-contractor-banking-list'); 
  } else {
    res.redirect('caseworker-nav');
  }
});

router.get(/deactivateContractor/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('deactivate-contractor-confirmation'); 
  } else {
    res.redirect('deactivate-contractor-list');
  }
});

router.get(/deactivateAnotherContractor/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('deactivate-contractor-list'); 
  } else {
    res.redirect('caseworker-nav');
  }
});

router.get(/addPerformer/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('create-performer'); 
  } else {
    res.redirect('caseworker-nav');
  }
});

router.get(/assignPerformer/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('assign-performer-to-contractor-confirmation'); 
  } else {
    res.redirect('assign-performer-to-contractor-list');
  }
});

router.get(/assignMorePerformer/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('assign-performer-to-contractor-list'); 
  } else {
    res.redirect('contractor-nav');
  }
});

router.get(/deactivatePerformer/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('deactivate-performer-confirmation'); 
  } else {
    res.redirect('deactivate-performer-list-with-search');
  }
});

router.get(/deactivateAnotherPerformer/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('deactivate-performer-list-with-search'); 
  } else {
    res.redirect('caseworker-nav');
  }
});

router.get(/addSchool/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('schools-nav'); 
  } else {
    res.redirect('caseworker-nav');
  }
});

router.get(/deactivateSchool/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('deactivate-school-confirmation'); 
  } else {
    res.redirect('deactivate-school-list');
  }
});

router.get(/deactivateAnotherSchool/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('deactivate-school-list'); 
  } else {
    res.redirect('caseworker-nav');
  }
});

router.get(/assignSchool/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('assign-school-to-contractor-confirmation'); 
  } else {
    res.redirect('assign-school-to-contractor-list');
  }
});

router.get(/assignMoreSchool/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('assign-school-to-contractor-list'); 
  } else {
    res.redirect('caseworker-nav');
  }
});

router.get(/grantUserAccess/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('user-access-grant'); 
  } else {
    res.redirect('leadmanager-nav');
  }
});

router.get(/confirmUserAccess/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('user-access-grant-confirmation'); 
  } else {
    res.redirect('user-access-grant');
  }
});

router.get(/revokeUserAcceess/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('user-access-revoke'); 
  } else {
    res.redirect('leadmanager-nav');
  }
});

router.get(/confirmUserRevoke/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('user-access-revoke-confirmation'); 
  } else {
    res.redirect('user-access-revoke');
  }
});

router.get(/updateUserAccess/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('user-access-update-confirmation'); 
  } else {
    res.redirect('user-access-update-details');
  }
});

router.get(/updateMoreUserAccess/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('user-access-update'); 
  } else {
    res.redirect('leadmanager-nav');
  }
});

router.get(/approveRejectContractor/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('review-contractor-approve'); 
  } else {
    res.redirect('review-contractor-reject-reason');
  }
});

router.get(/approveRejectPerformer/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('review-performer-approve'); 
  } else {
    res.redirect('review-performer-reject-reason');
  }
});

router.get(/updateContractor/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('update-contractor-personal-confirmation'); 
  } else {
    res.redirect('update-contractor-personal-with-ods');
  }
});

router.get(/updateBank/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('update-contractor-banking-confirmation'); 
  } else {
    res.redirect('update-contractor-banking-details');
  }
});

router.get(/updatePerformer/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('update-performer-confirmation'); 
  } else {
    res.redirect('update-performer-record');
  }
});

router.get(/updateAddPerformer/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('update-performer-list-with-search'); 
  } else {
    res.redirect('caseworker-nav');
  }
});

router.get(/updateSchoolConfirmation/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('update-school-confirmation'); 
  } else {
    res.redirect('caseworker-nav');
  }
});

router.get(/reviewOthersFromContractor/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('review-submissions'); 
  } else {
    res.redirect('leadmanager-nav');
  }
});

router.get(/reviewOthersFromSchool/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('review-submissions'); 
  } else {
    res.redirect('leadmanager-nav');
  }
});

router.get(/reviewOthersFromPerformer/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('review-submissions'); 
  } else {
    res.redirect('leadmanager-nav');
  }
});

router.get(/approveRejectSchool/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('review-school-approve'); 
  } else {
    res.redirect('review-school-reject-reason');
  }
});

router.get(/updateSchoolFromContractor/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('update-school'); 
  } else {
    res.redirect('review-rejections');
  }
});

router.get(/updateSchool/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('update-school-list'); 
  } else {
    res.redirect('caseworker-nav');
  }
});

router.get(/updateOdsConfirm/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('update-performer-list'); 
  } else {
    res.redirect('update-performer-ods');
  }
});

module.exports = router;
