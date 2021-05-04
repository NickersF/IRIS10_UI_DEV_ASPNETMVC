using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IRIS10_UI_Dev_ASPNETMVC5.Controllers
{
    public class StepWizardController : Controller
    {
        // GET: StepWizard
        public ActionResult Index()
        {
            ViewBag.Title = "IRIS10 UI Development Sandbox - Step Wizard";
            return View();
        }
    }
}