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

        // GET: CommonFormInputs
        public ActionResult CommonFormInputs()
        {
            ViewBag.Title = "Common Form Input Elements (Bootstrap and Kendo UI).";

            return View();
        }
    }
}