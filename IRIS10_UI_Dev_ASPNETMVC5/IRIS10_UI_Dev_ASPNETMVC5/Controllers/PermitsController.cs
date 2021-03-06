﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IRIS10_UI_Dev_ASPNETMVC5.Controllers
{
    public class PermitsController : Controller
    {
        // Add standard permit views
        // GET: AddStandardPermit
        public ActionResult StdPermitGenReqFields()
        {
            ViewBag.Title = "Add Standard Permit Form Grid";

            return View();
        }

        public ActionResult StdPermitOwnerFields()
        {
            ViewBag.Title = "Owner Fields For Standard Permits Screen";

            return View();
        }

        public ActionResult StdPermitSiteFields()
        {
            ViewBag.Title = "Site Fields for Standard Permits Screen";

            return View();
        }

        public ActionResult StdPermitApplicantField()
        {
            ViewBag.Title = "Applicant Fields for Standard Permits Screen";

            return View();
        }

        public ActionResult StdPermitsContractorFields()
        {
            ViewBag.Title = "Contractor Fields for Standard Permits Screen";

            return View();
        }

        public ActionResult StdPermitUserFields()
        {
            ViewBag.Title = "Add Standard Permit - User Fields";

            return View();
        }

        // Add utility permit views
        public ActionResult UtilAddPermitRequiredFields()
        {
            ViewBag.Title = "Add Utility Permit - Required Fields";

            return View();
        }

        public ActionResult UtilAddPermitGeneralFields()
        {
            ViewBag.Title = "Add Utility Permit - General Fields";

            return View();
        }

        public ActionResult UtilAddPermitAppFields()
        {
            ViewBag.Title = "Add Utility Permit - Applicant Fields";

            return View();
        }

        public ActionResult UtilAddPermitContractorFields()
        {
            ViewBag.Title = "Add Utility Permit - Contractor Fields";

            return View();
        }

        public ActionResult UtilAddPermitUserFields()
        {
            ViewBag.Title = "Add Utility Permit - User Fields";

            return View();
        }

        // Add ODOT permit views
        public ActionResult ODOTAddPermitRequiredFields()
        {
            ViewBag.Title = "Add ODOT Permit - Required Fields";

            return View();
        }

        public ActionResult ODOTAddPermitGeneralFields()
        {
            ViewBag.Title = "Add ODOT Permit - General Fields";

            return View();
        }

        public ActionResult ODOTAddPermitLoadInfoFields()
        {
            ViewBag.Title = "Add ODOT Permit - Load Information Fields";

            return View();
        }

        public ActionResult ODOTAddPermitRouteFields()
        {
            ViewBag.Title = "Add ODOT Permit - Route Fields";

            return View();
        }

        public ActionResult ODOTAddPermitAxleFields()
        {
            ViewBag.Title = "Add ODOT Permit - Axle Fields";

            return View();
        }

        // Edit standard permit views
        public ActionResult StdPermitEditRequiredFields()
        {
            ViewBag.Title = "Edit Standard Permit - Required Fields";

            return View();
        }

        public ActionResult StdPermitEditGeneralFields()
        {
            ViewBag.Title = "Edit Standard Permit - General Fields";

            return View();
        }

        public ActionResult StdPermitEditOwnerFields()
        {
            ViewBag.Title = "Edit Standard Permit - Owner Fields";

            return View();
        }

        public ActionResult StdPermitEditSiteFields()
        {
            ViewBag.Title = "Edit Standard Permit - Site Fields";

            return View();
        }

        public ActionResult StdPermitEditApplicantFields()
        {
            ViewBag.Title = "Edit Standard Permit - Applicant Fields";

            return View();
        }

        public ActionResult StdPermitEditContractorFields()
        {
            ViewBag.Title = "Edit Standard Permit - Contractor Fields";

            return View();
        }

        // Utility permit edit forms

        public ActionResult UtilEditRequiredFields()
        {
            ViewBag.Title = "Edit Utility Permit - Required Fields";

            return View();
        }

        public ActionResult UtilEditGeneralFields()
        {
            ViewBag.Title = "Edit Utility Permit - General Fields";

            return View();
        }

        public ActionResult UtilEditApplicantFields()
        {
            ViewBag.Title = "Edit Utility Permit - Applicant Fields";

            return View();
        }

        public ActionResult UtilEditSubContractorFields()
        {
            ViewBag.Title = "Edit Utility Permit - Sub Contractor Fields";

            return View();
        }

        // ODOT permit edit forms

        public ActionResult ODOTEditRequiredFields()
        {
            ViewBag.Title = "Edit ODOT Permit - Required Fields";

            return View();
        }

        public ActionResult ODOTEditGeneralFields()
        {
            ViewBag.Title = "Edit ODOT Permit - General Fields";

            return View();
        }

        public ActionResult ODOTEditLoadFields()    
        {
            ViewBag.Title = "Edit ODOT Permit - Load Information Fields";

            return View();
        }

        public ActionResult ODOTEditRouteFields()
        {
            ViewBag.Title = "Edit ODOT Permit - Route Fields";

            return View();
        }

        public ActionResult ODOTEditAxleFields()
        {
            ViewBag.Title = "Edit ODOT Permit - Axle Fields";

            return View();
        }

        // GET: CommonFormInputs
        public ActionResult CommonFormInputs()
        {
            ViewBag.Title = "Common Form Input Elements (Bootstrap and Kendo UI).";

            return View();
        }
    }
}