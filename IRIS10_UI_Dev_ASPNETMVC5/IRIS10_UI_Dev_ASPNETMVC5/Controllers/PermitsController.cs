using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IRIS10_UI_Dev_ASPNETMVC5.Controllers
{
    public class PermitsController : Controller
    {
        // GET: AddStandardPermit
        public ActionResult AddStandardPermit()
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

        // GET: CommonFormInputs
        public ActionResult CommonFormInputs()
        {
            ViewBag.Title = "Common Form Input Elements (Bootstrap and Kendo UI).";

            return View();
        }
    }
}